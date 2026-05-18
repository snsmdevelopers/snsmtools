import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a number in Indian number system: ₹25,00,000 */
export function formatINR(amount: number): string {
  if (isNaN(amount) || !isFinite(amount)) return "₹0";
  const rounded = Math.round(amount);
  const str = Math.abs(rounded).toString();
  const sign = rounded < 0 ? "-" : "";

  if (str.length <= 3) return `${sign}₹${str}`;

  // Last 3 digits, then groups of 2
  const last3 = str.slice(-3);
  const rest = str.slice(0, -3);
  const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `${sign}₹${formatted},${last3}`;
}

/** Compact display: ₹25L, ₹1.2Cr, ₹500 */
export function formatLakh(amount: number): string {
  if (isNaN(amount) || !isFinite(amount)) return "₹0";
  const abs = Math.abs(amount);
  const sign = amount < 0 ? "-" : "";

  if (abs >= 1_00_00_000) {
    const cr = abs / 1_00_00_000;
    return `${sign}₹${cr % 1 === 0 ? cr : cr.toFixed(2)}Cr`;
  }
  if (abs >= 1_00_000) {
    const l = abs / 1_00_000;
    return `${sign}₹${l % 1 === 0 ? l : parseFloat(l.toFixed(1))}L`;
  }
  return `${sign}₹${Math.round(abs).toLocaleString("en-IN")}`;
}

/** Formats a decimal as percentage: 0.085 → "8.5%" */
export function formatPercent(value: number, decimals = 2): string {
  if (isNaN(value) || !isFinite(value)) return "0%";
  return `${parseFloat(value.toFixed(decimals))}%`;
}
