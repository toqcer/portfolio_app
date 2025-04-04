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
			},
			{
				label: "Best Creation",
				href: "#creation",
			},
			{
				label: name,
				href: "#",
			},
			{
				label: "About Me",
				href: "#about",
			},
			{
				label: "Find Me",
				href: "#contact",
			},
		],
	});
}
