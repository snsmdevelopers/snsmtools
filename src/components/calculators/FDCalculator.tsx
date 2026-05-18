"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { formatINR, formatLakh, formatPercent } from "@/lib/utils";
import { calculateFD } from "@/lib/calculators";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
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
      <Slider value={[value]} min={min} max={max} step={step} onValueChange={(v) => onChange(Array.isArray(v) ? v[0] : v)} />
      <div className="flex justify-between">
        <span className="text-xs text-gray-400">{minLabel}</span>
        <span className="text-xs text-gray-400">{maxLabel}</span>
      </div>
    </div>
  );
}

type Frequency = "quarterly" | "monthly" | "annually" | "half-yearly";
const freqMap: Record<Frequency, number> = { quarterly: 4, monthly: 12, annually: 1, "half-yearly": 2 };
const freqLabels: { key: Frequency; label: string }[] = [
  { key: "annually", label: "Yearly" },
  { key: "quarterly", label: "Quarterly" },
  { key: "half-yearly", label: "Half-Yearly" },
  { key: "monthly", label: "Monthly" },
];

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [tenure, setTenure] = useState(2);
  const [freq, setFreq] = useState<Frequency>("quarterly");
  const [showAll, setShowAll] = useState(false);

  const n = freqMap[freq];
  const result = calculateFD(principal, rate, tenure, n);
  const effectiveYield = tenure > 0 ? (Math.pow(result.maturity / principal, 1 / tenure) - 1) * 100 : 0;

  // Year-wise data
  const r = rate / 100;
  const yearWise = Array.from({ length: tenure }, (_, i) => {
    const t = i + 1;
    const opening = Math.round(principal * Math.pow(1 + r / n, n * (t - 1)));
    const closing = Math.round(principal * Math.pow(1 + r / n, n * t));
    return { year: t, openingBalance: opening, interestEarned: closing - opening, closingBalance: closing };
  });
  const tableRows = showAll ? yearWise : yearWise.slice(0, 5);

  const chartData = [
    { name: "Principal", value: principal },
    { name: "Interest", value: result.interest },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* ── Left: Inputs ─────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">FD Details</h2>
        <div className="space-y-8">
          <SliderRow
            label="Principal Amount"
            display={formatLakh(principal)}
            value={principal}
            min={1000}
            max={5000000}
            step={1000}
            minLabel="₹1,000"
            maxLabel="₹50L"
            onChange={setPrincipal}
          />
          <SliderRow
            label="Annual Interest Rate"
            display={formatPercent(rate)}
            value={rate}
            min={4}
            max={10}
            step={0.1}
            minLabel="4%"
            maxLabel="10%"
            onChange={setRate}
          />
          <SliderRow
            label="Tenure"
            display={`${tenure} ${tenure === 1 ? "Year" : "Years"}`}
            value={tenure}
            min={1}
            max={10}
            step={1}
            minLabel="1 Year"
            maxLabel="10 Years"
            onChange={setTenure}
          />

          {/* Compounding frequency */}
          <div>
            <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">Compounding Frequency</p>
            <div className="grid grid-cols-2 gap-2">
              {freqLabels.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFreq(key)}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                    freq === key
                      ? "border-teal-600 bg-teal-600 text-white"
                      : "border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-600 dark:border-gray-700 dark:text-gray-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Results ───────────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">FD Returns</h2>

        <div className="rounded-xl bg-teal-50 px-6 py-5 text-center dark:bg-teal-950/40">
          <p className="text-4xl font-bold text-teal-600">{formatINR(result.maturity)}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Maturity Amount</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Principal Amount</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{formatINR(principal)}</p>
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
            <p className="text-xs text-gray-500 dark:text-gray-400">Effective Annual Yield</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{formatPercent(effectiveYield)}</p>
          </div>
        </div>

        {/* Bar chart */}
        <div>
          <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">Principal vs Interest</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={chartData} barSize={48}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(v) => formatLakh(v)} tick={{ fontSize: 10 }} width={50} />
              <Tooltip formatter={(value) => typeof value === "number" ? [formatINR(value), ""] : ["—", ""]} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                <Cell fill="#0F6E56" />
                <Cell fill="#F97316" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Year-wise table */}
        <div>
          <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Year-wise Balance</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  {["Year", "Opening", "Interest", "Closing"].map((h) => (
                    <th key={h} className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 ${h === "Year" ? "text-left" : "text-right"}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.year} className="border-b border-gray-100 transition-colors last:border-0 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50">
                    <td className="px-3 py-2.5 text-gray-900 dark:text-white">Yr {row.year}</td>
                    <td className="px-3 py-2.5 text-right text-gray-600 dark:text-gray-300">{formatINR(row.openingBalance)}</td>
                    <td className="px-3 py-2.5 text-right text-orange-500">{formatINR(row.interestEarned)}</td>
                    <td className="px-3 py-2.5 text-right font-medium text-teal-600">{formatINR(row.closingBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {yearWise.length > 5 && (
            <button onClick={() => setShowAll((p) => !p)} className="mt-3 w-full rounded-lg border border-gray-200 py-2 text-sm font-medium text-teal-600 transition-colors hover:bg-teal-50 dark:border-gray-700 dark:hover:bg-teal-900/20">
              {showAll ? "Show Less" : `Show All ${tenure} Years ↓`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
