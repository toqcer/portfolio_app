import { IGlobalState } from "@/types/hook";
import { create } from "zustand";

const useGlobalState = create<IGlobalState>()(set => ({
	isNavShouldDarkOnScrolled: false,
	setIsNavShouldDarkOnScrolled: value =>
		set(() => ({
			isNavShouldDarkOnScrolled: value,
		})),
}));

export default useGlobalState;
