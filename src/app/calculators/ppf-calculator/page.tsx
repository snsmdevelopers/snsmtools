import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";
import PPFCalculator from "@/components/calculators/PPFCalculator";

export const metadata: Metadata = {
  title: "PPF Calculator — Public Provident Fund Maturity Calculator | SNSM Tools",
  description:
    "Free PPF calculator to compute Public Provident Fund maturity amount and interest at 7.1% for 15 years. Full year-wise breakdown included. No login required.",
  alternates: { canonical: "https://snsmtools.in/calculators/ppf-calculator" },
};

const faqs = [
  {
    q: "What is PPF and who can invest?",
    a: "PPF (Public Provident Fund) is a government-backed long-term savings scheme in India with a 15-year lock-in period and a current interest rate of 7.1% per annum (compounded annually). Any Indian resident individual can open a PPF account at a post office or designated bank. HUFs and NRIs are not eligible to open new PPF accounts, though NRIs who had a PPF account before becoming NRI can continue it till maturity.",
  },
  {
    q: "What are the investment limits for PPF?",
    a: "You can invest a minimum of ₹500 and a maximum of ₹1,50,000 per financial year in a PPF account. Investments can be made in a lump sum or up to 12 instalments per year. Amounts above ₹1,50,000 per year do not earn interest and are not eligible for tax deductions. Our calculator lets you explore any amount within this range to plan your annual contribution.",
  },
  {
    q: "How is PPF interest calculated?",
    a: "PPF interest is calculated monthly on the lowest balance between the 5th and last day of each month, but credited annually on 31st March. This means to earn maximum interest in a month, you should deposit before the 5th of that month. Our calculator uses an annual simplified model (interest on opening balance + deposit for the year), which gives a close approximation to the actual bank calculation.",
  },
  {
    q: "Can I withdraw from PPF before 15 years?",
    a: "Full withdrawal is only allowed at maturity (after 15 years). Partial withdrawals are permitted from the 7th year onwards (from the 6th financial year) — up to 50% of the balance at the end of the 4th year or end of the preceding year, whichever is lower. Premature closure is allowed after 5 years only for specific reasons (serious illness of self/family, higher education of dependent children) with a 1% interest penalty.",
  },
] as const;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PPF Calculator",
    url: "https://snsmtools.in/calculators/ppf-calculator",
    description: "Free online PPF calculator for Public Provident Fund maturity at 7.1% interest in India",
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

export default function PPFCalculatorPage() {
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
          <span className="text-gray-900 dark:text-white">PPF Calculator</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">PPF Calculator</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The Public Provident Fund (PPF) is one of India&apos;s most trusted tax-saving investments,
            offering guaranteed returns backed by the Government of India and complete EEE (Exempt-Exempt-Exempt)
            tax status. Our free PPF calculator shows you exactly how your yearly contributions grow over
            the mandatory 15-year lock-in period at the current interest rate of 7.1% per annum. The
            calculator provides a complete year-wise statement showing your opening balance, annual deposit,
            interest earned, and closing balance for every year — along with the total maturity amount,
            total interest earned, and a wealth multiplier to help you appreciate the power of compounding.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        <PPFCalculator />

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
