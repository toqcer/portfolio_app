import { ICategorySkill, IPersonInfo, IResAPI } from "../types/data";
import { IMenu } from "../types/menu";

export async function getNavMenu() {
	"use server";

	const res = await fetch(`${process.env.URL_APP}/api/menu/bariq+dharmawan`);
	const data = await res.json();

	if (!res.ok) {
		throw new Error("Failed to fetch menu");
	}

	return (data as IResAPI<IMenu[]>).data;
}

export async function getPersonInfo() {
	"use server";

	const res = await fetch(`${process.env.URL_APP}/api/person-info`);
	const data = await res.json();

	if (!res.ok) {
		throw new Error("Failed to fetch person info");
	}

	return (data as IResAPI<IPersonInfo>).data;
}

export async function getTopSkills() {
	"use server";

	const res = await fetch(`${process.env.URL_APP}/api/top-skills`);
	const data = await res.json();

	if (!res.ok) {
		throw new Error("Failed to fetch skills");
	}

	return (data as IResAPI<ICategorySkill[]>).data;
}
