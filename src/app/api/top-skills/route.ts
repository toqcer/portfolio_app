import { ICategorySkill, IResAPI } from "@/types/data";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json<IResAPI<ICategorySkill[]>>({
		status: 200,
		data: [
			{
				label: "Programming Language",
				data: [
					{
						image: "/images/js.webp",
						name: "Javascript",
						year_of_experience: 3,
						link: "https://www.javascript.com",
					},
					{
						image: "/images/ts.webp",
						name: "Typescript",
						year_of_experience: 3,
						link: "https://www.typescriptlang.org",
					},
				],
			},
			{
				label: "Framework",
				data: [
					{
						image: "/images/nextjs.svg",
						name: "NextJS",
						year_of_experience: 3,
						link: "https://nextjs.org",
					},
					{
						image: "/images/laravel.webp",
						name: "Laravel",
						year_of_experience: 3,
						link: "https://laravel.com",
					},
				],
			},
			{
				label: "CSS",
				data: [
					{
						image: "/images/tailwind.svg",
						name: "Tailwind CSS",
						year_of_experience: 3,
						link: "https://tailwindcss.com",
					},
					{
						image: "/images/mui.webp",
						name: "Material UI",
						year_of_experience: 3,
						link: "https://mui.com",
					},
				],
			},
			{
				label: "UI Design",
				data: [
					{
						image: "/images/figma.webp",
						name: "Figma",
						year_of_experience: 3,
						link: "https://www.figma.com",
					},
					{
						image: "/images/sketch.png",
						name: "Sketch",
						year_of_experience: 1,
						link: "https://www.sketch.com",
					},
				],
			},
		],
	});
}
