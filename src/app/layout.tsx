import NavLink from "@/components/NavLink";
import "./css/globals.css";
import { getNavMenu } from "./utils/fetching";
import "swiper/css";
import "swiper/css/scrollbar";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const menus = await getNavMenu();

	return (
		<html lang="en">
			<body className="overflow-hidden h-screen">
				<nav className="fixed top-0 z-10 w-full h-20 flex items-center justify-center gap-6 text-white uppercase">
					{menus.map(menu => (
						<NavLink href={menu.href} label={String(menu.label).replaceAll("+", " ")} key={menu.label} useHoverUnderline />
					))}
				</nav>
				{children}
			</body>
		</html>
	);
}
