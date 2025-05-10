import { IResAPI } from "@/types/data";
import { IMenu } from "@/types/menu";
import { NextResponse } from "next/server";

export async function GET(_: Request, props: { params: Promise<{ name: string }> }) {
	const { name } = await props.params;
	return NextResponse.json<IResAPI<IMenu[]>>({
		status: 200,
		data: [
			{
				label: "Passionate",
				href: "#skills",
				isHomeLink: false,
			},
			{
				label: "Best Creation",
				href: "#creation",
				isHomeLink: false,
			},
			{
				label: name,
				href: "/",
				isHomeLink: true,
			},
			{
				label: "About Me",
				href: "#about",
				isHomeLink: false,
			},
			{
				label: "Find Me",
				href: "#contact",
				isHomeLink: false,
			},
		],
	});
}
