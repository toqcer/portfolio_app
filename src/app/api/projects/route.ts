import { IProject, IResAPI } from "@/types/data";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json<IResAPI<IProject[]>>({
		status: 200,
		data: [
			{
				cover: `${process.env.URL_APP}/images/acv.png`,
				title: "Astra Car Valuation",
				link: "https://acv.astra.co.id",
				description: "<p>Jasa inspeksi mobil terpercaya</p>",
				highlight: [
					{
						label: "Homebanner ACV",
						asset: "/images/acv.png",
					},
					{
						label: "Booking ACV",
						asset: "/images/acv_booking_inspeksi.png",
					},
				],
				quick_point: [
					{
						id: crypto.randomUUID(),
						label: "pengerjaan team",
					},
					{
						id: crypto.randomUUID(),
						label: "desain dan API disediakan",
					},
					{
						id: crypto.randomUUID(),
						label: "atas nama PT Serasi Autoraya",
					},
				],
				stack_tech: [
					{
						icon: "/images/MUI.webp",
						link: "",
						label: "Material UI",
					},
					{
						icon: "/images/zustand.webp",
						link: "",
						label: "Zustand",
					},
					{
						icon: "/images/nextjs.webp",
						label: "Next JS",
					},
				],
			},
			{
				cover: `${process.env.URL_APP}/images/gaia.png`,
				title: "GAIA Hotel Bandung",
				link: "https://thegaiabandung.com",
				description: "<p>GAIA Hotel Reservation</p>",
				quick_point: [
					{
						id: crypto.randomUUID(),
						label: "pengerjaan team",
					},
					{
						id: crypto.randomUUID(),
						label: "integrasi antara HTML dengan laravel",
					},
					{
						id: crypto.randomUUID(),
						label: "atas nama PT Definiite Maji Arsana",
					},
				],

				stack_tech: [
					{
						icon: "/images/MUI.webp",
						link: "",
						label: "Material UI",
					},
					{
						icon: "/images/zustand.webp",
						link: "",
						label: "Zustand",
					},
					{
						icon: "/images/nextjs.webp",
						label: "Next JS",
					},
				],
			},
		],
	});
}
