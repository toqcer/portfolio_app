import Link, { LinkProps } from "next/link";
import { MouseEventHandler, useState } from "react";

const BASE_CLASSNAME_LINK = "text-lg relative";

const CLASSNAME_USE_UNDERLINE =
	"hover:before:w-1/2 before:w-0 before:transition-all before:duration-200 before:bg-secondary before:absolute before:-bottom-2 before:h-1 before:left-1/2 after:w-0 after:transition-all after:duration-200 after:bg-secondary after:absolute after:-bottom-2 after:h-1 hover:after:w-1/2 after:right-1/2";

const NavLink = ({
	isHomeLink = false,
	href,
	label,
	useHoverUnderline = false,
	onClick,
	replace,
}: {
	useHoverUnderline?: boolean;
	href: LinkProps["href"];
	label: string;
	isHomeLink?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
	replace?: LinkProps["replace"];
}) => {
	const [isHover, setIsHover] = useState(false);

	return isHomeLink ? (
		<button
			className={`${BASE_CLASSNAME_LINK} focus:outline-none capitalize animate__animated ${
				isHover ? "animate__headShake" : ""
			} font-kaushan-script text-secondary tracking-widest text-xl group cursor-pointer`}
			onClick={onClick}
			onMouseEnter={() => {
				setIsHover(true);
			}}
			onMouseLeave={() => {
				setIsHover(false);
			}}
		>
			{label}
		</button>
	) : (
		<Link
			href={href}
			className={`${BASE_CLASSNAME_LINK} ${useHoverUnderline ? CLASSNAME_USE_UNDERLINE : ""}`}
			onClick={onClick}
			replace={replace}
		>
			{label}
		</Link>
	);
};

export default NavLink;
