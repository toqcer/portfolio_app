import { isHomeLink } from "@/app/utils/menu";
import Link, { LinkProps } from "next/link";

const NavLink = ({ href, label, useHoverUnderline = false }: { useHoverUnderline?: boolean; href: LinkProps["href"]; label: string }) => {
	return (
		<Link
			href={href}
			className={`${isHomeLink(href) ? "font-kaushan-script capitalize text-secondary tracking-widest text-xl" : "text-lg"} relative ${
				useHoverUnderline
					? "hover:before:w-1/2 before:w-0 before:transition-all before:duration-200 before:bg-secondary before:absolute before:bottom-0 before:h-1 before:left-1/2 after:w-0 after:transition-all after:duration-200 after:bg-secondary after:absolute after:bottom-0 after:h-1 hover:after:w-1/2 after:right-1/2"
					: ""
			}`}
		>
			{label}
		</Link>
	);
};

export default NavLink;
