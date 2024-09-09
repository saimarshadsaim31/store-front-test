//@ts-ignore
import React from "react";
import Image from "next/image";
import img1 from "../../../../../../public/carousel/img-1.jpg";
import cat from "../../../../../../public/product-cards/cat.png";
import dog from "../../../../../../public/product-cards/dog.png";
import food from "../../../../../../public/product-cards/food.png";
import comsetics from "../../../../../../public/product-cards/cosmetics.png";
import { ProductPreviewType } from "types/global";
import Link from "next/link";
import ProductPreview from "@modules/products/components/product-preview";

interface CarouselProps {
	items: ProductPreviewType[];
}

const ProductCards: React.FC<CarouselProps> = ({ items }) => {
	function getRandomItems(array: any, count: number) {
		// Shuffle array
		const shuffled = array.sort(() => 0.5 - Math.random());
		// Get sub-array of first `count` elements after shuffle
		return shuffled.slice(0, count);
	}
	
	const randomItems = getRandomItems(items, 4);

	return (
		<main className="content-container pt-12 text-[#2D2D2D]">
			{/* section 1 cards and explore section */}
			<section>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center sm:place-items-stretch lg:space-x-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-3 sm:pr-16 space-y-3">
						<h1 className="text-3xl font-semibold sm:text-start text-center">
							Explore <br />
							Products
						</h1>
						<p className=" w-full lg:w-3/4 text-sm">
							Embark on a Boundless Exploration of Innovation with Our Diverse
							Range of Products, Elevating Your Journey to Unveil New Horizons
							and Endless Possibilities.
						</p>
					</div>
					<div className="flex w-fit space-x-5 font-semibold items-center justify-center">
						<div className="grid grid-cols-2 gap-1 place-items-stretch">
							{items.slice(0, 4).map((element, index) => (
								<Image key={index}
									src={element.thumbnail}
									alt={element.title}
									height={500}
									width={500}
									className="w-[30px] h-[30px]  rounded-lg object-cover"
								/>
							))}
						</div>
						<div className="flex flex-col items-stretch">
							<h1>
								Popular Products
								<br />
								<span className="text-[#2D2D2D]/50">+200 Items</span>
							</h1>
							<Link href={'/store'}>
							<span className="flex space-x-1 items-center px-1">
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
				</div>
			</section>

			{/* products section */}
			<section className="pt-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{/* left section */}
					<div className="space-y-3">
						{/* car 01 */}
						<div className="bg-[#F5D9B6] rounded-2xl p-4 text-center h-[200px] flex items-center flex-col justify-center relative">
							<Link href={'/categories/pets'}>
							<Image
								src={dog}
								alt=""
								height={500}
								width={500}
								className="rounded-lg object-cover absolute w-[150px] sm:w-[200px] left-0 -bottom-0"
							/>
							<div>
								<p className="font-semibold text-[#B26C11]">
									Pets Food
								</p>
								<button className="text-black bg-white px-3 py-1 my-2 rounded-3xl ">
									View All
								</button>
							</div>

							<Image
								src={cat}
								alt=""
								height={1000}
								width={1000}
								className="rounded-lg object-cover absolute w-[100px] sm:w-[150px] right-10 -bottom-0"
								/>
								</Link>
						</div>

						{/* card 02 */}
						<div className="bg-[#CCB8D9] rounded-2xl p-4 text-center h-[200px] grid-cols-3 grid place-items-center relative">
							<Link href={'/categories/cosmetics'}>
							<div>
								<p className="font-semibold text-primaryColor">
									Cosmetics
								</p>
								<button className="text-primaryColor bg-white px-3 py-1 my-2 rounded-3xl ">
									View All
								</button>
							</div>
							<Image
								src={comsetics}
								alt=""
								height={500}
								width={500}
								className="rounded-lg object-cover absolute w-[250px] sm:w-[400px] right-10 -bottom-0"
							/>
							<div className="absolute bg-white rounded-xl px-2 py-2 top-[2%] right-[2%]">
								<span className="hover:cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2.5}
										stroke="currentColor"
										className="size-4 transform duration-300 ease-in-out transition hover:rotate-45"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
										/>
									</svg>
								</span>
								</div>
								</Link>
						</div>

						{/* card 03 */}
						<div className="bg-primaryColor rounded-2xl p-4 text-center h-[200px] grid-cols-3 grid place-items-center relative">
						<Link href={'/categories/food'}>
						<div>
								<p className="font-semibold text-white">
									Frozen Food
								</p>
								<button className="text-primaryColor bg-white px-3 py-1 my-2 rounded-3xl ">
									View All
								</button>
							</div>
							<Image
								src={food}
								alt=""
								height={1000}
								width={1000}
								className="rounded-lg object-cover absolute w-[180px] sm:w-[300px] right-10 -bottom-0"
							/>
							<div className="absolute bg-white rounded-xl px-2 py-2 top-[2%] right-[2%]">
								<span className="hover:cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2.5}
										stroke="currentColor"
										className="size-4 transform duration-300 ease-in-out transition hover:rotate-45"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
										/>
									</svg>
								</span>
							</div>
						</Link>
						</div>
					</div>

					{/* featured products */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{/* product 01 */}
						{randomItems.map((element: any, index: number) => (
							
							<div
								key={index}
								
								className=" rounded-[24px] py-2 flex flex-col items-stretch relative"
								style={{
									boxShadow: "14px 9px 16px 0px rgba(34, 31, 31, 0.04)",
								}}
							>
								<div className="flex  flex-row justify-between items-center absolute w-full top-2 pt-0">
									<ul className="flex flex-row space-x-2 relative">
										{/* <li>.</li>
									<li>.</li> */}
									</ul>
									<span className=" hover:cursor-pointer bg-white rounded-xl px-2 py-2 mt-1 mr-3">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
											stroke="currentColor"
											className="size-4 transform duration-300 ease-in-out transition hover:rotate-45"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
											/>
										</svg>
									</span>
								</div>
								<Link href={`/products/${element.handle}`}>
								<Image
									src={element.thumbnail}
									alt={element.title}
									height={1000}
									width={1000}
									className="rounded-t-lg object-cover  w-[400px] h-[200px]"
								/>
								<div className="pt-4 px-3 text-start">
									<p className="text-sm font-semibold text-[#2d2d2d]/50">
										Clothes
									</p>
									<span className="flex justify-between items-center">
										<h1 className="font-semibold line-clamp-2">
											{element.title}
										</h1>
										<p className="bg-primaryColor text-white rounded-2xl px-3 py-2">
											{element.price?.calculated_price}
										</p>
									</span>
									</div>
									</Link>
								</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default ProductCards;
