"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { formatINR } from "@/lib/utils";
import { calculateHRA } from "@/lib/calculators";

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

export default function HRACalculator() {
  const [basic, setBasic] = useState(50000);
  const [hraReceived, setHraReceived] = useState(20000);
  const [rentPaid, setRentPaid] = useState(15000);
  const [isMetro, setIsMetro] = useState(true);

  const result = calculateHRA(basic, hraReceived, rentPaid, isMetro);
  const annualExempt = result.exemption * 12;
  const annualTaxSaving = annualExempt * 0.3;

  const methods = [
    { label: "Actual HRA Received", value: result.method1 },
    { label: `${isMetro ? "50%" : "40%"} of Basic Salary`, value: result.method2 },
    { label: "Rent Paid − 10% of Basic", value: result.method3 },
  ];
  const minValue = Math.min(...methods.map((m) => m.value));

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* ── Left: Inputs ─────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">HRA Details</h2>
        <div className="space-y-8">
          <SliderRow
            label="Basic Salary (Monthly)"
            display={formatINR(basic)}
            value={basic}
            min={10000}
            max={500000}
            step={1000}
            minLabel="₹10,000"
            maxLabel="₹5,00,000"
            onChange={setBasic}
          />
          <SliderRow
            label="HRA Received (Monthly)"
            display={formatINR(hraReceived)}
            value={hraReceived}
            min={5000}
            max={200000}
            step={500}
            minLabel="₹5,000"
            maxLabel="₹2,00,000"
            onChange={setHraReceived}
          />
          <SliderRow
            label="Actual Rent Paid (Monthly)"
            display={formatINR(rentPaid)}
            value={rentPaid}
            min={0}
            max={200000}
            step={500}
            minLabel="₹0"
            maxLabel="₹2,00,000"
            onChange={setRentPaid}
          />

          {/* City type */}
          <div>
            <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">City Type</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              {([true, false] as const).map((metro) => (
                <label
                  key={String(metro)}
                  className={`flex flex-1 cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${
                    isMetro === metro
                      ? "border-teal-600 bg-teal-50 dark:bg-teal-950/30"
                      : "border-gray-200 hover:border-teal-300 dark:border-gray-700"
                  }`}
                >
                  <input
                    type="radio"
                    checked={isMetro === metro}
                    onChange={() => setIsMetro(metro)}
                    className="h-4 w-4 accent-teal-600"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {metro ? "Metro City" : "Non-Metro City"}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {metro ? "50% of basic" : "40% of basic"}
                    </p>
                  </div>
                </label>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-400">
              Metro: Delhi, Mumbai, Kolkata, Chennai
            </p>
          </div>
        </div>
      </div>

      {/* ── Right: Results ───────────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">HRA Exemption</h2>

        {/* Hero */}
        <div className="rounded-xl bg-teal-50 px-6 py-5 text-center dark:bg-teal-950/40">
          <p className="text-4xl font-bold text-teal-600">{formatINR(result.exemption)}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Monthly HRA Exempt</p>
        </div>

        {/* Three-method comparison */}
        <div>
          <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Exemption = Minimum of these three
          </p>
          <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800">
            <table className="w-full">
              <tbody>
                {methods.map(({ label, value }) => (
                  <tr
                    key={label}
                    className={`border-b border-gray-100 last:border-0 dark:border-gray-800 ${
                      value === minValue ? "bg-teal-50 dark:bg-teal-950/30" : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    <td className={`px-4 py-3 text-sm ${value === minValue ? "font-semibold text-teal-700 dark:text-teal-300" : "text-gray-700 dark:text-gray-300"}`}>
                      {label}
                      {value === minValue && (
                        <span className="ml-2 inline-block rounded-full bg-teal-100 px-2 py-0.5 text-xs font-bold text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                          Minimum ✓
                        </span>
                      )}
                    </td>
                    <td className={`px-4 py-3 text-right text-sm ${value === minValue ? "font-bold text-teal-600" : "font-medium text-gray-900 dark:text-white"}`}>
                      {formatINR(value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Monthly HRA Exempt</p>
            <p className="mt-1 text-sm font-semibold text-teal-600">{formatINR(result.exemption)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Monthly HRA Taxable</p>
            <p className="mt-1 text-sm font-semibold text-orange-500">{formatINR(result.taxable)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Annual HRA Exempt</p>
            <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{formatINR(annualExempt)}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">Annual Tax Saving (30%)</p>
            <p className="mt-1 text-sm font-semibold text-green-600 dark:text-green-400">{formatINR(annualTaxSaving)}</p>
          </div>
        </div>

        {/* Threshold note */}
        {rentPaid <= basic * 0.1 && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
            <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">Note</p>
            <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
              Rent paid must exceed 10% of basic (
              <strong>{formatINR(Math.round(basic * 0.1))}/mo</strong>) to claim any HRA exemption.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
