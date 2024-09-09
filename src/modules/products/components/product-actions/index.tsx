"use client";
// add to cart and wishlist button component
import { Region } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Button } from "@medusajs/ui";
import { isEqual } from "lodash";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { useIntersection } from "@lib/hooks/use-in-view";
import { addToCart } from "@modules/cart/actions";
import Divider from "@modules/common/components/divider";
import OptionSelect from "@modules/products/components/option-select";

import MobileActions from "../mobile-actions";
import ProductPrice from "../product-price";
import ProductInfo from "@modules/products/templates/product-info";

type ProductActionsProps = {
	product: PricedProduct;
	region: Region;
	disabled?: boolean;
};

export type PriceType = {
	calculated_price: string;
	original_price?: string;
	price_type?: "sale" | "default";
	percentage_diff?: string;
};

export default function ProductActions({
	product,
	region,
	disabled,
}: ProductActionsProps) {
	const [options, setOptions] = useState<Record<string, string>>({});
	const [isAdding, setIsAdding] = useState(false);

	const countryCode = useParams().countryCode as string;

	const variants = product.variants;

	// initialize the option state
	useEffect(() => {
		const optionObj: Record<string, string> = {};

		for (const option of product.options || []) {
			Object.assign(optionObj, { [option.id]: undefined });
		}

		setOptions(optionObj);
	}, [product]);

	// memoized record of the product's variants
	const variantRecord = useMemo(() => {
		const map: Record<string, Record<string, string>> = {};

		for (const variant of variants) {
			if (!variant.options || !variant.id) continue;

			const temp: Record<string, string> = {};

			for (const option of variant.options) {
				temp[option.option_id] = option.value;
			}

			map[variant.id] = temp;
		}

		return map;
	}, [variants]);

	// memoized function to check if the current options are a valid variant
	const variant = useMemo(() => {
		let variantId: any | undefined = undefined;

		for (const key of Object.keys(variantRecord)) {
			if (isEqual(variantRecord[key], options)) {
				variantId = key;
			}
		}

		return variants.find((v) => v.id === variantId);
	}, [options, variantRecord, variants]);

	// if product only has one variant, then select it
	useEffect(() => {
		if (variants.length === 1 && variants[0].id) {
			setOptions(variantRecord[variants[0].id]);
		}
	}, [variants, variantRecord]);

	// update the options when a variant is selected
	const updateOptions = (update: Record<string, string>) => {
		setOptions({ ...options, ...update });
	};

	// check if the selected variant is in stock
	const inStock = useMemo(() => {
		// If we don't manage inventory, we can always add to cart
		if (variant && !variant.manage_inventory) {
			return true;
		}

		// If we allow back orders on the variant, we can add to cart
		if (variant && variant.allow_backorder) {
			return true;
		}

		// If there is inventory available, we can add to cart
		if (variant?.inventory_quantity && variant.inventory_quantity > 0) {
			return true;
		}

		// Otherwise, we can't add to cart
		return false;
	}, [variant]);

	const actionsRef = useRef<HTMLDivElement>(null);

	const inView = useIntersection(actionsRef, "0px");

	// add the selected variant to the cart
	const handleAddToCart = async () => {
		if (!variant?.id) return null;

		setIsAdding(true);

		await addToCart({
			variantId: variant.id,
			quantity: 1,
			countryCode,
		});

		setIsAdding(false);
	};

	return (
		<>
			<div className="flex flex-col gap-y-2" ref={actionsRef}>
				<ProductInfo product={product} />

				<ProductPrice product={product} variant={variant} region={region} />

				<div>
					{product.variants.length > 1 && (
						<div className="flex flex-col gap-y-4">
							{(product.options || []).map((option) => {
								return (
									<div key={option.id}>
										<OptionSelect
											option={option}
											current={options[option.id]}
											updateOption={updateOptions}
											title={option.title}
											data-testid="product-options"
											disabled={!!disabled || isAdding}
										/>
									</div>
								);
							})}
							{/* <Divider /> */}
						</div>
					)}
				</div>
				

				{/* add to Wishlist Button */}
				<div className="flex  space-x-4">
					{/* <button
						onClick={handleAddToCart}
						className="w-fit px-5 py-2 mt-2 border text-primaryColor bg-white rounded-3xl text-lg border-primaryColor outline-none transition-all duration-300 ease-linear hover:border-2"
					> */}
						{/* <span className="flex space-x-3 items-center justify-center"> */}
							{/* <svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6 "
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg> */}
							{/* <span>Add to Wishlist</span> */}
						{/* </span> */}
					{/* </button> */}
					{/* add to cart Button */}
					<Button
						onClick={handleAddToCart}
						disabled={!inStock || !variant || !!disabled || isAdding}
						variant="primary"
						className="w-fit px-5 py-2 mt-2 bg-primaryColor border text-white rounded-3xl text-lg border-primaryColor outline-none hover:bg-primaryColor"
						isLoading={isAdding}
					>
						{!variant ? (
							<span className="flex space-x-3 items-center justify-center">
								{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
									/>
								</svg>
								<span>Select Varient</span>
							</span>
						) : !inStock ? (
							<span className="flex space-x-3 items-center justify-center">
								{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
									/>
								</svg>
								<span>Out of Stock</span>
							</span>
						) : (
							<span className="flex space-x-3 items-center justify-center">
								{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
									/>
								</svg>
								<span>Add to cart</span>
							</span>
						)}
					</Button>
				</div>
				<MobileActions
					product={product}
					variant={variant}
					region={region}
					options={options}
					updateOptions={updateOptions}
					inStock={inStock}
					handleAddToCart={handleAddToCart}
					isAdding={isAdding}
					show={!inView}
					optionsDisabled={!!disabled || isAdding}
				/>
			</div>
		</>
	);
}
