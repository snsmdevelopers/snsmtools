import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";
import IncomeTaxCalculator from "@/components/calculators/IncomeTaxCalculator";

export const metadata: Metadata = {
  title: "Income Tax Calculator FY 2024-25 — Old vs New Regime | SNSM Tools",
  description:
    "Free income tax calculator for FY 2024-25. Compare old vs new tax regime, calculate tax liability, cess, and effective rate with slab-wise breakdown. No login required.",
  alternates: { canonical: "https://snsmtools.in/calculators/income-tax-calculator" },
};

const faqs = [
  {
    q: "What is the difference between old and new tax regime?",
    a: "The old tax regime allows you to claim various deductions (80C, 80D, HRA, etc.) to reduce taxable income before applying tax slabs. The new tax regime (introduced in Budget 2020, revised in 2023) offers lower tax rates but does not allow most deductions except a standard deduction of ₹75,000. For FY 2024-25, the new regime is the default unless you opt out.",
  },
  {
    q: "Which tax regime is better — old or new?",
    a: "The new regime is generally better if your total deductions are less than ₹3–4 lakh per year. The old regime benefits those with significant investments (80C), home loans (Section 24), high HRA, NPS contributions, and medical insurance premiums (80D). Our calculator computes both regimes simultaneously so you can see which results in lower tax for your specific income and deductions.",
  },
  {
    q: "What is Section 87A rebate?",
    a: "Section 87A provides a tax rebate to individuals with taxable income up to ₹7 lakh (under the new regime for FY 2024-25) and ₹5 lakh (under the old regime). If your taxable income is within the limit, the rebate effectively makes your total tax payable zero. The rebate amount is up to ₹25,000 under the new regime.",
  },
  {
    q: "What is health and education cess?",
    a: "Health and Education Cess is charged at 4% on the total income tax (including surcharge, if any) for all taxpayers in India. It is mandatory and cannot be reduced through deductions. The cess funds government health and education initiatives. Our calculator automatically adds 4% cess to the computed tax to show your total tax liability.",
  },
] as const;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Income Tax Calculator",
    url: "https://snsmtools.in/calculators/income-tax-calculator",
    description: "Free India income tax calculator for FY 2024-25 with old and new regime comparison",
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

export default function IncomeTaxCalculatorPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
        >
          <Link href="/" className="transition-colors hover:text-teal-600">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/calculators" className="transition-colors hover:text-teal-600">Calculators</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gray-900 dark:text-white">Income Tax Calculator</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Income Tax Calculator FY 2024-25
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Our free income tax calculator helps Indian taxpayers estimate their tax liability for
            Financial Year 2024-25 under both the old and new tax regimes. The new regime for FY
            2024-25 includes a standard deduction of ₹75,000 and a revised slab structure. The old
            regime continues to allow deductions under Section 80C, 80D, HRA exemption, and more.
            Simply enter your gross annual income, age group, and applicable deductions to instantly
            see a slab-wise tax breakdown, cess, effective tax rate, take-home salary, and a side-by-side
            regime comparison to help you make the most tax-efficient decision.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        <IncomeTaxCalculator />

        <div className="mt-10 flex justify-center">
          <AdSlot size="rectangle" />
        </div>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {faqs.map((faq) => (
              <details key={faq.q} className="group px-6 py-0">
                <summary className="flex cursor-pointer list-none items-center justify-between py-5">
                  <span className="font-medium text-gray-900 dark:text-white">{faq.q}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 rotate-90 text-gray-400 transition-transform duration-200 group-open:-rotate-90" />
                </summary>
                <div className="pb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </>
  );
}
