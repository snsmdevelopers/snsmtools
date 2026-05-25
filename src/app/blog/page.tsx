import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Finance Blog — Tips, Guides & Calculators | SNSM Tools",
  description:
    "Read our finance guides for India — how to calculate EMI, SIP returns, income tax, and more. Free financial education for every Indian.",
  alternates: { canonical: "https://snsmtools.in/blog" },
};

const posts = [
  {
    slug: "sip-2000-per-month-10-lakh",
    category: "Investments",
    categoryColor: "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300",
    title: "How ₹2000 SIP Per Month Becomes ₹10 Lakh — Real Numbers",
    excerpt:
      "See exactly how ₹2,000 per month grows to ₹10 lakh and beyond through SIP. Real calculations for 5, 10, 15, 20 and 25 years with step-up SIP strategy explained.",
    readTime: "7 min read",
    publishDate: "May 2025",
  },
  {
    slug: "income-tax-freelancers-india",
    category: "Tax Planning",
    categoryColor: "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300",
    title: "Income Tax for Freelancers in India 2024-25 — Complete Guide",
    excerpt:
      "Freelancing in India? Learn which ITR to file, how Section 44ADA saves you tax, advance tax deadlines, GST requirements, and every deduction available to freelancers.",
    readTime: "10 min read",
    publishDate: "May 2025",
  },
  {
    slug: "home-loan-eligibility-india",
    category: "Home Loans",
    categoryColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
    title: "Home Loan Eligibility in India 2025 — How Banks Decide",
    excerpt:
      "How do Indian banks calculate your home loan eligibility? Learn about FOIR, CIBIL score, income multiplier method and 5 proven ways to maximize your loan amount.",
    readTime: "8 min read",
    publishDate: "May 2025",
  },
  {
    slug: "ppf-vs-fd-vs-sip",
    category: "Investments",
    categoryColor: "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300",
    title: "PPF vs FD vs SIP — Where Should You Invest in 2025?",
    excerpt:
      "PPF, FD, or SIP — which investment gives the best returns in 2025? We compare safety, returns, tax benefits, and liquidity to help you choose the right option.",
    readTime: "8 min read",
    publishDate: "May 2025",
  },
  {
    slug: "best-fd-rates-india-2025",
    category: "Fixed Deposits",
    categoryColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
    title: "Best FD Rates in India 2025 — SBI vs HDFC vs ICICI vs Post Office",
    excerpt:
      "Compare fixed deposit interest rates across all major Indian banks for 2025. Find the highest FD rate for your tenure and maximize your savings.",
    readTime: "7 min read",
    publishDate: "May 2025",
  },
  {
    slug: "save-tax-10-lakh-salary",
    category: "Tax Planning",
    categoryColor: "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300",
    title: "How to Save ₹1 Lakh Tax on ₹10 Lakh Salary in FY 2024-25",
    excerpt:
      "Without tax planning, a ₹10 lakh salary can attract over ₹1 lakh in tax. Learn every legal deduction available — 80C, 80D, HRA, NPS — and pay almost zero tax.",
    readTime: "9 min read",
    publishDate: "May 2025",
  },
  {
    slug: "home-loan-vs-rent-2025",
    category: "Real Estate",
    categoryColor: "bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300",
    title: "Home Loan vs Rent — Which is Better in 2025?",
    excerpt:
      "Planning to buy a home in 2025? We compare the real costs of home loan EMI vs renting across Indian cities and help you make the right decision.",
    readTime: "8 min read",
    publishDate: "May 2025",
  },
  {
    slug: "how-to-calculate-emi-home-loan",
    category: "Loans",
    categoryColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
    title: "How to Calculate EMI for Home Loan in India (2025 Guide)",
    excerpt:
      "Planning to buy a home? Learn how banks calculate your EMI, what factors affect it, and how to reduce your monthly burden with proven strategies.",
    readTime: "5 min read",
    publishDate: "May 2025",
  },
  {
    slug: "sip-vs-lump-sum-investment",
    category: "Investments",
    categoryColor: "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300",
    title: "SIP vs Lump Sum: Which Investment Strategy is Right for You?",
    excerpt:
      "Both SIP and lump sum have their merits. We break down when to use each strategy based on your income, risk appetite, and market conditions.",
    readTime: "6 min read",
    publishDate: "May 2025",
  },
  {
    slug: "new-vs-old-tax-regime-2024-25",
    category: "Taxes",
    categoryColor: "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300",
    title: "New vs Old Tax Regime: Which Saves More Tax in FY 2024-25?",
    excerpt:
      "The government made the new tax regime default from FY 2024-25. Find out which regime saves you more tax based on your income and deductions.",
    readTime: "7 min read",
    publishDate: "May 2025",
  },
] as const;

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Finance Guides for India
        </h1>
        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
          Simple explanations to help you make better money decisions
        </p>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${post.categoryColor}`}>
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="mb-3 text-lg font-bold leading-snug text-gray-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                {post.title}
              </h2>

              <p className="flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-gray-400">{post.publishDate}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700 dark:text-teal-400"
                >
                  Read More <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* SEO note */}
      <div className="mt-12 rounded-2xl border border-teal-200 bg-teal-50 p-8 dark:border-teal-800 dark:bg-teal-950/30">
        <h2 className="mb-2 text-lg font-semibold text-teal-800 dark:text-teal-200">
          More guides coming soon
        </h2>
        <p className="text-sm text-teal-700 dark:text-teal-300">
          We are regularly publishing new articles on personal finance, taxation, investments, and loans
          for Indian users. Bookmark this page and check back for updated guides each month.
        </p>
      </div>
    </div>
  );
}
