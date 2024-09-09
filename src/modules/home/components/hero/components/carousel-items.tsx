"use client";
import { ProductPreviewType } from "types/global";
import Rating from './stars';
import Image from "next/image";

interface CarouselProps {
	items: ProductPreviewType[];
}

const CarouselItems: React.FC<CarouselProps> = ({ items }) => {
	return (
		<div className="relative content-container">
			<div className="flex overflow-hidden mx-auto items-center justify-center">
				<div className="flex transition-transform ease-in-out duration-300">
					{items.map((item, index) => (
						<div key={index} className=" h-full rounded-[20px]">
							<div className="border rounded-[20px] sm:h-[200px] lg:h-[300px] flex flex-col items-center bg-white ">
								<Image
									src={item.thumbnail}
									alt={item.title}
									height={1000}
									width={1000}
									className="h-[90px] w-[180px] sm:h-[100px] sm:w-[200px] lg:w-[300px] lg:h-[180px] object-cover rounded-t-[20px]"
									// className="h-[90px] w-auto sm:h-[100px] lg:h-[180px] object-cover rounded-t-[20px]"
								/>
								<div className="text-center sm:text-start p-2 sm:p-3 space-y-2">
									{item.categories &&
										item.categories.map((c) => (
											<p
												key={c.name}
												className="text-xs sm:text-sm font-semibold text-gray-600"
											>
												{c.name}
											</p>
										))}
									<h3 className="text-sm sm:text-base font-semibold line-clamp-1">
										{item.title}
									</h3>
									{/* star ratings */}
									<Rating
										rating={item.starRating}
										reviewNumbers={item.userReviews}
									/>
									<p className="text-sm sm:text-base font-semibold text-[#2d2d2d] md:text-lg">
										{item.articlePrice}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CarouselItems;
