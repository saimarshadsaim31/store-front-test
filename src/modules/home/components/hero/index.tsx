"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import img1 from "../../../../../public/carousel/background.png";
import "./style/swiperStyle.css";
import { ProductPreviewType } from "types/global";
import Link from "next/link";

interface CarouselProps {
	items: ProductPreviewType[];
}

const Hero: React.FC<CarouselProps> = ({ items }) => {
	const randomIndex = Math.floor(Math.random() * items.length);
	const item = items[randomIndex];

	const carouselItem: ProductPreviewType = {
		id: "",
		handle: "",
		thumbnail: item.thumbnail,
		title: item.title,
		categories: item.categories,
		articlePrice: item.price?.original_price,
		starRating: "4.5",
		userReviews: "800",
	};

	return (
		<div className="relative content-container mt-5">
			<Swiper
				className="w-full max-h-[450px] rounded-3xl"
				direction="vertical"
				slidesPerView={1}
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{
					delay: 7000, // Increased delay for smoother transition
					disableOnInteraction: false,
				}}
				modules={[Pagination, Autoplay, EffectFade]}
				effect="fade"
				speed={1000} // Set the transition speed to smoothen animation
			>
				{/* slider 01 */}
				<SwiperSlide
					className="grid grid-cols-2 place-items-center relative bg-cover bg-center"
					style={{
						backgroundImage: `url(${img1.src})`,
						height: "450px",
					}}
				>
					<div className="grid grid-cols-1 md:grid-cols-2 px-3 pt-20 place-items-center">
						<div className="text-[#2d2d2d] text-start pl-6 md:pl-32">
							<h1 className="text-[22px] sm:text-[28px] lg:text-[32px] text-[#2d2d2d] font-semibold">
								Lowest Prices <br />
								Best Quality Shopping
							</h1>
							<p className="py-4 text-[16px] font-semibold w-full lg:w-3/5">
								Unleash tomorrow's technology today: elevating your world with{" "}
								<span className="text-primaryColor">innovative solutions</span>{" "}
								and unparalleled performance!
							</p>
							<Link
								href={"/store"}
								className="text-primaryColor border px-4 py-2 border-primaryColor rounded-lg text-center hover:cursor-pointer hover:bg-primaryColor hover:text-white transition-colors duration-300 ease-in"
							>
								Shop Now
							</Link>
						</div>
					<div></div>
					</div>
				</SwiperSlide>

				{/* slider 02 */}
				<SwiperSlide
					className="grid grid-cols-2 place-items-center relative bg-cover bg-center"
					style={{
						backgroundImage: `url(${img1.src})`,
						height: "450px",
					}}
				>
						<div className="grid grid-cols-1 md:grid-cols-2 px-3 pt-20 place-items-center">
						<div className="text-[#2d2d2d] text-start pl-6 md:pl-32">
							<h1 className="text-[22px] sm:text-[28px] lg:text-[32px] text-[#2d2d2d] font-semibold">
								Top Brands
								<br />
								Unmatched Value
							</h1>
							<p className="py-4 text-[16px] font-semibold w-full lg:w-3/5">
								Experience the best from the most trusted brands, offering{" "}
								<span className="text-primaryColor">unmatched value</span> and
								quality for every purchase.
							</p>
							<Link
								href={"/store"}
								className="text-primaryColor border px-4 py-2 border-primaryColor rounded-lg text-center hover:cursor-pointer hover:bg-primaryColor hover:text-white transition-colors duration-300 ease-in"
							>
								Shop Now
							</Link>
						</div>
						<div></div>
					</div>
				</SwiperSlide>

				{/* slider 03 */}
				<SwiperSlide
					className="grid grid-cols-2 place-items-center relative bg-cover bg-center"
					style={{
						backgroundImage: `url(${img1.src})`,
						height: "450px",
					}}
				>
					<div className="grid grid-cols-1 md:grid-cols-2 px-3 pt-20 place-items-center">
						<div className="text-[#2d2d2d] text-start pl-6 md:pl-32">
							<h1 className="text-[22px] sm:text-[28px] lg:text-[32px] text-[#2d2d2d] font-semibold">
								Elite Selection
								<br />
								Budget-Friendly
							</h1>
							<p className="py-4 text-[16px] font-semibold w-full lg:w-3/5">
								Choose from an elite selection of products that are{" "}
								<span className="text-primaryColor">budget-friendly</span>{" "}
								without compromising on quality.
							</p>
							<Link
								href={"/store"}
								className="text-primaryColor border px-4 py-2 border-primaryColor rounded-lg text-center hover:cursor-pointer hover:bg-primaryColor hover:text-white transition-colors duration-300 ease-in"
							>
								Shop Now
							</Link>
						</div>
						<div></div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Hero;
