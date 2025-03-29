import { LinkProps } from "next/link";

export interface IMenu {
	label: string;
	href: string | LinkProps["href"];
}
