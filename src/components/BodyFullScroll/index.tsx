"use client";

import useGlobalState from "@/hooks/useGlobalState";
import { PropsWithChildren } from "react";

const BodyFulLScroll = ({ children, className = "" }: PropsWithChildren<{ className?: HTMLDivElement["className"] }>) => {
	const { setIsNavShouldDarkOnScrolled } = useGlobalState(state => state);

	return (
		<div
			className={`snap-y snap-mandatory overflow-scroll scrollbar-hide-color h-screen scroll-smooth ${className}`}
			onScroll={e => {
				setIsNavShouldDarkOnScrolled((e.target as Element).scrollTop > 50);
			}}
		>
			{children}
		</div>
	);
};

export default BodyFulLScroll;
