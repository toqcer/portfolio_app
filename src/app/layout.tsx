import Navbar from "@/components/Navbar";
import "@/css/globals.css";
import { getNavMenu } from "@/utils/fetching";
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
				<Navbar datas={menus} />

				{children}
			</body>
		</html>
	);
}
