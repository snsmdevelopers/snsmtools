import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";
import EMICalculator from "@/components/calculators/EMICalculator";

// ── SEO ───────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "EMI Calculator — Calculate Home, Car & Personal Loan EMI | SNSM Tools",
  description:
    "Free EMI calculator for home loan, car loan and personal loan. Calculate monthly EMI, total interest and payment schedule instantly. No login required.",
  alternates: { canonical: "https://snsmtools.in/calculators/emi-calculator" },
};

// ── FAQ data (static) ─────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What is EMI?",
    a: "EMI stands for Equated Monthly Instalment. It is a fixed payment amount made by a borrower to a lender on a specified date each month. EMIs are used to pay off both interest and principal every month so that over a specified number of years, the loan is fully paid off.",
  },
  {
    q: "How is EMI calculated?",
    a: "EMI is calculated using the formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P is the principal loan amount, r is the monthly interest rate (annual rate divided by 12 divided by 100), and n is the loan tenure in months.",
  },
  {
    q: "What is a good EMI to salary ratio?",
    a: "Financial experts recommend that your total EMI outflow should not exceed 40% of your monthly take-home salary. For example, if your monthly salary is ₹50,000, your total EMIs across all loans should ideally not exceed ₹20,000 per month.",
  },
  {
    q: "How can I reduce my EMI?",
    a: "You can reduce your EMI in three ways: (1) Make a larger down payment to reduce the principal amount, (2) negotiate a lower interest rate with your lender or opt for a lender offering lower rates, or (3) increase the loan tenure — though this increases total interest paid.",
  },
] as const;

// ── JSON-LD schemas ───────────────────────────────────────────────────────────

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "EMI Calculator",
    url: "https://snsmtools.in/calculators/emi-calculator",
    description:
      "Free online EMI calculator for home loan, car loan and personal loan in India",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EMICalculatorPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ── Breadcrumb ──────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
        >
          <Link href="/" className="transition-colors hover:text-teal-600">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            href="/calculators"
            className="transition-colors hover:text-teal-600"
          >
            Calculators
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gray-900 dark:text-white">EMI Calculator</span>
        </nav>

        {/* ── Page header ─────────────────────────────────────────────── */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            EMI Calculator
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            An EMI (Equated Monthly Instalment) calculator helps you plan your
            loan repayment by calculating the fixed monthly amount you need to
            pay your lender. Whether you are planning a home loan, car loan, or
            personal loan, knowing your EMI in advance helps you budget
            effectively. Our free EMI calculator uses the standard formula
            approved by Indian banks and RBI guidelines. Simply enter your loan
            amount, interest rate, and tenure to instantly see your monthly EMI,
            total interest payable, and complete amortization schedule. Use this
            tool to compare different loan offers and choose the most affordable
            option for your financial situation.
          </p>
        </div>

        {/* ── Ad slot — above calculator ──────────────────────────────── */}
        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block">
            <AdSlot size="leaderboard" />
          </div>
          <div className="block md:hidden">
            <AdSlot size="mobile-banner" />
          </div>
        </div>

        {/* ── EMI Calculator (client component) ───────────────────────── */}
        <EMICalculator />

        {/* ── Ad slot — below results ──────────────────────────────────── */}
        <div className="mt-10 flex justify-center">
          <AdSlot size="rectangle" />
        </div>

        {/* ── FAQ section ─────────────────────────────────────────────── */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {faqs.map((faq) => (
              <details key={faq.q} className="group px-6 py-0">
                <summary className="flex cursor-pointer list-none items-center justify-between py-5">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {faq.q}
                  </span>
                  {/* Chevron rotates when open via group-open Tailwind variant */}
                  <ChevronRight className="h-4 w-4 shrink-0 rotate-90 text-gray-400 transition-transform duration-200 group-open:-rotate-90" />
                </summary>
                <div className="pb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* ── JSON-LD ───────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </>
  );
}
