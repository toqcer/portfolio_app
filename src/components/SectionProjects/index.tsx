"use client";

import { useIntersectionObserver } from "@uidotdev/usehooks";
import { IProject } from "@/types/data";
import CardInfo from "../CardInfo";

const SectionProjects = ({ datas }: { datas: IProject[] }) => {
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
				/>
			))}
		</div>
	);
};

export default SectionProjects;
