import { PropsWithChildren } from "react";

const SectionFull = ({ id, children, className }: PropsWithChildren<{ id: HTMLElement["id"]; className?: HTMLElement["className"] }>) => {
	return (
		<section className={`${className} min-h-screen snap-start pt-[110px]`} id={id.replaceAll("#", "")}>
			{children}
		</section>
	);
};

export default SectionFull;
