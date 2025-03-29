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
}

export interface ICategorySkill {
	label: string;
	data: IDataSkill[];
}
