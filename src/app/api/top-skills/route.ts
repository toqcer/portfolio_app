import { ICategorySkill, IResAPI } from "@/app/types/data";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json<IResAPI<ICategorySkill[]>>({
		status: 200,
		data: [
			{
				label: "Programming Language",
				data: [
					{
						name: "PHP",
						image: "/images/php.webp",
						year_of_experience: 3,
					},
					{
						image: "/images/js.webp",
						name: "Javascript",
						year_of_experience: 3,
					},
					{
						image: "/images/ts.webp",
						name: "Typescript",
						year_of_experience: 3,
					},
				],
			},
			{
				label: "Framework",
				data: [
					{
						image: "/images/nextjs.webp",
						name: "NextJS",
						year_of_experience: 3,
					},
					{
						image: "/images/laravel.webp",
						name: "Laravel",
						year_of_experience: 3,
					},
				],
			},
		],
	});
}
