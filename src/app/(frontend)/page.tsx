import Link from "next/link";
import { getNavMenu, getPersonInfo, getProjects, getTimeline } from "@/utils/fetching";
import { MingcuteArrowsDownFill } from "@/components/MingcuteArrowsDownFill";
import HeadingSection from "@/components/HeadingSection";
import SectionFull from "@/components/SectionFull";
import BodyFulLScroll from "@/components/BodyFullScroll";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import Btn from "@/components/Btn";
import ListSocialMedia from "@/components/ListSocialMedia";
import { IProfileSocial } from "@/types/data";
import { BiLogoInstagram, BiLogoLinkedinSquare, BiLogoWhatsapp } from "react-icons/bi";
import SectionPassionate from "@/components/SectionPassionate";
import SectionProjects from "@/components/SectionProjects";

const SOCIAL_MEDIA: IProfileSocial[] = [
	{
		href: "https://www.linkedin.com/in/dharmawan03",
		iconName: <BiLogoLinkedinSquare />,
		title: "Bariq Dharmawan",
		iconColor: "#30a2c6",
		isHalfWidth: true,
	},
	{
		href: "https://www.instagram.com/bariqdharmawans/",
		iconName: <BiLogoInstagram />,
		title: "bariqdharmawans",
		iconColor: "#80148a",
		isHalfWidth: true,
	},
	{
		href: "https://wa.me/6285159116034",
		title: "085159116034",
		isHalfWidth: false,
		iconName: <BiLogoWhatsapp />,
		iconColor: "#58c84a",
	},
];

export default async function Home() {
	const [menus, personInfo, projects, timelines] = await Promise.all([getNavMenu(), getPersonInfo(), getProjects(), getTimeline()]);

	return (
		<BodyFulLScroll>
			<header
				style={{
					backgroundImage: 'url("/images/header.webp")',
				}}
				id="header-home"
				className=" h-screen w-full bg-no-repeat bg-cover bg-fixed bg-blend-overlay bg-black/65 bg-center relative snap-start"
			>
				<div className="text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
					<h1 className="text-6xl mb-2">Hello, I am {personInfo.nickname}</h1>
					<q className="block italic mb-8 text-xl">{personInfo.slogan}</q>

					<Link
						href={menus[0].href}
						className="bg-secondary hover:bg-amber-400 active:bg-amber-600 transition-all py-3 px-6 gap-2 inline-flex  rounded-full"
					>
						Look down
						<MingcuteArrowsDownFill />
					</Link>
				</div>
			</header>

			<SectionPassionate />

			<SectionFull id={String(menus[1].href)} className="bg-primary-hover text-white">
				<HeadingSection title="Best Creation" />

				<div className="container">
					<SectionProjects datas={projects} />
				</div>
			</SectionFull>

			<SectionFull id={String(menus[3].href)} className="bg-primary text-white pb-8">
				<div className="container">
					<HeadingSection title="About Me" />

					<div className="lg:w-10/12 mx-auto text-center">
						<div className="flex gap-8 flex-col mb-10">
							{timelines.map(timeline => (
								<div
									key={timeline.title.replaceAll(" ", "-")}
									className="lg:w-1/2 even:ml-auto  
									text-start relative before:bg-primary before:absolute before:top-0 before:start-0 before:w-full before:h-full
									before:z-10
									even:after:-left-1/2 even:after:border-s even:after:rounded-tl-2xl
									after:border-db92 after:absolute after:w-full after:h-1/2 after:top-1/2 after:border-t 
									odd:after:border-e odd:after:-right-1/2 bottom-0 odd:after:rounded-tr-2xl px-3 last:after:hidden"
								>
									<figure className="relative z-20 flex items-start even:flex-row-reverse gap-3">
										<Image
											src={timeline.logo}
											alt={DOMPurify.sanitize(timeline.title, {
												USE_PROFILES: { html: false, svg: false, mathMl: false, svgFilters: false },
											})}
											className="rounded-full overflow-hidden object-scale-down flex-none border border-amber-300 p-1 bg-white"
											width={50}
											height={50}
											style={{
												width: "50px",
												height: "50px",
											}}
										/>
										<figcaption>
											<div className="mb-2">
												<div dangerouslySetInnerHTML={{ __html: timeline.title }} className="link-blue text-xl font-bold" />
												<time className="text-sm">{timeline.time}</time>
											</div>
											<div dangerouslySetInnerHTML={{ __html: timeline.description }} className="link-blue" />
										</figcaption>
									</figure>
								</div>
							))}
						</div>
						<Btn
							className="text-white bg-30a2 py-2"
							href="https://drive.google.com/file/d/1bQzcruXom9_GW8KnJvfLJhaxnImLGybz/view?usp=drive_link"
							isPill
						>
							Read more on my CV
						</Btn>
					</div>
				</div>
			</SectionFull>
			<SectionFull id={String(menus[4].href)} className="bg-primary-hover text-white pb-6">
				<p className="text-4xl text-secondary uppercase text-center">Find Me On</p>
				<div className="container">
					<ListSocialMedia datas={SOCIAL_MEDIA} className="my-8" />

					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63447.861021077246!2d106.78426373663224!3d-6.330329567184771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edd09765e7bb%3A0x7380be8b8ea8ad82!2sJagakarsa%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1744454381389!5m2!1sen!2sid"
						width="100%"
						height={450}
						style={{
							border: 0,
						}}
						allowFullScreen
						loading="lazy"
						className="rounded-lg"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</SectionFull>
		</BodyFulLScroll>
	);
}
