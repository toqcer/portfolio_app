import { IMenu } from "@/types/menu";

export const isHomeLink = (href: IMenu["href"]) => href === "#";
