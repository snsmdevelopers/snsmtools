import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";
import AgeCalculator from "@/components/calculators/AgeCalculator";

export const metadata: Metadata = {
  title: "Age Calculator — Calculate Your Exact Age in Years, Months & Days | SNSM Tools",
  description:
    "Free age calculator to find your exact age in years, months, and days. Also shows total days, weeks, hours lived, next birthday countdown, and fun age facts.",
  alternates: { canonical: "https://snsmtools.in/calculators/age-calculator" },
};

const faqs = [
  {
    q: "How is exact age calculated?",
    a: "Exact age is calculated by finding the difference between the date of birth and the reference date (usually today). The calculation accounts for varying month lengths and leap years: first, years are computed as the difference in calendar years, then months and remaining days are adjusted. If the current day of month is before the birthday day, one month is subtracted and the remaining days are computed from the end of the previous month.",
  },
  {
    q: "How many days are in a year for age calculation?",
    a: "The number of days in a year varies: a regular year has 365 days and a leap year has 366. Our age calculator uses the exact dates — not an average of 365.25 — so the total days figure is precisely the number of calendar days that have passed since your date of birth. This gives you an accurate count regardless of how many leap years fall within your lifetime.",
  },
  {
    q: "What is a leap year and how does it affect age?",
    a: "A leap year occurs every 4 years (with exceptions for century years not divisible by 400). If you were born on 29 February (a leap day), you technically have a birthday only every 4 years. In non-leap years, many people celebrate on 28 February or 1 March. Our calculator handles leap day birthdays by calculating age to the nearest valid date on the reference year, ensuring correct results for all birth dates.",
  },
  {
    q: "Why use an age calculator instead of doing mental maths?",
    a: "Mental calculation of exact age is error-prone because months have different numbers of days (28–31) and leap years add an extra day every 4 years. An online age calculator eliminates these errors and also provides useful extra information — total days and weeks lived, exact hours, days until next birthday, and the day of the week you were born on — which would be tedious to compute manually.",
  },
] as const;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Age Calculator",
    url: "https://snsmtools.in/calculators/age-calculator",
    description: "Free online age calculator to find exact age in years, months, days and fun life stats",
    applicationCategory: "UtilitiesApplication",
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

export default function AgeCalculatorPage() {
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
          <span className="text-gray-900 dark:text-white">Age Calculator</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Age Calculator</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Our free age calculator tells you your exact age in years, months, and days based on your
            date of birth. Unlike a simple subtraction, the calculator correctly accounts for varying
            month lengths and leap years to give you a precise result. Beyond the basic age, it shows
            fun life statistics: the total number of days, weeks, and hours you have been alive,
            how many days remain until your next birthday, the exact date of your next birthday, and
            even the day of the week you were born on. You can also calculate age between any two
            historical dates — useful for legal documents, retirement planning, or just satisfying
            your curiosity about elapsed time.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        <AgeCalculator />

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
