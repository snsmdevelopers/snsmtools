import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";
import SIPCalculator from "@/components/calculators/SIPCalculator";

export const metadata: Metadata = {
  title: "SIP Calculator — Mutual Fund SIP Returns Calculator | SNSM Tools",
  description:
    "Free SIP calculator to estimate mutual fund returns. Calculate maturity value, total investment, and estimated returns for any SIP amount and tenure. No login required.",
  alternates: { canonical: "https://snsmtools.in/calculators/sip-calculator" },
};

const faqs = [
  {
    q: "What is a SIP?",
    a: "SIP (Systematic Investment Plan) is a method of investing a fixed amount in mutual funds at regular intervals — typically monthly. It allows you to invest in market-linked instruments without worrying about market timing, and benefits from rupee cost averaging over the long term.",
  },
  {
    q: "How is SIP return calculated?",
    a: "SIP returns are calculated using the compound interest formula for recurring deposits: FV = P × ((1 + r)^n − 1) / r × (1 + r), where P is the monthly investment, r is the monthly return rate (annual rate ÷ 12 ÷ 100), and n is the total number of months. The result shows the future value of all your SIP instalments.",
  },
  {
    q: "What is a realistic SIP return rate?",
    a: "Historically, large-cap equity mutual funds in India have delivered 10–14% CAGR over long periods (10+ years). Mid-cap and small-cap funds can deliver 14–18% but with higher volatility. Debt funds typically deliver 6–8%. Past performance does not guarantee future returns — the 12% default in our calculator is a commonly used estimate for long-term equity SIPs.",
  },
  {
    q: "Is SIP better than a lump sum investment?",
    a: "SIP is generally preferred over lump sum for equity mutual funds because it averages out purchase cost through rupee cost averaging, reducing the risk of investing all your money at a market peak. However, if markets are at a low point and you have surplus funds, a lump sum can generate higher absolute returns. For most investors, SIP is the more disciplined and risk-managed approach.",
  },
] as const;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SIP Calculator",
    url: "https://snsmtools.in/calculators/sip-calculator",
    description: "Free online SIP calculator to estimate mutual fund returns in India",
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

export default function SIPCalculatorPage() {
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
          <span className="text-gray-900 dark:text-white">SIP Calculator</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">SIP Calculator</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            A SIP (Systematic Investment Plan) calculator helps you estimate the future value of your
            regular mutual fund investments. By investing a fixed amount every month, you benefit from
            rupee cost averaging and the power of compounding over time. Our free SIP calculator uses
            the standard future value formula to project your returns based on your monthly investment
            amount, expected annual return rate, and investment tenure. Whether you are investing for
            retirement, a child&apos;s education, or wealth creation, this tool helps you set realistic
            financial goals and visualise your investment journey year by year with a detailed breakdown.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        <SIPCalculator />

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
