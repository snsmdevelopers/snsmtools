"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { formatINR, formatLakh } from "@/lib/utils";
import { calculatePPF } from "@/lib/calculators";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PPF_RATE = 7.1;
const PPF_TENURE = 15;

export default function PPFCalculator() {
  const [yearly, setYearly] = useState(50000);

  const result = calculatePPF(yearly, PPF_TENURE, PPF_RATE);
  const totalInvested = yearly * PPF_TENURE;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* ── Left: Inputs ─────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">PPF Details</h2>
        <div className="space-y-8">
          {/* Fixed params display */}
          <div className="flex gap-3">
            <div className="flex-1 rounded-xl border border-teal-200 bg-teal-50 p-4 text-center dark:border-teal-800 dark:bg-teal-950/30">
              <p className="text-xs text-gray-500 dark:text-gray-400">Interest Rate</p>
              <p className="mt-1 text-lg font-bold text-teal-600">{PPF_RATE}% p.a.</p>
              <p className="mt-0.5 text-xs text-gray-400">Govt. rate (FY 2024-25)</p>
            </div>
            <div className="flex-1 rounded-xl border border-teal-200 bg-teal-50 p-4 text-center dark:border-teal-800 dark:bg-teal-950/30">
              <p className="text-xs text-gray-500 dark:text-gray-400">Lock-in Period</p>
              <p className="mt-1 text-lg font-bold text-teal-600">{PPF_TENURE} Years</p>
              <p className="mt-0.5 text-xs text-gray-400">Extendable in 5-yr blocks</p>
            </div>
          </div>

          {/* Yearly investment slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Yearly Investment
              </label>
              <span className="text-sm font-semibold text-teal-600">{formatINR(yearly)}</span>
            </div>
            <Slider
              value={[yearly]}
              min={500}
              max={150000}
              step={500}
              onValueChange={(v) => setYearly(Array.isArray(v) ? v[0] : v)}
            />
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">₹500</span>
              <span className="text-xs text-gray-400">₹1,50,000</span>
            </div>
            <input
              type="number"
              value={yearly}
              min={500}
              max={150000}
              step={500}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (v >= 500 && v <= 150000) setYearly(v);
              }}
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* EEE note */}
          <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/30">
            <p className="text-xs font-semibold text-green-700 dark:text-green-300">EEE Tax Status</p>
            <p className="mt-1 text-sm text-green-600 dark:text-green-400">
              PPF enjoys Exempt-Exempt-Exempt status: contributions (80C), interest, and maturity are all tax-free.
            </p>
          </div>
        </div>
      </div>

      {/* ── Right: Results ───────────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">PPF Returns</h2>

        {/* Hero */}
        <div className="rounded-xl bg-teal-50 px-6 py-5 text-center dark:bg-teal-950/40">
          <p className="text-4xl font-bold text-teal-600">{formatINR(result.maturity)}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Maturity Amount (after {PPF_TENURE} years)</p>
        </div>

        {/* Summary grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Total Invested</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{formatINR(totalInvested)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Interest Earned</p>
            <p className="mt-1 text-sm font-semibold text-orange-500">{formatINR(result.interest)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Maturity Amount</p>
            <p className="mt-1 text-sm font-semibold text-teal-600">{formatINR(result.maturity)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Wealth Multiplier</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
              {totalInvested > 0 ? (result.maturity / totalInvested).toFixed(2) : "—"}×
            </p>
          </div>
        </div>

        {/* Bar chart — closing balance per year */}
        <div>
          <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">Year-wise Closing Balance</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={result.yearWise} barSize={16}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 10 }} />
              <YAxis tickFormatter={(v) => formatLakh(v)} tick={{ fontSize: 10 }} width={52} />
              <Tooltip
                formatter={(value) =>
                  typeof value === "number" ? [formatINR(value), ""] : ["—", ""]
                }
                labelFormatter={(label) => `Year ${label}`}
              />
              <Bar dataKey="closingBalance" fill="#0F6E56" radius={[4, 4, 0, 0]} name="Balance" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Full 15-year table */}
        <div>
          <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Year-wise PPF Statement</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  {["Year", "Opening", "Deposit", "Interest", "Closing"].map((h) => (
                    <th
                      key={h}
                      className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 ${h === "Year" ? "text-left" : "text-right"}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.yearWise.map((row) => (
                  <tr
                    key={row.year}
                    className="border-b border-gray-100 transition-colors last:border-0 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50"
                  >
                    <td className="px-3 py-2.5 text-gray-900 dark:text-white">Yr {row.year}</td>
                    <td className="px-3 py-2.5 text-right text-gray-600 dark:text-gray-300">{formatINR(row.openingBalance)}</td>
                    <td className="px-3 py-2.5 text-right text-gray-600 dark:text-gray-300">{formatINR(row.deposit)}</td>
                    <td className="px-3 py-2.5 text-right text-orange-500">{formatINR(row.interest)}</td>
                    <td className="px-3 py-2.5 text-right font-medium text-teal-600">{formatINR(row.closingBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
