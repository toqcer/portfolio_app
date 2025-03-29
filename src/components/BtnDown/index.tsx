"use client";

import Link, { LinkProps } from "next/link";
import { MingcuteArrowsDownFill } from "@/components/MingcuteArrowsDownFill";

const BtnDown = ({ label, href }: { label: string; href: string | LinkProps["href"] }) => {
	return (
		<Link href={href} className="btn btn-secondary">
			{label}
			<MingcuteArrowsDownFill />
		</Link>
	);
};

export default BtnDown;
