"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Rating from "./stars"
import Image from "next/image";
import { ProductPreviewType } from "types/global";
import Link from "next/link";

interface CarouselProps {
  items: ProductPreviewType[];
}
const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="relative content-container ">
      <h1 className="text-3xl font-semibold absolute -top-[5%]">
        Just <br /> For You
      </h1>

      <div className="mt-10 pt-10">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {items.slice(0, 7).map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full lg:w-1/5 pt-14 pb-2 md:pb-8 h-full"
            >
              <div className="border rounded-[20px] shadow-md flex flex-col items-center">
                <Link href={`/products/${item.handle}`}>
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    height={1000}
                    width={1000}
                    className="w-[270px] h-[200px] object-cover rounded-t-[20px] "
                  />
                  <div className="text-center md:text-start py-4 px-4 space-y-2 ">
                    {item.categories &&
                      item.categories.map((c) => (
                        <p
                          key={c.name}
                          className="text-sm font-semibold text-gray-600"
                        >
                          {c.name}
                        </p>
                      ))}
                    <h3 className="text-base font-semibold line-clamp-1">
                      {item.title}
                    </h3>
                    <Rating rating={"3.4"} reviewNumbers={"200"} />
                    <p className="font-semibold text-[#2d2d2d] text-[18px]">
                      {item.price?.original_price}
                    </p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Previous Button */}
          <button className="custom-prev-button absolute right-12 top-5 z-10 bg-white p-2 rounded-full shadow-lg focus:outline-none transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Custom Next Button */}
          <button className="custom-next-button absolute right-0 top-5 z-10 bg-white p-2 rounded-full shadow-lg focus:outline-none transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
