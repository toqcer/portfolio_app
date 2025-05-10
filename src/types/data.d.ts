import { ReactNode } from "react";

export interface IResAPI<T> {
	status: number;
	data: T;
}

export interface IPersonInfo {
	full_name: string;
	nickname: string;
	slogan: string;
}

export interface IDataSkill {
	name: string;
	image: string;
	year_of_experience: number;
	link?: string;
}

export interface ICategorySkill {
	label: string;
	data: IDataSkill[];
}

export interface IQuickPoint {
	id: string;
	label: string;
}

export interface IProject {
	cover: string;
	title: string;
	link?: string | URL;
	description: TrustedHTML | string;
	quick_point: IQuickPoint[];
}

export interface ITimelinePersonal {
	logo: string;
	title: string;
	description: string;
	time: string;
}

export interface IProfileSocial {
	title: string;
	href: string;
	iconName: ReactNode;
	iconColor: `#${string}`;
	isHalfWidth?: boolean;
}
