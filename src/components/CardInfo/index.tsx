"use client";

import Image from "next/image";
import Link from "next/link";
import Btn from "../Btn";
import { ICardInfo } from "./types";

const CardInfo = ({ title, desc, href, subinfo, cover, className = "" }: ICardInfo) => {
	return (
		<figure className={className}>
			<div className="relative h-[200px]">
				<Image src={cover} fill alt="Astra Car Valuation" />
			</div>
			<figcaption className="bg-orange text-white p-3">
				{href ? (
					<Link href={href} className="border-b border-aqua pb-2 font-bold text-xl">
						{title}
					</Link>
				) : (
					<p className="border-b border-aqua pb-2 font-bold text-xl">{title}</p>
				)}

				<div className="mt-3">
					<div className="mb-1" dangerouslySetInnerHTML={{ __html: desc }} />
					<p className="text-sm text-gray-100 before:content-['('] after:content-[')'] mb-auto capitalize">{subinfo.join(", ")}</p>

					<Btn className="bg-amber-300 text-white mt-3" fullWidth isPill>
						See detail
					</Btn>
				</div>
			</figcaption>
		</figure>
	);
};

export default CardInfo;
