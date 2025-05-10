"use client";

import { IMenu } from "@/types/menu";
import NavLink from "../NavLink";
import useGlobalState from "@/hooks/useGlobalState";

const Navbar = ({ datas }: { datas: IMenu[] }) => {
	const { isNavShouldDarkOnScrolled } = useGlobalState(state => state);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<nav
			className={`fixed top-0 z-30 w-full h-20 flex items-center transition-[background-color] justify-center gap-6 text-white uppercase ${
				isNavShouldDarkOnScrolled ? "bg-1d1d1d" : "bg-transparent"
			}`}
		>
			{datas.map(menu => (
				<NavLink
					href={menu.href}
					label={String(menu.label).replaceAll("+", " ")}
					key={menu.label}
					isHomeLink={menu.isHomeLink}
					onClick={() => {
						if (menu.isHomeLink) {
							scrollToTop();
							document.querySelector("#header-home")?.scrollIntoView();
						}
					}}
					useHoverUnderline
				/>
			))}
		</nav>
	);
};

export default Navbar;
