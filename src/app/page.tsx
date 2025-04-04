import Link from "next/link";
import { getNavMenu, getPersonInfo, getProjects, getTimeline, getTopSkills } from "@/utils/fetching";
import { MingcuteArrowsDownFill } from "@/components/MingcuteArrowsDownFill";
import SkillSlider from "@/components/SkillSlider";
import HeadingSection from "@/components/HeadingSection";
import SectionFull from "@/components/SectionFull";
import CardInfo from "@/components/CardInfo";

export default async function Home() {
	const [menus, personInfo, topSkills, projects, timelines] = await Promise.all([
		getNavMenu(),
		getPersonInfo(),
		getTopSkills(),
		getProjects(),
		getTimeline(),
	]);

	return (
		<div className="snap-y snap-mandatory  overflow-scroll h-screen scroll-smooth">
			<header
				style={{
					backgroundImage: 'url("/images/header.webp")',
				}}
				className="h-screen w-full bg-no-repeat bg-cover bg-fixed bg-blend-overlay bg-black/65 bg-center relative snap-start"
			>
				<div className="text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
					<h1 className="text-6xl mb-2">Hello, I am {personInfo.nickname}</h1>
					<q className="block italic mb-8">{personInfo.slogan}</q>

					<Link
						href={menus[0].href}
						className="bg-secondary hover:bg-amber-400 active:bg-amber-600 transition-all py-3 px-6 gap-2 inline-flex  rounded-full"
					>
						Look down
						<MingcuteArrowsDownFill />
					</Link>
				</div>
			</header>
			<SectionFull id={String(menus[0].href)} className="bg-primary text-white">
				<div className="container">
					<HeadingSection title="Passionate" />

					<div className="grid grid-cols-3 gap-x-3 gap-y-8">
						{topSkills.map(category => (
							<SkillSlider key={category.label} datas={category.data} slidesPerView={1} spaceBetween={0} className="max-h-[150px] w-full" />
						))}
					</div>
				</div>
			</SectionFull>
			<SectionFull id={String(menus[1].href)} className="bg-primary-hover text-white">
				<HeadingSection title="Best Creation" />

				<div className="container">
					<div className="grid grid-cols-3 gap-4">
						{projects.map(project => (
							<CardInfo
								key={project.title.replaceAll(" ", "-")}
								title={project.title}
								href={project.link}
								subinfo={project.quick_point.map(point => point.label)}
								desc={project.description}
								cover={project.cover}
							/>
						))}
					</div>
				</div>
			</SectionFull>
			<SectionFull id={String(menus[2].href)} className="bg-primary text-white">
				<HeadingSection title="About Me" />

				<div className="container">
					{timelines.map(timeline => (
						<div key={timeline.title.replaceAll(" ", "-")}>
							<div dangerouslySetInnerHTML={{ __html: timeline.title }} className="link-blue" />
						</div>
					))}
				</div>
			</SectionFull>
		</div>
	);
}
