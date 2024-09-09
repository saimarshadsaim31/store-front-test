import React from "react";

const Subscribe = () => {
	return (
		<section className="content-container">
			<div
				className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center py-6 px-6 md:px-8 lg:px-12 rounded-[20px] my-8"
				style={{
					boxShadow:
						"0px 10px 15px 0px rgba(0, 0, 0, 0.10), 0px 4px 6px 0px rgba(0, 0, 0, 0.05)",
				}}
			>
				<div className="text-[#2D2D2D] text-center md:text-left">
					<h1 className="text-[18px] md:text-[24px] lg:text-[28px] font-semibold">
						To Get The Latest Updates <br /> Subscribe To The Newsletter
					</h1>
					<p className="text-[14px] md:text-[16px] lg:text-[18px] pt-2 md:pt-3 lg:pt-4">
						Sign up for our newsletter to stay updated on the latest offers and
						exclusive deals!
					</p>
				</div>
				<div className="w-fit">
					<div
						className="flex gap-1 sm:gap-4 rounded-[60px] border px-1 sm:px-3 py-2"
						style={{
							boxShadow:
								"0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 6px 0px rgba(0, 0, 0, 0.10)",
						}}
					>
						<input
							type="email"
							name=""
							id=""
							className="px-3 py-2 w-full outline-none bg-transparent"
							placeholder="Enter Your Email"
							required
						/>
						<button className="bg-primaryColor text-white flex items-center justify-center gap-2 px-4 py-2 rounded-3xl hover:cursor-pointer hover:bg-primaryColor/80 transition-all duration-200 ease-in-out">
							Subscribe{" "}
							<span>
								<svg
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.48975 3.53027L12.4897 8.53027L7.48975 13.5303"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M12.4897 8.52979L1.85254 8.52979"
										stroke="white"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
