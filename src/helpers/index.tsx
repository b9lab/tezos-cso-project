import { TEZ_DISPLAY_MULTIPLIER } from "../constants";

export function format_tez(amount: number): string {
	return `${(amount/TEZ_DISPLAY_MULTIPLIER).toLocaleString()}`;
}