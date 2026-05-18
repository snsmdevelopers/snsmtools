"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { formatINR, formatLakh, formatPercent } from "@/lib/utils";
import { calculateSIP } from "@/lib/calculators";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SliderRowProps {
  label: string;
  display: string;
  value: number;
  min: number;
  max: number;
  step: number;
  minLabel: string;
  maxLabel: string;
  onChange: (v: number) => void;
}

function SliderRow({ label, display, value, min, max, step, minLabel, maxLabel, onChange }: SliderRowProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        <span className="text-sm font-semibold text-teal-600">{display}</span>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onChange(Array.isArray(v) ? v[0] : v)}
      />
      <div className="flex justify-between">
        <span className="text-xs text-gray-400">{minLabel}</span>
        <span className="text-xs text-gray-400">{maxLabel}</span>
      </div>
    </div>
  );
}

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(10);
  const [showAll, setShowAll] = useState(false);

  const result = calculateSIP(monthly, returnRate, years);
  const wealthGained = result.invested > 0 ? (result.returns / result.invested) * 100 : 0;
  const tableRows = showAll ? result.yearWise : result.yearWise.slice(0, 5);

  const xInterval = years <= 10 ? 0 : years <= 20 ? 1 : 4;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* ── Left: Inputs ─────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Investment Details</h2>
        <div className="space-y-8">
          <SliderRow
            label="Monthly Investment"
            display={formatLakh(monthly)}
            value={monthly}
            min={500}
            max={100000}
            step={500}
            minLabel="₹500"
            maxLabel="₹1L"
            onChange={setMonthly}
          />
          <SliderRow
            label="Expected Annual Return"
            display={formatPercent(returnRate)}
            value={returnRate}
            min={8}
            max={30}
            step={0.5}
            minLabel="8%"
            maxLabel="30%"
            onChange={setReturnRate}
          />
          <SliderRow
            label="Investment Period"
            display={`${years} ${years === 1 ? "Year" : "Years"}`}
            value={years}
            min={1}
            max={40}
            step={1}
            minLabel="1 Year"
            maxLabel="40 Years"
            onChange={setYears}
          />
        </div>
      </div>

      {/* ── Right: Results ───────────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Returns Breakdown</h2>

        {/* Hero */}
        <div className="rounded-xl bg-teal-50 px-6 py-5 text-center dark:bg-teal-950/40">
          <p className="text-4xl font-bold text-teal-600">{formatINR(result.total)}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Total Maturity Value</p>
        </div>

        {/* Summary grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Total Invested</p>
            <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-blue-400">{formatINR(result.invested)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Estimated Returns</p>
            <p className="mt-1 text-sm font-semibold text-green-600 dark:text-green-400">{formatINR(result.returns)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Maturity Value</p>
            <p className="mt-1 text-sm font-semibold text-teal-600">{formatINR(result.total)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Wealth Gained</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{formatPercent(wealthGained)}</p>
          </div>
        </div>

        {/* Stacked bar chart */}
        <div>
          <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">Year-wise Growth</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={result.yearWise} barSize={years > 20 ? 6 : 12}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 10 }} interval={xInterval} />
              <YAxis tickFormatter={(v) => formatLakh(v)} tick={{ fontSize: 10 }} width={50} />
              <Tooltip
                formatter={(value) =>
                  typeof value === "number" ? [formatINR(value), ""] : ["—", ""]
                }
              />
              <Bar dataKey="invested" stackId="a" fill="#0F6E56" name="Invested" radius={[0, 0, 0, 0]} />
              <Bar dataKey="returns" stackId="a" fill="#F97316" name="Returns" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-2 flex justify-center gap-6">
            <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <span className="block h-2.5 w-2.5 rounded-sm bg-teal-600" />Invested
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <span className="block h-2.5 w-2.5 rounded-sm bg-orange-500" />Returns
            </span>
          </div>
        </div>

        {/* Year-wise table */}
        <div>
          <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Year-wise Investment Summary</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  {["Year", "Invested So Far", "Returns", "Total Value"].map((h) => (
                    <th key={h} className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 ${h === "Year" ? "text-left" : "text-right"}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.year} className="border-b border-gray-100 transition-colors last:border-0 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50">
                    <td className="px-3 py-2.5 text-gray-900 dark:text-white">Yr {row.year}</td>
                    <td className="px-3 py-2.5 text-right text-blue-600 dark:text-blue-400">{formatINR(row.invested)}</td>
                    <td className="px-3 py-2.5 text-right text-green-600 dark:text-green-400">{formatINR(row.returns)}</td>
                    <td className="px-3 py-2.5 text-right font-medium text-teal-600">{formatINR(row.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {result.yearWise.length > 5 && (
            <button
              onClick={() => setShowAll((p) => !p)}
              className="mt-3 w-full rounded-lg border border-gray-200 py-2 text-sm font-medium text-teal-600 transition-colors hover:bg-teal-50 dark:border-gray-700 dark:hover:bg-teal-900/20"
            >
              {showAll ? "Show Less" : `Show All ${years} Years ↓`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
