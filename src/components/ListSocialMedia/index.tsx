"use client";

import { IProfileSocial } from "@/types/data";
import Link from "next/link";
import { HTMLAttributes } from "react";

const ListSocialMedia = ({
	datas,
	className = "",
}: {
	className?: HTMLAttributes<HTMLUListElement>["className"];
	datas: IProfileSocial[];
}) => {
	return (
		<ul className={`${className} grid grid-cols-2 gap-x-5 gap-y-8`}>
			{datas.map(social => (
				<li
					key={social.title}
					className={`border-white border rounded-lg hover:bg-373737 transition-all ${social.isHalfWidth ? "col-span-1" : "col-span-2"}`}
				>
					<Link href={social.href} className="flex items-center justify-center gap-2 p-3">
						<span
							className="text-2xl"
							style={{
								color: social.iconColor,
							}}
						>
							{social.iconName}
						</span>
						<span className="text-secondary text-lg tracking-wider">{social.title}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default ListSocialMedia;
