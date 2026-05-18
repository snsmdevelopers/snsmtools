"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { formatINR, formatLakh, formatPercent } from "@/lib/utils";

// ── Tax calculation logic (inline for full control) ────────────────────────

type AgeGroup = "below60" | "60to80" | "above80";
type Regime = "new" | "old";

interface SlabRow { slab: string; rate: number; taxableAmount: number; tax: number }
interface TaxResult { tax: number; cess: number; total: number; effectiveRate: number; slabs: SlabRow[] }

function computeTax(taxable: number, gross: number, slabDef: { limit: number; rate: number; label: string }[]): TaxResult {
  let tax = 0;
  let prev = 0;
  const slabs: SlabRow[] = [];
  for (const s of slabDef) {
    if (taxable <= prev) break;
    const upper = Math.min(taxable, s.limit);
    const amt = upper - prev;
    const t = (amt * s.rate) / 100;
    if (amt > 0) slabs.push({ slab: s.label, rate: s.rate, taxableAmount: Math.round(amt), tax: Math.round(t) });
    tax += t;
    prev = s.limit;
  }
  const cess = tax * 0.04;
  return {
    tax: Math.round(tax),
    cess: Math.round(cess),
    total: Math.round(tax + cess),
    effectiveRate: gross > 0 ? parseFloat(((tax + cess) / gross * 100).toFixed(2)) : 0,
    slabs,
  };
}

function calcNew(gross: number, _age: AgeGroup): TaxResult {
  const taxable = Math.max(0, gross - 75000);
  const defs = [
    { limit: 300000, rate: 0, label: "Up to ₹3L" },
    { limit: 700000, rate: 5, label: "₹3L – ₹7L" },
    { limit: 1000000, rate: 10, label: "₹7L – ₹10L" },
    { limit: 1200000, rate: 15, label: "₹10L – ₹12L" },
    { limit: 1500000, rate: 20, label: "₹12L – ₹15L" },
    { limit: Infinity, rate: 30, label: "Above ₹15L" },
  ];
  const res = computeTax(taxable, gross, defs);
  // 87A rebate: zero tax if taxable ≤ 7L
  if (taxable <= 700000) {
    return { ...res, tax: 0, cess: 0, total: 0, effectiveRate: 0, slabs: res.slabs };
  }
  return res;
}

function calcOld(taxable: number, gross: number, age: AgeGroup): TaxResult {
  const defs =
    age === "above80"
      ? [
          { limit: 500000, rate: 0, label: "Up to ₹5L" },
          { limit: 1000000, rate: 20, label: "₹5L – ₹10L" },
          { limit: Infinity, rate: 30, label: "Above ₹10L" },
        ]
      : age === "60to80"
      ? [
          { limit: 300000, rate: 0, label: "Up to ₹3L" },
          { limit: 500000, rate: 5, label: "₹3L – ₹5L" },
          { limit: 1000000, rate: 20, label: "₹5L – ₹10L" },
          { limit: Infinity, rate: 30, label: "Above ₹10L" },
        ]
      : [
          { limit: 250000, rate: 0, label: "Up to ₹2.5L" },
          { limit: 500000, rate: 5, label: "₹2.5L – ₹5L" },
          { limit: 1000000, rate: 20, label: "₹5L – ₹10L" },
          { limit: Infinity, rate: 30, label: "Above ₹10L" },
        ];
  const res = computeTax(taxable, gross, defs);
  // 87A rebate: zero tax if taxable ≤ 5L
  if (taxable <= 500000) return { ...res, tax: 0, cess: 0, total: 0, effectiveRate: 0, slabs: res.slabs };
  return res;
}

// ── SliderRow ──────────────────────────────────────────────────────────────

