import Nav from "@/components/Dashboard/Nav";
import "@/css/globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="overflow-hidden h-screen">
			<Nav />
			{children}
		</div>
	);
}
