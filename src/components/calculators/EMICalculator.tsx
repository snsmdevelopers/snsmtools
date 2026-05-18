"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { formatINR, formatLakh, formatPercent } from "@/lib/utils";
import { calculateEMI, type AmortizationRow } from "@/lib/calculators";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ── Types ─────────────────────────────────────────────────────────────────────

interface YearRow {
  year: number;
  principalPaid: number;
  interestPaid: number;
  totalPaid: number;
  balance: number;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function getYearWise(amortization: AmortizationRow[], years: number): YearRow[] {
  return Array.from({ length: years }, (_, i) => {
    const slice = amortization.slice(i * 12, (i + 1) * 12);
    return {
      year: i + 1,
      principalPaid: slice.reduce((s, m) => s + m.principal, 0),
      interestPaid: slice.reduce((s, m) => s + m.interest, 0),
      totalPaid: slice.reduce((s, m) => s + m.emi, 0),
      balance: slice[slice.length - 1]?.balance ?? 0,
    };
  });
}

// ── Sub-components ─────────────────────────────────────────────────────────────

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
  showInput?: boolean;
}

function SliderRow({
  label,
  display,
  value,
  min,
  max,
  step,
  minLabel,
  maxLabel,
  onChange,
  showInput = false,
}: SliderRowProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
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

      {showInput && (
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (v >= min && v <= max) onChange(v);
          }}
          className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 transition-colors focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-teal-500"
        />
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);
  const [showAll, setShowAll] = useState(false);

  // All calculations happen synchronously — no loading state needed
  const result = calculateEMI(loanAmount, interestRate, tenureYears * 12);
  const yearWise = getYearWise(result.amortization, tenureYears);
  const rows = showAll ? yearWise : yearWise.slice(0, 5);

  const principalPct = ((loanAmount / result.totalAmount) * 100).toFixed(1);
  const interestPct = ((result.totalInterest / result.totalAmount) * 100).toFixed(1);

  const pieData = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: result.totalInterest },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* ── Left column: Inputs ─────────────────────────────────────────── */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
          Loan Details
        </h2>

        <div className="space-y-8">
          <SliderRow
            label="Loan Amount"
            display={formatLakh(loanAmount)}
            value={loanAmount}
            min={100000}
            max={10000000}
            step={50000}
            minLabel="₹1L"
            maxLabel="₹1Cr"
            onChange={setLoanAmount}
            showInput
          />
          <SliderRow
            label="Annual Interest Rate"
            display={formatPercent(interestRate)}
            value={interestRate}
            min={5}
            max={20}
            step={0.1}
            minLabel="5%"
            maxLabel="20%"
            onChange={setInterestRate}
          />
          <SliderRow
            label="Loan Tenure"
            display={`${tenureYears} ${tenureYears === 1 ? "Year" : "Years"}`}
            value={tenureYears}
            min={1}
            max={30}
            step={1}
            minLabel="1 Year"
            maxLabel="30 Years"
            onChange={setTenureYears}
          />
        </div>
      </div>

      {/* ── Right column: Results ────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          EMI Breakdown
        </h2>

        {/* Monthly EMI hero */}
        <div className="rounded-xl bg-teal-50 px-6 py-5 text-center dark:bg-teal-950/40">
          <p className="text-4xl font-bold text-teal-600">{formatINR(result.emi)}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Monthly EMI</p>
        </div>

        {/* Summary grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Principal Amount</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
              {formatINR(loanAmount)}
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Total Interest</p>
            <p className="mt-1 text-sm font-semibold text-orange-500">
              {formatINR(result.totalInterest)}
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Total Payment</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
              {formatINR(result.totalAmount)}
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Interest Rate</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
              {formatPercent(interestRate)}
            </p>
          </div>
        </div>

        {/* Donut chart */}
        <div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius="55%"
                outerRadius="75%"
                strokeWidth={0}
                startAngle={90}
                endAngle={-270}
              >
                <Cell fill="#0F6E56" />
                <Cell fill="#F97316" />
              </Pie>
              <Tooltip
                formatter={(value) =>
                  typeof value === "number" ? [formatINR(value), ""] : ["—", ""]
                }
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="block h-3 w-3 rounded-full bg-teal-600" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Principal ({principalPct}%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block h-3 w-3 rounded-full bg-orange-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Interest ({interestPct}%)
              </span>
            </div>
          </div>
        </div>

        {/* Amortization table */}
        <div>
          <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
            Year-wise Payment Schedule
          </h3>

          <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  {["Year", "Principal", "Interest", "Total", "Balance"].map(
                    (h) => (
                      <th
                        key={h}
                        className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 ${
                          h === "Year" ? "text-left" : "text-right"
                        }`}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={row.year}
                    className={`border-b border-gray-100 transition-colors last:border-0 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50 ${
                      idx === rows.length - 1 && showAll ? "font-semibold" : ""
                    }`}
                  >
                    <td className="px-3 py-2.5 text-gray-900 dark:text-white">
                      Yr {row.year}
                    </td>
                    <td className="px-3 py-2.5 text-right text-gray-600 dark:text-gray-300">
                      {formatINR(row.principalPaid)}
                    </td>
                    <td className="px-3 py-2.5 text-right text-orange-500">
                      {formatINR(row.interestPaid)}
                    </td>
                    <td className="px-3 py-2.5 text-right text-gray-600 dark:text-gray-300">
                      {formatINR(row.totalPaid)}
                    </td>
                    <td className="px-3 py-2.5 text-right text-gray-600 dark:text-gray-300">
                      {formatINR(row.balance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {yearWise.length > 5 && (
            <button
              onClick={() => setShowAll((p) => !p)}
              className="mt-3 w-full rounded-lg border border-gray-200 py-2 text-sm font-medium text-teal-600 transition-colors hover:bg-teal-50 dark:border-gray-700 dark:hover:bg-teal-900/20"
            >
              {showAll ? "Show Less" : `Show All ${tenureYears} Years ↓`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
