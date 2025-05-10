import { IResAPI, ITimelinePersonal } from "@/types/data";
import { NextResponse } from "next/server";

export async function GET() {
	const definiteLink = "<a href='https://definite.co.id/about-us/'>PT. Definite Maji Arsana</a>";

	return NextResponse.json<IResAPI<ITimelinePersonal[]>>({
		status: 200,
		data: [
			{
				logo: `${process.env.URL_APP}/images/smk10.webp`,
				title: "Vocational School",
				time: "2016 - 2019",
				description:
					"<p>From here ( SMK 10 Jakarta), I start my exploration about programming. Web, desktop, android development, and many more I've learned from this school. And because of that I've found I'll choosing web development</p>",
			},
			{
				logo: `${process.env.URL_APP}/images/definite-logo.png`,
				title: `<p>Internship at ${definiteLink}`,
				time: "2018",
				description:
					"As part of internship program from my school, I've an internship at PT. Definite Maji Arsana is the place I've pick to Internship for 3 months. Such a great story here</p>",
			},
			{
				logo: `${process.env.URL_APP}/images/juara-smk10.JPG`,
				title: "Win the <a href='https://camp.pijarmahir.id/'>#Arkchallenge</a> as third place",
				description:
					"I can't even say a word anymore about this honor. This is my first glory to win the charter and make the school proud on the public and I've to say thank you to my team. Yappp!",
				time: "December 2018",
			},
			{
				logo: `${process.env.URL_APP}/images/Logo_UPNVJ.png`,
				title: "College at UPN Veteran Jakarta",
				description: "Looking for my official certified bachelor",
				time: "Nov 2019 - May 2025",
			},
			{
				logo: `${process.env.URL_APP}/images/definite-logo.png`,
				title: `Having my first proffesional job at ${definiteLink}`,
				description: "As part of my last internship, they give me my first contract as Junior Frontend Developer",
				time: "Nov 2020 - May 2021",
			},
			{
				title: "Joining <a href='https://abangexpress.co.id'>Abang Express</a>, a logistic export platform",
				description:
					"This is my first mid-long period for my professional job. Here I develop their primary product for being used for their agent around Indonesia and customer around the world",
				logo: `${process.env.URL_APP}/images/ax-logo.png`,
				time: "November 2021 - June 2023",
			},
			{
				logo: `${process.env.URL_APP}/images/toqcer.webp`,
				title: "Building a digital agency called <a href='https://github.com/toqcer'>Toqcer</a>",
				description: "Me with a friend, having a digital agency called Toqcer that can provide service for web and mobile app development",
				time: "Mid 2021 - Present",
			},

			{
				logo: `${process.env.URL_APP}/images/kelaspintar-logo.svg`,
				title: "Short-term production project with <a href='https://www.kelaspintar.id'>Kelas Pintar</a>",
				description:
					"In my short-period, I'm joining a temporary major-production phase for <a href='https://www.kelaspintar.id'>Kelas Pintar</a>",
				time: "July 2023 - September 2023",
			},
			{
				logo: `${process.env.URL_APP}/images/ibid-logo.png`,
				title: 'Joining an Auction House company called <a href="https://www.ibid.astra.co.id/">IBID</a>',
				description:
					"Here as Frontend Developer, I'm joining develop their primary product <a href='https://www.ibid.astra.co.id/'>IBID Apps</a> and <a href='https://acv.astra.co.id'>Astra Car Valuation</a>. I'd also develop their internal application for car inspection <a href='https://webbackend.acv.astra.co.id'>WBE ACV</a> and sourcing management called <a href='https://sms.ibid.astra.co.id/'>SMS</a>",
				time: "September 2023 - Present",
			},
		],
	});
}
