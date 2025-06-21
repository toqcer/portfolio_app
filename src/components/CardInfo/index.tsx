import Image from "next/image";
import Link from "next/link";
import { ICardInfo } from "./types";
import { PropsWithChildren } from "react";

const CardInfo = ({ title, desc, href, subinfo, cover, className = "", children }: PropsWithChildren<ICardInfo>) => {
	return (
		<figure className={`${className} rounded-t-xl rounded-b-2xl overflow-hidden`}>
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
					{children}
				</div>
			</figcaption>
		</figure>
	);
};

export default CardInfo;
