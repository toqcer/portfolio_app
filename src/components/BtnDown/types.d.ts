import type { LinkProps } from "next/link";

export interface IBtnDown {
	label: string;
	href: string | LinkProps["href"];
}
