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
} from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";

export const metadata: Metadata = {
  title: "All Finance Calculators — EMI, SIP, FD, Tax & More | SNSM Tools",
  description:
    "Free online finance calculators for India. EMI calculator, SIP calculator, FD calculator, income tax, GST, HRA, PPF and age calculator. No login required.",
  alternates: { canonical: "https://snsmtools.in/calculators" },
};

const tools = [
  {
    name: "EMI Calculator",
    icon: Calculator,
    desc: "Calculate monthly EMI for home loan, car loan, and personal loan. View complete amortization schedule.",
    href: "/calculators/emi-calculator",
    badge: "Most Popular",
  },
  {
    name: "SIP Calculator",
    icon: TrendingUp,
    desc: "Estimate mutual fund SIP returns with year-wise growth chart and investment breakdown.",
    href: "/calculators/sip-calculator",
    badge: null,
  },
  {
    name: "FD Calculator",
    icon: PiggyBank,
    desc: "Compute fixed deposit maturity amount with quarterly, monthly, or annual compounding.",
    href: "/calculators/fd-calculator",
    badge: null,
  },
  {
    name: "Income Tax Calculator",
    icon: Receipt,
    desc: "Compare old vs new tax regime for FY 2024-25. Get slab-wise breakdown and take-home salary.",
    href: "/calculators/income-tax-calculator",
    badge: "FY 2024-25",
  },
  {
    name: "GST Calculator",
    icon: Percent,
    desc: "Add or remove GST from any price. Get CGST, SGST, and IGST breakdown for all GST slabs.",
    href: "/calculators/gst-calculator",
    badge: null,
  },
  {
    name: "HRA Calculator",
    icon: Home,
    desc: "Calculate HRA exemption under Section 10(13A) for metro and non-metro cities.",
    href: "/calculators/hra-calculator",
    badge: null,
  },
  {
    name: "PPF Calculator",
    icon: Landmark,
    desc: "Compute PPF maturity at 7.1% for 15 years with full year-wise statement. EEE tax benefit.",
    href: "/calculators/ppf-calculator",
    badge: null,
  },
  {
    name: "Age Calculator",
    icon: Calendar,
    desc: "Find your exact age in years, months, and days. See total days lived and next birthday.",
    href: "/calculators/age-calculator",
    badge: null,
  },
] as const;

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Finance Calculators for India",
  url: "https://snsmtools.in/calculators",
  description:
    "A collection of free online finance calculators for Indian users including EMI, SIP, FD, income tax, GST, HRA, PPF and age calculators.",
  hasPart: tools.map((t) => ({
    "@type": "WebApplication",
    name: t.name,
    url: `https://snsmtools.in${t.href}`,
    applicationCategory: "FinanceApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  })),
};

export default function CalculatorsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Free Finance Calculators for India
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            A complete set of financial tools built for Indian users — from loan EMI and mutual fund
            SIP returns to income tax comparison and GST computation. All calculators are free, instant,
            and require no login. Updated for FY 2024-25 tax rules and RBI guidelines.
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map(({ name, icon: Icon, desc, href, badge }) => (
            <Link
              key={href}
              href={href}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-teal-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-teal-600"
            >
              {badge && (
                <span className="absolute right-4 top-4 rounded-full bg-teal-50 px-2 py-0.5 text-xs font-semibold text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                  {badge}
                </span>
              )}
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white dark:bg-teal-950/60">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mb-1.5 font-semibold text-gray-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                {name}
              </h2>
              <p className="flex-1 text-sm text-gray-500 dark:text-gray-400">{desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-teal-600 dark:text-teal-400">
                Open Calculator <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Ad slot */}
        <div className="mt-12 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        {/* About section */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            About These Calculators
          </h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                SNSM Tools offers a comprehensive suite of financial calculators tailored for Indian users.
                Our <strong className="text-gray-900 dark:text-white">EMI Calculator</strong> uses the
                standard reducing-balance formula approved by RBI to compute monthly loan instalments for
                home loans, car loans, and personal loans, along with a complete amortisation schedule.
              </p>
              <p>
                The <strong className="text-gray-900 dark:text-white">SIP Calculator</strong> projects
                mutual fund returns using the standard future value formula for recurring investments,
                showing year-wise growth with a stacked chart. The{" "}
                <strong className="text-gray-900 dark:text-white">FD Calculator</strong> supports all
                compounding frequencies — monthly, quarterly, half-yearly, and annually — to match real
                bank FD products.
              </p>
              <p>
                Our <strong className="text-gray-900 dark:text-white">Income Tax Calculator</strong> covers
                FY 2024-25 with the new regime&apos;s revised slabs (including the ₹75,000 standard deduction)
                and the old regime with common deductions (80C, 80D, HRA), automatically comparing both to
                show which saves more tax. The{" "}
                <strong className="text-gray-900 dark:text-white">GST Calculator</strong> handles both
                exclusive (adding GST) and inclusive (extracting GST) calculations across all four GST
                slabs: 5%, 12%, 18%, and 28%.
              </p>
              <p>
                The <strong className="text-gray-900 dark:text-white">HRA Calculator</strong> applies the
                three-condition minimum rule under Section 10(13A), distinguishing between metro (50%) and
                non-metro (40%) cities. The{" "}
                <strong className="text-gray-900 dark:text-white">PPF Calculator</strong> uses the current
                government rate of 7.1% with annual compounding over the 15-year lock-in. Finally, our{" "}
                <strong className="text-gray-900 dark:text-white">Age Calculator</strong> computes exact
                age accounting for leap years and varying month lengths, with bonus stats like total days,
                weeks, hours lived, and next birthday countdown.
              </p>
              <p>
                All calculators are free, require no login or registration, and run entirely in your
                browser — no data is sent to our servers. Calculations happen instantly as you adjust
                inputs, and every tool is fully optimised for mobile devices.
              </p>
            </div>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
    </>
  );
}
