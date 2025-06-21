"use client";

import { IProject } from "@/types/data";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalProps, Tab, Tabs } from "@heroui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { createPortal } from "react-dom";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const ModalDetailProject = ({ isOpen, onClose, data }: { data?: IProject; isOpen: boolean; onClose: ModalProps["onClose"] }) => {
	if (!data) {
		return <></>;
	}
	return createPortal(
		<Modal
			isOpen={isOpen}
			size="2xl"
			className=""
			classNames={{
				base: "bg-zinc-900 shadow-none border border-secondary/50",
				closeButton: "text-white hover:text-black transition-all cursor-pointer",
			}}
			scrollBehavior="inside"
			onClose={onClose}
		>
			<ModalContent>
				<ModalBody>
					<Tabs
						variant="underlined"
						classNames={{
							cursor: "bg-white w-12",
							tabList: "flex-grow",
							tabContent: "text-white opacity-100 group-data-[selected=true]:text-white",
						}}
					>
						<Tab title="Highlight" className="text-white">
							{data?.highlight && (
								<Swiper modules={[Navigation]} slidesPerView={1} navigation>
									{data.highlight.map(highlight => (
										<SwiperSlide key={highlight.label}>
											<div className="h-64 w-full relative">
												<Image fill alt={highlight.label} src={highlight.asset} />
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							)}
						</Tab>
						<Tab title="Stack tech" className="text-white flex items-center gap-4">
							{data?.stack_tech.map(stackTech => (
								<Image height={40} width={40} key={stackTech.label} alt={stackTech.label} src={stackTech.icon} />
							))}
						</Tab>
					</Tabs>
				</ModalBody>
				<ModalFooter className="justify-center items-center gap-3">
					<p className="text-white font-bold text-2xl">{data?.title}</p>
					{data.link && (
						<Link href={data.link} target="__blank">
							<FaExternalLinkAlt color="#8dbdd7" />
						</Link>
					)}
				</ModalFooter>
			</ModalContent>
		</Modal>,
		document.body,
	);
};

export default ModalDetailProject;
