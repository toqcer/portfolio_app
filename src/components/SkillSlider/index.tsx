"use client";

import { IDataSkill } from "@/types/data";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SkillSlider = ({
	className,
	spaceBetween,
	slidesPerView,
	datas,
}: PropsWithChildren<{
	datas: IDataSkill[];
	className?: string;
	slidesPerView: number | "auto";
	spaceBetween: number | string | undefined;
}>) => {
	return (
		<Swiper
			className={className}
			spaceBetween={spaceBetween}
			slidesPerView={slidesPerView}
			onSlideChange={() => console.log("slide change")}
			onSwiper={swiper => console.log(swiper)}
			scrollbar
			mousewheel
			direction="vertical"
			modules={[Scrollbar, Mousewheel]}
		>
			{datas.map(data => (
				<SwiperSlide key={data.name}>
					<div className="flex flex-col h-full items-center justify-center gap-4">
						<Image src={data.image} alt={data.name} height={60} width={60} />

						{data.link ? (
							<Link className="text-xl text-white" href={data.link}>
								{data.name}
							</Link>
						) : (
							<p className="text-xl text-white">{data.name}</p>
						)}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SkillSlider;
