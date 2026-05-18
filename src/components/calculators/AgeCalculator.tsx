"use client";

import { useState } from "react";
import { calculateAge } from "@/lib/calculators";

const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function defaultDOB(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 25);
  return d.toISOString().split("T")[0];
}

function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

function parseLocalDate(str: string): Date {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function funMessage(years: number): string {
  if (years < 1) return "You're brand new to the world!";
  if (years < 10) return "Childhood is magical — enjoy every moment!";
  if (years < 18) return "The teenage years: full of energy and discovery!";
  if (years < 25) return "Your 20s: the world is your oyster!";
  if (years < 30) return "Still in the prime of your twenties!";
  if (years < 40) return "Thriving in the roaring thirties!";
  if (years < 50) return "Forty is the new thirty — wisdom meets vitality!";
  if (years < 60) return "The fabulous fifties: experience is your superpower!";
  if (years < 70) return "Sixty and spectacular — life is richer than ever!";
  if (years < 80) return "A life full of stories, wisdom, and grace!";
  return "A century of living — truly remarkable!";
}

export default function AgeCalculator() {
  const [dob, setDob] = useState(defaultDOB());
  const [asOf, setAsOf] = useState(todayStr());

  const dobDate = parseLocalDate(dob);
  const asOfDate = parseLocalDate(asOf);

  const isValid = dobDate <= asOfDate;
  const result = isValid ? calculateAge(dobDate, asOfDate) : null;

  const totalWeeks = result ? Math.floor(result.totalDays / 7) : 0;
  const totalHours = result ? result.totalDays * 24 : 0;
  const birthDayOfWeek = DAYS_OF_WEEK[dobDate.getDay()];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* ── Left: Inputs ─────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Date Details</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Date of Birth
            </label>
            <input
              type="date"
              value={dob}
              max={todayStr()}
              onChange={(e) => e.target.value && setDob(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Age As Of
              </label>
              <button
                onClick={() => setAsOf(todayStr())}
                className="rounded-md border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 transition-colors hover:bg-teal-100 dark:border-teal-800 dark:bg-teal-950/40 dark:text-teal-300"
              >
                Use Today
              </button>
            </div>
            <input
              type="date"
              value={asOf}
              onChange={(e) => e.target.value && setAsOf(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {!isValid && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
              <p className="text-sm text-red-600 dark:text-red-400">
                The &quot;As Of&quot; date must be on or after the date of birth.
              </p>
            </div>
          )}

          {result && (
            <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Birth Day Info
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                You were born on a{" "}
                <strong className="text-teal-600">{birthDayOfWeek}</strong>.
              </p>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{funMessage(result.years)}</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Right: Results ───────────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Age</h2>

        {result ? (
          <>
            {/* Hero */}
            <div className="rounded-xl bg-teal-50 px-6 py-5 text-center dark:bg-teal-950/40">
              <p className="text-4xl font-bold text-teal-600">
                {result.years} <span className="text-2xl">Yrs</span>{" "}
                {result.months} <span className="text-2xl">Mo</span>{" "}
                {result.days} <span className="text-2xl">Days</span>
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Exact Age</p>
            </div>

            {/* Fun stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">Total Days</p>
                <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  {result.totalDays.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">Total Weeks</p>
                <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  {totalWeeks.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">Total Hours</p>
                <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  {totalHours.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400">Days to Birthday</p>
                <p className="mt-1 text-sm font-semibold text-teal-600">
                  {result.nextBirthday.daysLeft === 0 ? "Today! 🎂" : `${result.nextBirthday.daysLeft} days`}
                </p>
              </div>
            </div>

            {/* Next birthday */}
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">Next Birthday</p>
              <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
                {formatDate(result.nextBirthday.date)} —{" "}
                {result.nextBirthday.daysLeft === 0
                  ? "Today is your birthday!"
                  : `${result.nextBirthday.daysLeft} days from ${asOf === todayStr() ? "today" : "the selected date"}`}
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center rounded-xl bg-gray-50 p-12 dark:bg-gray-800">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Enter a valid date of birth to see your age.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