interface SliderRowProps {
  label: string; display: string; value: number; min: number; max: number; step: number;
  minLabel: string; maxLabel: string; onChange: (v: number) => void;
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

// ── Main ──────────────────────────────────────────────────────────────────

export default function IncomeTaxCalculator() {
  const [gross, setGross] = useState(800000);
  const [age, setAge] = useState<AgeGroup>("below60");
  const [regime, setRegime] = useState<Regime>("new");
  const [c80C, setC80C] = useState(150000);
  const [c80D, setC80D] = useState(0);
  const [hraEx, setHraEx] = useState(0);
  const [showDed, setShowDed] = useState(false);

  const stdDed = regime === "new" ? 75000 : 50000;
  const oldTaxable = Math.max(0, gross - 50000 - c80C - c80D - hraEx);
  const oldTotal = 50000 + Math.min(c80C, 150000) + Math.min(c80D, 50000) + hraEx;

  const newResult = calcNew(gross, age);
  const oldResult = calcOld(oldTaxable, gross, age);

  const current = regime === "new" ? newResult : oldResult;
  const taxable = regime === "new" ? Math.max(0, gross - 75000) : oldTaxable;
  const totalDed = regime === "new" ? 75000 : oldTotal;
  const takeHome = gross - current.total;
  const newBetter = newResult.total <= oldResult.total;

  const ageButtons: { key: AgeGroup; label: string }[] = [
    { key: "below60", label: "Below 60" },
    { key: "60to80", label: "60 – 80 (Senior)" },
    { key: "above80", label: "Above 80 (Super Senior)" },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* ── Left ─────────────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Income Details</h2>
        <div className="space-y-6">
          <SliderRow
            label="Annual Gross Income"
            display={formatLakh(gross)}
            value={gross}
            min={100000}
            max={10000000}
            step={10000}
            minLabel="₹1L"
            maxLabel="₹1Cr"
            onChange={setGross}
          />

          {/* Age group */}
          <div>
            <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Age Group</p>
            <div className="flex flex-col gap-2">
              {ageButtons.map(({ key, label }) => (
                <label key={key} className="flex cursor-pointer items-center gap-3">
                  <input type="radio" name="age" value={key} checked={age === key} onChange={() => setAge(key)} className="accent-teal-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Regime toggle */}
          <div>
            <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Tax Regime</p>
            <div className="flex rounded-lg border border-gray-200 p-1 dark:border-gray-700">
              {(["new", "old"] as Regime[]).map((r) => (
                <button
                  key={r}
                  onClick={() => setRegime(r)}
                  className={`flex-1 rounded-md py-1.5 text-sm font-medium transition-colors ${
                    regime === r ? "bg-teal-600 text-white" : "text-gray-600 hover:text-teal-600 dark:text-gray-300"
                  }`}
                >
                  {r === "new" ? "New Regime" : "Old Regime"}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-400">
              Standard deduction: <span className="font-medium text-gray-600 dark:text-gray-300">₹{stdDed.toLocaleString("en-IN")} auto-applied</span>
            </p>
          </div>

          {/* Old regime deductions */}
          {regime === "old" && (
            <div>
              <button onClick={() => setShowDed((p) => !p)} className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                <span>Deductions (80C, 80D, HRA)</span>
                <span className="text-teal-600">{showDed ? "▲" : "▼"}</span>
              </button>
              {showDed && (
                <div className="mt-4 space-y-6">
                  <SliderRow label="Section 80C" display={formatINR(c80C)} value={c80C} min={0} max={150000} step={5000} minLabel="₹0" maxLabel="₹1.5L" onChange={setC80C} />
                  <SliderRow label="Section 80D" display={formatINR(c80D)} value={c80D} min={0} max={50000} step={1000} minLabel="₹0" maxLabel="₹50K" onChange={setC80D} />
                  <SliderRow label="HRA Exemption" display={formatINR(hraEx)} value={hraEx} min={0} max={300000} step={5000} minLabel="₹0" maxLabel="₹3L" onChange={setHraEx} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Right ────────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Tax Summary</h2>

        {/* Hero */}
        <div className={`rounded-xl px-6 py-5 text-center ${current.total === 0 ? "bg-green-50 dark:bg-green-950/40" : "bg-red-50 dark:bg-red-950/30"}`}>
          <p className={`text-4xl font-bold ${current.total === 0 ? "text-green-600" : "text-red-500"}`}>{formatINR(current.total)}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {current.total === 0 ? "No tax (87A rebate applies)" : "Total Tax Payable (incl. 4% cess)"}
          </p>
        </div>

        {/* Summary grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Gross Income</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{formatINR(gross)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Total Deductions</p>
            <p className="mt-1 text-sm font-semibold text-orange-500">{formatINR(totalDed)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Taxable Income</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{formatINR(taxable)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Effective Tax Rate</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{formatPercent(current.effectiveRate)}</p>
          </div>
        </div>

        {/* Slab breakdown */}
        {current.slabs.length > 0 && (
          <div>
            <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Slab-wise Breakdown</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Slab</th>
                    <th className="px-3 py-2.5 text-right text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Rate</th>
                    <th className="px-3 py-2.5 text-right text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Tax</th>
                  </tr>
                </thead>
                <tbody>
                  {current.slabs.map((s) => (
                    <tr key={s.slab} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50">
                      <td className="px-3 py-2.5 text-gray-700 dark:text-gray-300">{s.slab}</td>
                      <td className="px-3 py-2.5 text-right text-gray-600 dark:text-gray-400">{s.rate}%</td>
                      <td className="px-3 py-2.5 text-right font-medium text-gray-900 dark:text-white">{formatINR(s.tax)}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-3 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300" colSpan={2}>4% Health & Education Cess</td>
                    <td className="px-3 py-2.5 text-right text-sm font-semibold text-gray-900 dark:text-white">{formatINR(current.cess)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Regime comparison */}
        <div>
          <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Regime Comparison</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "New Regime", total: newResult.total, better: newBetter },
              { label: "Old Regime", total: oldResult.total, better: !newBetter },
            ].map(({ label, total, better }) => (
              <div key={label} className={`relative rounded-xl border p-4 ${better ? "border-green-400 bg-green-50 dark:border-green-700 dark:bg-green-950/30" : "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"}`}>
                {better && <span className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-semibold text-white">Better ✓</span>}
                <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                <p className={`mt-1 text-lg font-bold ${better ? "text-green-600" : "text-gray-900 dark:text-white"}`}>{formatINR(total)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Take home */}
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-4 dark:border-teal-800 dark:bg-teal-950/40">
          <p className="text-xs text-teal-700 dark:text-teal-300">Annual Take-home Salary</p>
          <p className="mt-1 text-xl font-bold text-teal-600">{formatINR(takeHome)}</p>
          <p className="mt-0.5 text-xs text-teal-600/70 dark:text-teal-400/70">{formatLakh(takeHome / 12)} / month</p>
        </div>
      </div>
    </div>
  );
}
