"use client";

import { useIntersectionObserver } from "@uidotdev/usehooks";
import { IProject } from "@/types/data";
import CardInfo from "../CardInfo";
import Btn from "../Btn";
import { useState } from "react";
import dynamic from "next/dynamic";

const ModalDetailProject = dynamic(() => import("@/components/ModalDetailProject"), {
	ssr: false,
});

const SectionProjects = ({ datas }: { datas: IProject[] }) => {
	const [popupIsOpen, setPopupIsOpen] = useState(false);

	const [selectedProject, setSelectedProject] = useState<IProject | undefined>(undefined);

	const [ref, entry] = useIntersectionObserver({
		threshold: 0,
		root: null,
		rootMargin: "0px",
	});

	return (
		<div className="grid grid-cols-3 gap-4" ref={ref}>
			{datas.map(project => (
				<CardInfo
					key={project.title.replaceAll(" ", "-")}
					title={project.title}
					href={project.link}
					subinfo={project.quick_point.map(point => point.label)}
					desc={project.description}
					cover={project.cover}
					className={`${entry?.isIntersecting ? "animate__fadeIn" : "animate__fadeOut"} animate__slow animate__animated`}
				>
					<Btn
						className="bg-amber-300 text-white mt-3"
						onClick={() => {
							setSelectedProject(project);
							setPopupIsOpen(true);
						}}
						fullWidth
						isPill
					>
						See detail
					</Btn>
				</CardInfo>
			))}

			<ModalDetailProject
				isOpen={popupIsOpen}
				onClose={() => {
					setPopupIsOpen(false);
				}}
				data={selectedProject}
			/>
		</div>
	);
};

export default SectionProjects;
