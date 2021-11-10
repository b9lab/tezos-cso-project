import { TEZ_DISPLAY_MULTIPLIER } from "../constants";

/**
 * Formats an amount of tez to display
 */
export function format_tez(amount: number): string {
	return `${(amount/TEZ_DISPLAY_MULTIPLIER).toLocaleString()}`;
}

/**
 * Formats a date to DD MMM YY
 */
export function format_date(date: string): string {
	if (!date) return "";
	return new Date(date).toLocaleDateString('en-gb', { day: "2-digit", month: "short", year: "2-digit" });
}

/**
 * Formats a percentage
 */
export function format_percentage(percentage: number): string {
	if (!percentage) return "0%";
	return `${Math.trunc(percentage/100)}.${percentage%100} %`
}