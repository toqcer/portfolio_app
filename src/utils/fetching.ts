import { ICategorySkill, IPersonInfo, IProject, IResAPI, ITimelinePersonal } from "@/types/data";
import { IMenu } from "@/types/menu";

async function fetchFromApi<T>(endpoint: string, errorMessage: string): Promise<T> {
	"use server";

	const res = await fetch(`${process.env.URL_APP}/${endpoint}`);
	const data = await res.json();

	if (!res.ok) {
		throw new Error(errorMessage);
	}

	return (data as IResAPI<T>).data;
}

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

export async function getProjects() {
	"use server";

	const res = await fetch(`${process.env.URL_APP}/api/projects`);
	const data = await res.json();

	if (!res.ok) {
		throw new Error("Failed to fetch projects");
	}

	return (data as IResAPI<IProject[]>).data;
}

export async function getTimeline() {
	return fetchFromApi<ITimelinePersonal[]>("api/personal-timeline", "Failed to fetch timeline");
}
