import { IResAPI, ITimelinePersonal } from "@/types/data";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json<IResAPI<ITimelinePersonal[]>>({
		status: 200,
		data: [
			{
				title: "Vocational School",
				time: "2016 - 2019",
				description:
					"<p>From here ( SMK 10 Jakarta), I start my exploration about programming. Web, desktop, android development, and many more I've learned from this school. And because of that I've found I'll choosing web development</p>",
			},
			{
				title: "<p>Internship at <a href='https://definite.co.id/about-us/'>PT.Definite Maji Arsana</a></p>",
				time: "2018",
				description:
					"<p>In <time>February 2018</time>, I'm trying to <q>work</q> on a real place. Its called PT. Definite Maji Arsana is the place I've pick to Internship for 3 months. Such a great story here</p>",
			},
			{
				title: "Win the <a href='https://camp.pijarmahir.id/'>#Arkchallenge</a> as third place",
				description:
					"I can't even say a word anymore about this honor. This is my first glory to win the charter and make the school proud on the public and I've to say thank you to my team. Yappp!",
				time: "December 2018",
			},
			{
				title: "Building a digital agency called Toqcer 2021 - Present",
				description: "Me with a friend, having a digital agency called Toqcer that can provide service for web and mobile app development",
				time: "2021 - Present",
			},
			{
				title: "Having my first proffesional job at PT DEFINITE MAJI ARSANA",
				description: "Junior Frontend Developer",
				time: "Nov 2020 - May 2021",
			},
		],
	});
}
