import Link from "next/link";
import { getNavMenu, getPersonInfo, getTopSkills } from "@/utils/fetching";
import { MingcuteArrowsDownFill } from "@/components/MingcuteArrowsDownFill";
import SkillSlider from "@/components/SkillSlider";

export default async function Home() {
	const personInfo = await getPersonInfo();
	const menus = await getNavMenu();
	const topSkills = await getTopSkills();

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
			<section id={String(menus[0].href).replaceAll("#", "")} className="min-h-screen snap-start pt-24 bg-black/90 text-white">
				<div className="container">
					<h1 className="text-3xl uppercase text-center tracking-wider mb-5">Passionate</h1>

					<div className="grid grid-cols-3 gap-3">
						{topSkills.map(category => (
							<SkillSlider key={category.label} datas={category.data} slidesPerView={1} spaceBetween={0} className="h-[200px] w-full" />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
