"use client";

import Link from "next/link";
import { MingcuteArrowsDownFill } from "@/components/MingcuteArrowsDownFill";
import { IBtnDown } from "./types";

const BtnDown = ({ label, href }: IBtnDown) => {
	return (
		<Link href={href} className="btn btn-secondary">
			{label}
			<MingcuteArrowsDownFill />
		</Link>
	);
};

export default BtnDown;
