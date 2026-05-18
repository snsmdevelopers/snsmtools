"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { formatINR } from "@/lib/utils";
import { calculateGST } from "@/lib/calculators";

type GSTMode = "exclusive" | "inclusive";
const GST_RATES = [5, 12, 18, 28] as const;
type GSTRate = (typeof GST_RATES)[number];

export default function GSTCalculator() {
  const [mode, setMode] = useState<GSTMode>("exclusive");
  const [amount, setAmount] = useState(1000);
  const [gstRate, setGstRate] = useState<GSTRate>(18);

  const result = calculateGST(amount, gstRate, mode);

  const rows = [
    { label: "Original Amount", value: result.baseAmount, highlight: false },
    { label: `GST Amount (@${gstRate}%)`, value: result.gst, highlight: false },
    { label: `CGST (${gstRate / 2}%)`, value: result.cgst, highlight: false },
    { label: `SGST (${gstRate / 2}%)`, value: result.sgst, highlight: false },
    { label: "Total Amount", value: result.total, highlight: true },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* ── Left: Inputs ─────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">GST Details</h2>
        <div className="space-y-8">
          {/* Mode toggle */}
          <div>
            <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Calculation Mode</p>
            <div className="flex rounded-lg border border-gray-200 p-1 dark:border-gray-700">
              {([["exclusive", "Add GST"], ["inclusive", "Remove GST"]] as [GSTMode, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setMode(key)}
                  className={`flex-1 rounded-md py-2 text-sm font-semibold transition-colors ${
                    mode === key ? "bg-teal-600 text-white" : "text-gray-600 hover:text-teal-600 dark:text-gray-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-400">
              {mode === "exclusive" ? "Enter the amount before GST" : "Enter the GST-inclusive total price"}
            </p>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {mode === "exclusive" ? "Original Amount" : "GST-Inclusive Amount"}
              </label>
              <span className="text-sm font-semibold text-teal-600">{formatINR(amount)}</span>
            </div>
            <Slider
              value={[amount]}
              min={1}
              max={1000000}
              step={100}
              onValueChange={(v) => setAmount(Array.isArray(v) ? v[0] : v)}
            />
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">₹1</span>
              <span className="text-xs text-gray-400">₹10L</span>
            </div>
            <input
              type="number"
              value={amount}
              min={1}
              max={1000000}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (v >= 1 && v <= 1000000) setAmount(v);
              }}
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* GST rate buttons */}
          <div>
            <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">GST Rate</p>
            <div className="grid grid-cols-4 gap-3">
              {GST_RATES.map((r) => (
                <button
                  key={r}
                  onClick={() => setGstRate(r)}
                  className={`rounded-xl border py-3 text-center text-sm font-bold transition-all ${
                    gstRate === r
                      ? "border-teal-600 bg-teal-600 text-white shadow-sm"
                      : "border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-600 dark:border-gray-700 dark:text-gray-300"
                  }`}
                >
                  {r}%
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Results ───────────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">GST Breakdown</h2>

        {/* Hero */}
        <div className="rounded-xl bg-teal-50 px-6 py-5 text-center dark:bg-teal-950/40">
          <p className="text-4xl font-bold text-teal-600">{formatINR(result.gst)}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">GST Amount</p>
        </div>

        {/* Breakdown table */}
        <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
          <table className="w-full">
            <tbody>
              {rows.map(({ label, value, highlight }) => (
                <tr
                  key={label}
                  className={`border-b border-gray-100 last:border-0 dark:border-gray-800 ${
                    highlight ? "bg-teal-50 dark:bg-teal-950/30" : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  <td className={`px-4 py-3 text-sm ${highlight ? "font-semibold text-teal-700 dark:text-teal-300" : "text-gray-700 dark:text-gray-300"}`}>
                    {label}
                  </td>
                  <td className={`px-4 py-3 text-right text-sm ${highlight ? "font-bold text-teal-600" : "font-medium text-gray-900 dark:text-white"}`}>
                    {formatINR(value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* IGST info */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30">
          <p className="text-xs font-medium text-blue-700 dark:text-blue-300">Inter-state Transaction (IGST)</p>
          <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
            For inter-state transactions, IGST = CGST + SGST = <strong>{formatINR(result.gst)}</strong>
          </p>
        </div>

        {/* Quick reference */}
        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Quick Reference</p>
          <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
            <p>• 5% — Essential items, transport</p>
            <p>• 12% — Processed food, IT services</p>
            <p>• 18% — Most manufactured goods, restaurants</p>
            <p>• 28% — Luxury goods, automobiles, tobacco</p>
          </div>
        </div>
      </div>
    </div>
  );
}
