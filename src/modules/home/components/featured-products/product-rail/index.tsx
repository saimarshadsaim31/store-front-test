import { Region } from "@medusajs/medusa";
import { Text, clx } from "@medusajs/ui";
import Image from "next/image";
import Link from "next/link";

import InteractiveLink from "@modules/common/components/interactive-link";
import ProductPreview from "@modules/products/components/product-preview";
import { ProductCollectionWithPreviews } from "types/global";
import { getCategoriesList, getCollectionsList } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

import img1 from "../../../../../../public/carousel/img-1.jpg";

export default async function ProductRail({
	collection,
	region,
}: {
	collection: ProductCollectionWithPreviews;
	region: Region;
}) {
	const { products } = collection;
	const { product_categories } = await getCategoriesList(0, 6);

	if (!products) {
		return null;
	}

	return (
		<div className="content-container pt-6">
			<div className="flex flex-row justify-between">
				<h1 className="font-semibold text-[28px] pb-4">
					Shop <br />
					By Categories
				</h1>
				<div className="flex justify-between mb-8 text-black">
					<Link href={'/store'}>
							<span className="flex space-x-1 px-1">
								<p>View All</p>
								<span className="bg-primaryColor rounded-full px-2 py-1 hover:cursor-pointer hover:bg-primaryColor/80 transition-all duration-300">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="white"
										className="size-4"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
										/>
									</svg>
								</span>
								</span>
								</Link>
				</div>
			</div>
			<ul className="flex flex-col lg:flex-row gap-2 justify-between">
				{product_categories?.slice(0, 4).map((c) => {
					if (c.parent_category) {
						return;
					}

					const children =
						c.category_children?.map((child) => ({
							name: child.name,
							handle: child.handle,
							id: child.id,
						})) || null;

					return (
						<li
							className="flex flex-col gap-2  text-center rounded-[20px] "
							style={{
								boxShadow:
									"0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 6px 0px rgba(0, 0, 0, 0.10)",
							}}
							key={c.id}
						>
							<LocalizedClientLink
								className={clx(
									"hover:text-ui-fg-base space-y-4 rounded-[20px] flex flex-col",
									children && "txt-small-plus"
								)}
								href={`/categories/${c.handle}`}
								data-testid="category-link"
							>
								<div className=" flex items-center justify-center flex-col">

									<div>
										{
											c.thumbnail ? (
												<Image
												src={c.thumbnail}
												alt="-"
													width={900}
													
												height={200}
												className=" rounded-t-[20px] w-[900px] h-[300px] object-cover"
											/>
											) : (
												<Image
												src={img1}
												alt="-"
												width={500}
												height={200}
												className=" rounded-t-[20px] w-auto h-[100px] object-cover"
											/>
											)
										}
									</div>
									<div className="font-semibold text-lg flex flex-wrap py-5 text-[#221F1F]/50 hover:text-black transition-all duration-300 ease-in-out" >
										{c.name}
									</div>
								</div>
							</LocalizedClientLink>

							{/* {children && (
								<ul className="grid grid-cols-1 ml-3 gap-2">
									{children &&
										children.map((child) => (
											<li key={child.id}>
												<LocalizedClientLink
													className="hover:text-ui-fg-base"
													href={`/categories/${child.handle}`}
													data-testid="category-link"
												>
													{child.name}
												</LocalizedClientLink>
											</li>
										))}
								</ul>
							)} */}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
