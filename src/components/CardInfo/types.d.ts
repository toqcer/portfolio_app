import { IProject } from "@/types/data";

export interface ICardInfo {
	title: IProject["title"];
	href?: string | URL;
	subinfo: string[];
	desc: IProject["description"];
	cover: IProject["cover"];
}
