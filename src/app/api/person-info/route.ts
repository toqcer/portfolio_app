import { IPersonInfo, IResAPI } from "@/types/data";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json<IResAPI<IPersonInfo>>({
		status: 200,
		data: {
			full_name: "Bariq Dharmawan",
			nickname: "Bariq",
			slogan: "A software engineer who’s having an ambition of being useful for Indonesia and its citizens",
		},
	});
}
