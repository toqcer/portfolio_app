import { getNavMenu, getTopSkills } from "@/utils/fetching";
import HeadingSection from "../HeadingSection";
import SectionFull from "../SectionFull";
import SkillSlider from "../SkillSlider";

const SectionPassionate = async () => {
	const [menus, topSkills] = await Promise.all([getNavMenu(), getTopSkills()]);

	return (
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
	);
};

export default SectionPassionate;
