import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";
import FDCalculator from "@/components/calculators/FDCalculator";

export const metadata: Metadata = {
  title: "FD Calculator — Fixed Deposit Maturity & Interest Calculator | SNSM Tools",
  description:
    "Free FD calculator to compute fixed deposit maturity amount and interest earned. Supports quarterly, monthly, half-yearly, and annual compounding. No login required.",
  alternates: { canonical: "https://snsmtools.in/calculators/fd-calculator" },
};

const faqs = [
  {
    q: "How is FD interest calculated?",
    a: "Fixed deposit interest is calculated using the compound interest formula: A = P × (1 + r/n)^(n×t), where A is the maturity amount, P is the principal, r is the annual interest rate (as a decimal), n is the number of times interest is compounded per year, and t is the tenure in years. The interest earned is simply A − P.",
  },
  {
    q: "Which compounding frequency gives the highest return?",
    a: "Monthly compounding gives the highest effective return compared to quarterly, half-yearly, or annual compounding for the same nominal interest rate. This is because more frequent compounding means interest is added to the principal more often, and subsequent interest is calculated on a slightly larger base. The difference is marginal but noticeable over longer tenures.",
  },
  {
    q: "Is FD interest taxable in India?",
    a: "Yes, FD interest is fully taxable in India as per your income tax slab. Banks deduct TDS (Tax Deducted at Source) at 10% if the interest exceeds ₹40,000 in a financial year (₹50,000 for senior citizens). If your total income is below the taxable limit, you can submit Form 15G (or 15H for senior citizens) to avoid TDS deduction.",
  },
  {
    q: "What is the difference between cumulative and non-cumulative FD?",
    a: "In a cumulative FD, the interest is compounded and paid at maturity along with the principal — ideal for wealth creation. In a non-cumulative FD, interest is paid out periodically (monthly, quarterly, etc.) — suitable for those who need regular income. Our calculator computes the cumulative FD maturity value where interest compounds throughout the tenure.",
  },
] as const;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FD Calculator",
    url: "https://snsmtools.in/calculators/fd-calculator",
    description: "Free online fixed deposit calculator to compute maturity amount and interest in India",
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

export default function FDCalculatorPage() {
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
          <span className="text-gray-900 dark:text-white">FD Calculator</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">FD Calculator</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            A fixed deposit (FD) calculator helps you determine how much your bank deposit will grow
            over time at a given interest rate. FDs are one of India&apos;s most popular savings instruments,
            offering guaranteed returns with capital protection. Our free FD calculator supports all
            compounding frequencies — monthly, quarterly, half-yearly, and annually — so you can accurately
            compare different bank FD offers. Enter your principal amount, interest rate, and tenure to
            instantly see your maturity amount, total interest earned, and effective annual yield. The
            year-wise breakdown helps you track your deposit&apos;s growth every step of the way.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        <FDCalculator />

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
