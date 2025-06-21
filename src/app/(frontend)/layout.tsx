import Navbar from "@/components/Navbar";
import { getNavMenu } from "@/utils/fetching";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const menus = await getNavMenu();

	return (
		<div className="overflow-hidden h-screen">
			<Navbar datas={menus} />
			{children}
		</div>
	);
}
