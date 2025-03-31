import { IProject, IResAPI } from "@/types/data";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json<IResAPI<IProject[]>>({
		status: 200,
		data: [
			{
				title: "Astra Car Valuation",
				link: "https://acv.astra.co.id",
				description: "<p>Jasa inspeksi mobil terpercaya</p>",
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
			},
		],
	});
}
