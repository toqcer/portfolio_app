import "@/css/globals.css";
import "swiper/css";
import "swiper/css/scrollbar";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
