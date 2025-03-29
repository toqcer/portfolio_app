import { IResAPI } from "@/app/types/data";
import { IMenu } from "@/app/types/menu";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { name: string } }) {
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
				label: params.name,
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
