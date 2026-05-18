import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  TrendingUp,
  PiggyBank,
  Receipt,
  Percent,
  Home,
  Landmark,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import AdSlot from "@/components/layout/AdSlot";

// ── SEO Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "SNSM Tools — Free Finance Calculators for India",
  description:
    "Free EMI calculator, SIP calculator, FD calculator, income tax calculator, GST calculator and more. No login required. Instant results for Indian users.",
  keywords: [
    "emi calculator",
    "sip calculator",
    "fd calculator",
    "income tax calculator india",
    "gst calculator",
    "free finance tools india",
  ],
  alternates: { canonical: "https://snsmtools.in" },
  openGraph: {
    title: "SNSM Tools — Free Finance Calculators for India",
    description:
      "Free EMI, SIP, FD, income tax, GST, HRA and PPF calculators. No login required.",
    url: "https://snsmtools.in",
    siteName: "SNSM Tools",
    type: "website",
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const tools = [
  {
    name: "EMI Calculator",
    icon: Calculator,
    desc: "Home, car & personal loan EMI",
    href: "/calculators/emi-calculator",
  },
  {
    name: "SIP Calculator",
    icon: TrendingUp,
    desc: "Mutual fund SIP return estimator",
    href: "/calculators/sip-calculator",
  },
  {
    name: "FD Calculator",
    icon: PiggyBank,
    desc: "Fixed deposit maturity calculator",
    href: "/calculators/fd-calculator",
  },
  {
    name: "Income Tax Calculator",
    icon: Receipt,
    desc: "FY 2024-25 old & new regime",
    href: "/calculators/income-tax-calculator",
  },
  {
    name: "GST Calculator",
    icon: Percent,
    desc: "Add or remove GST instantly",
    href: "/calculators/gst-calculator",
  },
  {
    name: "HRA Calculator",
    icon: Home,
    desc: "House rent allowance exemption",
    href: "/calculators/hra-calculator",
  },
  {
    name: "PPF Calculator",
    icon: Landmark,
    desc: "Public provident fund returns",
    href: "/calculators/ppf-calculator",
  },
  {
    name: "Age Calculator",
    icon: Calendar,
    desc: "Exact age in years, months, days",
    href: "/calculators/age-calculator",
  },
] as const;

const features = [
  {
    icon: Zap,
    title: "Instant Results",
    desc: "No waiting, no loading screens. All calculations happen instantly as you type.",
  },
  {
    icon: ShieldCheck,
    title: "Always Accurate",
    desc: "Formulas verified against RBI guidelines. Updated for FY 2024-25 tax slabs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    desc: "Designed for India's mobile users. Works perfectly on any device or screen size.",
  },
] as const;

const searches = [
  { label: "EMI calculator for home loan", href: "/calculators/emi-calculator" },
  { label: "SIP calculator with returns", href: "/calculators/sip-calculator" },
  { label: "Income tax calculator 2024-25", href: "/calculators/income-tax-calculator" },
  { label: "FD calculator monthly interest", href: "/calculators/fd-calculator" },
  { label: "GST calculator 18 percent", href: "/calculators/gst-calculator" },
  { label: "HRA exemption calculator", href: "/calculators/hra-calculator" },
  { label: "PPF maturity calculator", href: "/calculators/ppf-calculator" },
  { label: "Age calculator by date of birth", href: "/calculators/age-calculator" },
  { label: "Car loan EMI calculator", href: "/calculators/emi-calculator" },
  { label: "SIP vs lump sum calculator", href: "/calculators/sip-calculator" },
] as const;

const trustBadges = [
  "No Signup Needed",
  "Works on Mobile",
  "Instant Results",
  "Always Free",
] as const;

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          {/* Badge pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 dark:border-teal-800 dark:bg-teal-950">
            <Sparkles className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
            <span className="text-sm text-teal-700 dark:text-teal-300">
              100% Free · No Login Required
            </span>
          </div>

          {/* H1 */}
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-teal-600">Free Finance Calculators</span>
            <br />
            <span className="text-gray-900 dark:text-white">for India</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400 md:text-xl">
            Calculate EMI, SIP returns, FD interest, income tax &amp; more —
            instantly accurate, always free.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/calculators/emi-calculator"
              className={buttonVariants({ size: "lg" })}
            >
              Try EMI Calculator
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/calculators"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              See All Tools
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {trustBadges.map((label) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
              >
                <CheckCircle2 className="h-[15px] w-[15px] text-teal-500" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Tools Grid ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Calculators
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              Popular Finance Calculators
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Everything you need to make smarter financial decisions
            </p>
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex cursor-pointer flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-teal-700"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-950">
                  <tool.icon className="h-[22px] w-[22px] text-teal-600" />
                </div>

                {/* Name */}
                <p className="text-base font-semibold text-gray-900 dark:text-white">
                  {tool.name}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {tool.desc}
                </p>

                {/* CTA */}
                <p className="mt-auto text-sm font-medium text-teal-600">
                  Calculate →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Ad Slot ───────────────────────────────────────────── */}
      <section className="bg-white py-6 dark:bg-gray-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block">
            <AdSlot size="leaderboard" />
          </div>
          <div className="block md:hidden">
            <AdSlot size="mobile-banner" />
          </div>
        </div>
      </section>

      {/* ── Section 4: Why SNSM Tools ────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why SNSM Tools?
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Built for Indians, by Indians
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-950">
                  <f.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Popular Searches (SEO) ───────────────────────────── */}
      <section className="bg-white py-12 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-base font-medium text-gray-400">
            Popular Searches
          </p>
          <div className="flex max-w-4xl flex-wrap justify-center gap-3 mx-auto">
            {searches.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-600 transition-colors duration-150 hover:border-teal-400 hover:text-teal-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-teal-600 dark:hover:text-teal-400"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: JSON-LD Schema ────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SNSM Tools",
            url: "https://snsmtools.in",
            description:
              "Free finance calculators for India — EMI, SIP, FD, income tax, GST, HRA, PPF and age calculator.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://snsmtools.in/calculators?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}
