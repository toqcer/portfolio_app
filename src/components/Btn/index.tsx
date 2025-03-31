import Link, { LinkProps } from "next/link";
import { MouseEventHandler, PropsWithChildren } from "react";

const Btn = ({
	className,
	href,
	fullWidth = false,
	isPill = false,
	onClick,
	children,
}: PropsWithChildren<{
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	fullWidth?: boolean;
	isPill?: boolean;
	href?: LinkProps["href"];
	className: HTMLElement["className"];
}>) => {
	if (href) {
		return (
			<Link className={`${className} py-1 px-3  ${fullWidth ? "w-full" : ""}`} href={href}>
				{children}
			</Link>
		);
	}
	return (
		<button
			className={`${className} focus:outline-none cursor-pointer active:translate-y-0.5 active:shadow-btn-focus py-1 px-3 ${
				isPill ? "rounded-full" : ""
			} shadow-btn ${fullWidth ? "w-full" : ""}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Btn;
