import { TEZ_DISPLAY_MULTIPLIER } from "../constants";

export function format_tez(amount: number): string {
	return `${(amount/TEZ_DISPLAY_MULTIPLIER).toLocaleString()}`;
}

export function format_date(date: string): string {
	return new Date(date).toLocaleDateString('en-gb', { day: "2-digit", month: "short", year: "2-digit" });
}