import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";
import HRACalculator from "@/components/calculators/HRACalculator";

export const metadata: Metadata = {
  title: "HRA Calculator — House Rent Allowance Exemption Calculator | SNSM Tools",
  description:
    "Free HRA calculator to compute house rent allowance exemption under Section 10(13A). Find taxable and exempt HRA based on basic salary, rent paid, and city type.",
  alternates: { canonical: "https://snsmtools.in/calculators/hra-calculator" },
};

const faqs = [
  {
    q: "How is HRA exemption calculated?",
    a: "HRA exemption under Section 10(13A) is the minimum of three amounts: (1) Actual HRA received from employer, (2) 50% of basic salary if you live in a metro city (Delhi, Mumbai, Kolkata, Chennai) or 40% for non-metro cities, and (3) Actual rent paid minus 10% of basic salary. The lowest of these three figures is your tax-exempt HRA; the remainder is added to your taxable income.",
  },
  {
    q: "Can I claim HRA if I live in my own house?",
    a: "No, HRA exemption is only available if you are actually paying rent for your accommodation. If you own the house you live in, you cannot claim HRA exemption even if your employer pays you HRA — the entire HRA received will be added to your taxable income. However, you can still claim home loan interest deduction under Section 24(b) if you have a home loan on that property.",
  },
  {
    q: "Is PAN of landlord required to claim HRA?",
    a: "If your annual rent exceeds ₹1,00,000 (₹8,333 per month), you must provide your landlord's PAN to your employer to claim full HRA exemption. If the landlord does not have a PAN, they must give a signed declaration to that effect. For rent below ₹1,00,000 per year, no PAN is required, though rent receipts are still recommended as supporting documents.",
  },
  {
    q: "Can HRA be claimed under the new tax regime?",
    a: "No, HRA exemption under Section 10(13A) is not available under the new tax regime (introduced in Budget 2020). Under the new regime, you cannot claim most exemptions and deductions including HRA, 80C, 80D, and LTA. If HRA is a significant component of your salary and your rent is high, the old tax regime may be more beneficial for you — use our Income Tax Calculator to compare both regimes.",
  },
] as const;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HRA Calculator",
    url: "https://snsmtools.in/calculators/hra-calculator",
    description: "Free online HRA exemption calculator for Indian salaried employees under Section 10(13A)",
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

export default function HRACalculatorPage() {
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
          <span className="text-gray-900 dark:text-white">HRA Calculator</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">HRA Calculator</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The HRA (House Rent Allowance) calculator helps salaried employees determine the
            tax-exempt portion of their HRA under Section 10(13A) of the Income Tax Act. The exemption
            is the minimum of three prescribed methods: actual HRA received, a percentage of basic salary
            (50% for metro, 40% for non-metro), and rent paid minus 10% of basic. Our calculator
            automatically evaluates all three conditions and highlights the qualifying minimum. It also
            shows your monthly and annual exempt amount, taxable HRA, and estimated annual tax saving
            assuming a 30% tax slab — helping you plan your rent and salary structure for maximum savings.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        <HRACalculator />

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
