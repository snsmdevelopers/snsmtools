import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, ArrowRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";

export const metadata: Metadata = {
  title: "Best FD Rates in India 2025 — SBI vs HDFC vs ICICI vs Post Office | SNSM Tools",
  description:
    "Compare the best fixed deposit interest rates in India for 2025. SBI, HDFC, ICICI, Axis, and small finance banks FD rates compared. Find the highest FD rate for your tenure.",
  alternates: { canonical: "https://snsmtools.in/blog/best-fd-rates-india-2025" },
  openGraph: {
    title: "Best FD Rates in India 2025 — Complete Bank Comparison",
    description: "Compare FD rates across all major Indian banks for 2025",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best FD Rates in India 2025 — SBI vs HDFC vs ICICI vs Post Office",
  author: { "@type": "Organization", name: "SNSM Tools" },
  publisher: { "@type": "Organization", name: "SNSM Tools" },
  datePublished: "2025-05-21",
  url: "https://snsmtools.in/blog/best-fd-rates-india-2025",
};

const relatedTools = [
  {
    name: "FD Calculator",
    href: "/calculators/fd-calculator",
    desc: "Calculate exact maturity amount and interest for any FD",
  },
  {
    name: "Income Tax Calculator",
    href: "/calculators/income-tax-calculator",
    desc: "Find out how much tax you owe on your FD interest",
  },
  {
    name: "PPF Calculator",
    href: "/calculators/ppf-calculator",
    desc: "Compare FD returns vs PPF over 15 years",
  },
];

const articleClasses = `
  text-gray-700 dark:text-gray-300
  [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:dark:text-white
  [&_p]:mb-4 [&_p]:leading-relaxed
  [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
  [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
  [&_li]:leading-relaxed
  [&_strong]:font-semibold [&_strong]:text-gray-900 [&_strong]:dark:text-white
  [&_em]:italic
  [&_table]:w-full [&_table]:border-collapse [&_table]:mb-4 [&_table]:text-sm
  [&_th]:border [&_th]:border-gray-200 [&_th]:dark:border-gray-700 [&_th]:bg-gray-50 [&_th]:dark:bg-gray-800 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-gray-700 [&_th]:dark:text-gray-300
  [&_td]:border [&_td]:border-gray-200 [&_td]:dark:border-gray-700 [&_td]:px-3 [&_td]:py-2
`;

export default function BestFDRatesPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
        >
          <Link href="/" className="transition-colors hover:text-teal-600">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/blog" className="transition-colors hover:text-teal-600">Blog</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gray-900 dark:text-white">Best FD Rates India 2025</span>
        </nav>

        {/* Article header */}
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              Fixed Deposits
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar className="h-3 w-3" /> May 2025
            </span>
            <span className="text-xs text-gray-400">By SNSM Tools</span>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
            Best FD Rates in India 2025 — Complete Bank Comparison
          </h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            Compare fixed deposit interest rates across SBI, HDFC, ICICI, Axis, small finance banks,
            and post office schemes — and find the highest FD rate for your tenure.
          </p>
        </header>

        {/* Top ad */}
        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        {/* Article — Part 1: Intro + Public Banks + Private Banks */}
        <article className={articleClasses}>
          <p>
            Fixed deposits remain one of the most trusted investment options for Indians. Safe,
            predictable, and guaranteed — FDs offer peace of mind that equity markets cannot. But
            with dozens of banks offering different rates, choosing the right FD can mean a
            difference of ₹10,000 to ₹50,000 in interest over a 3–5 year period.
          </p>
          <p>
            In this guide, we compare FD interest rates across major Indian banks, small finance
            banks, and post office schemes for 2025 — so you can make the most of your savings.
          </p>

          <h2>FD Rates — Major Public Sector Banks (2025)</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Bank</th>
                  <th>1 Year</th>
                  <th>2 Years</th>
                  <th>3 Years</th>
                  <th>5 Years</th>
                  <th>Senior Citizen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SBI</td>
                  <td>6.80%</td>
                  <td>7.00%</td>
                  <td>6.75%</td>
                  <td>6.50%</td>
                  <td>+0.50%</td>
                </tr>
                <tr>
                  <td>Bank of Baroda</td>
                  <td>6.85%</td>
                  <td>7.00%</td>
                  <td>6.50%</td>
                  <td>6.50%</td>
                  <td>+0.50%</td>
                </tr>
                <tr>
                  <td>Punjab National Bank</td>
                  <td>6.80%</td>
                  <td>6.80%</td>
                  <td>6.50%</td>
                  <td>6.50%</td>
                  <td>+0.50%</td>
                </tr>
                <tr>
                  <td>Canara Bank</td>
                  <td>6.85%</td>
                  <td>6.85%</td>
                  <td>6.70%</td>
                  <td>6.70%</td>
                  <td>+0.50%</td>
                </tr>
                <tr>
                  <td>Union Bank</td>
                  <td>6.80%</td>
                  <td>6.80%</td>
                  <td>6.50%</td>
                  <td>6.50%</td>
                  <td>+0.50%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Note:</strong> Public sector banks offer lower rates but are backed by the
            Government of India — making them the safest option for risk-averse investors.
          </p>

          <h2>FD Rates — Major Private Banks (2025)</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Bank</th>
                  <th>1 Year</th>
                  <th>2 Years</th>
                  <th>3 Years</th>
                  <th>5 Years</th>
                  <th>Senior Citizen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HDFC Bank</td>
                  <td>6.60%</td>
                  <td>7.00%</td>
                  <td>7.00%</td>
                  <td>7.00%</td>
                  <td>+0.50%</td>
                </tr>
                <tr>
                  <td>ICICI Bank</td>
                  <td>6.70%</td>
                  <td>7.00%</td>
                  <td>7.00%</td>
                  <td>7.00%</td>
                  <td>+0.50%</td>
                </tr>
                <tr>
                  <td>Axis Bank</td>
                  <td>6.70%</td>
                  <td>7.10%</td>
                  <td>7.10%</td>
                  <td>7.00%</td>
                  <td>+0.75%</td>
                </tr>
                <tr>
                  <td>Kotak Mahindra</td>
                  <td>7.10%</td>
                  <td>7.10%</td>
                  <td>7.00%</td>
                  <td>6.20%</td>
                  <td>+0.50%</td>
                </tr>
                <tr>
                  <td>IndusInd Bank</td>
                  <td>7.75%</td>
                  <td>7.25%</td>
                  <td>7.25%</td>
                  <td>7.25%</td>
                  <td>+0.50%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Private banks generally offer slightly higher rates than public sector banks. HDFC,
            ICICI, and Axis are safe choices backed by strong balance sheets and RBI regulation.
          </p>
        </article>

        {/* Mid-article ad — after 3rd section */}
        <div className="my-10 flex justify-center">
          <AdSlot size="rectangle" />
        </div>

        {/* Article — Part 2: Small Finance Banks onwards */}
        <div className={articleClasses}>
          <h2>FD Rates — Small Finance Banks (Highest Rates)</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Bank</th>
                  <th>1 Year</th>
                  <th>2 Years</th>
                  <th>3 Years</th>
                  <th>Senior Citizen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Unity Small Finance Bank</td>
                  <td>8.50%</td>
                  <td>8.50%</td>
                  <td>8.25%</td>
                  <td>+0.50%</td>
                </tr>
                <tr>
                  <td>Suryoday Small Finance Bank</td>
                  <td>8.60%</td>
                  <td>8.25%</td>
                  <td>8.25%</td>
                  <td>+0.75%</td>
                </tr>
                <tr>
                  <td>ESAF Small Finance Bank</td>
                  <td>8.25%</td>
                  <td>8.25%</td>
                  <td>8.00%</td>
                  <td>+0.50%</td>
                </tr>
                <tr>
                  <td>Utkarsh Small Finance Bank</td>
                  <td>8.50%</td>
                  <td>8.25%</td>
                  <td>8.00%</td>
                  <td>+0.75%</td>
                </tr>
                <tr>
                  <td>Jana Small Finance Bank</td>
                  <td>8.25%</td>
                  <td>8.00%</td>
                  <td>8.00%</td>
                  <td>+0.50%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Small finance banks offer the highest FD rates in India — often 1.5 to 2% higher than
            large banks. However they carry slightly higher risk. Key protection: deposits up to
            ₹5 lakh are insured by DICGC (Deposit Insurance and Credit Guarantee Corporation) —
            same as any other bank.
          </p>

          <h2>Post Office FD Rates (2025) — Safest Option</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Scheme</th>
                  <th>Tenure</th>
                  <th>Interest Rate</th>
                  <th>Tax Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Post Office TD (1 yr)</td>
                  <td>1 year</td>
                  <td>6.90%</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Post Office TD (2 yr)</td>
                  <td>2 years</td>
                  <td>7.00%</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Post Office TD (3 yr)</td>
                  <td>3 years</td>
                  <td>7.10%</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Post Office TD (5 yr)</td>
                  <td>5 years</td>
                  <td>7.50%</td>
                  <td>Yes — 80C</td>
                </tr>
                <tr>
                  <td>NSC</td>
                  <td>5 years</td>
                  <td>7.70%</td>
                  <td>Yes — 80C</td>
                </tr>
                <tr>
                  <td>Senior Citizens Savings Scheme</td>
                  <td>5 years</td>
                  <td>8.20%</td>
                  <td>Yes — 80C</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Post office schemes are backed by the Government of India — making them the safest fixed
            income option available. The 5-year Post Office TD qualifies for Section 80C deduction.
            Senior Citizens Savings Scheme at 8.20% is the best safe investment for retirees.
          </p>

          <h2>FD Comparison — ₹5 Lakh Investment for 3 Years</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Bank</th>
                  <th>Rate</th>
                  <th>Maturity Amount</th>
                  <th>Interest Earned</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SBI</td>
                  <td>6.75%</td>
                  <td>₹6,07,800</td>
                  <td>₹1,07,800</td>
                </tr>
                <tr>
                  <td>HDFC Bank</td>
                  <td>7.00%</td>
                  <td>₹6,13,500</td>
                  <td>₹1,13,500</td>
                </tr>
                <tr>
                  <td>Axis Bank</td>
                  <td>7.10%</td>
                  <td>₹6,15,900</td>
                  <td>₹1,15,900</td>
                </tr>
                <tr>
                  <td>IndusInd Bank</td>
                  <td>7.25%</td>
                  <td>₹6,18,800</td>
                  <td>₹1,18,800</td>
                </tr>
                <tr>
                  <td>Suryoday SFB</td>
                  <td>8.25%</td>
                  <td>₹6,36,500</td>
                  <td>₹1,36,500</td>
                </tr>
                <tr>
                  <td>Post Office TD</td>
                  <td>7.10%</td>
                  <td>₹6,15,900</td>
                  <td>₹1,15,900</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            On a ₹5 lakh investment for 3 years, the difference between SBI (6.75%) and Suryoday
            Small Finance Bank (8.25%) is ₹28,700 in additional interest. That is significant —
            but weigh the safety factor before choosing a small finance bank.
          </p>

          <h2>FD for Senior Citizens — Best Options</h2>
          <p>
            Senior citizens get an additional 0.25% to 0.75% over regular FD rates. Here are the
            best options specifically for senior citizens in 2025:
          </p>
          <ol>
            <li>
              <strong>Senior Citizens Savings Scheme (SCSS) — 8.20%</strong>
              <br />
              Best overall for senior citizens. Government-backed, quarterly interest payout,
              Section 80C benefit. Maximum deposit ₹30 lakh. Available at post offices and major
              banks.
            </li>
            <li>
              <strong>Pradhan Mantri Vaya Vandana Yojana (PMVVY) — 7.40%</strong>
              <br />
              LIC scheme for senior citizens above 60. Monthly pension option available. Maximum
              investment ₹15 lakh.
            </li>
            <li>
              <strong>IndusInd Bank Senior FD — 8.25% (7.75% + 0.50%)</strong>
              <br />
              Among private banks, IndusInd offers the highest senior citizen FD rate.
            </li>
            <li>
              <strong>Suryoday Small Finance Bank Senior FD — 9.10% (8.35% + 0.75%)</strong>
              <br />
              Highest rate available for senior citizens — but remember DICGC insurance limit of
              ₹5 lakh.
            </li>
          </ol>

          <h2>Is FD Interest Taxable?</h2>
          <p>
            Yes — FD interest is fully taxable as per your income tax slab rate. Key points:
          </p>
          <p>
            <strong>TDS (Tax Deducted at Source):</strong>
          </p>
          <ul>
            <li>
              Bank deducts TDS at 10% if total FD interest exceeds ₹40,000 in a year (₹50,000
              for senior citizens)
            </li>
            <li>If PAN is not provided, TDS rate is 20%</li>
          </ul>
          <p>
            <strong>How to avoid TDS:</strong>
          </p>
          <ul>
            <li>
              Submit Form 15G (below 60 years) or Form 15H (senior citizens) at the start of each
              financial year if your total income is below the taxable limit
            </li>
            <li>This prevents the bank from deducting TDS</li>
          </ul>
          <p>
            <strong>Important:</strong> Even if TDS is not deducted, you must declare FD interest
            in your Income Tax Return (ITR) every year.
          </p>

          <h2>How to Choose the Right FD</h2>
          <p>Follow this simple framework:</p>
          <ol>
            <li>
              <strong>Decide your tenure first</strong> — Need money in 1 year: choose a 1-year FD.
              Long-term saving: 3–5 year FD. Do not lock money you might need urgently.
            </li>
            <li>
              <strong>Match your risk appetite</strong> — Zero risk: Post Office or SBI. Low risk:
              HDFC, ICICI, Axis. Slightly higher risk for higher return: Small Finance Banks (within
              ₹5 lakh DICGC limit).
            </li>
            <li>
              <strong>Check senior citizen benefit</strong> — If you or a family member is above 60,
              always open the FD in their name for an extra 0.50–0.75% rate.
            </li>
            <li>
              <strong>Calculate exact maturity amount</strong> — Use our FD Calculator to see
              exactly how much you will receive at maturity based on the rate and compounding
              frequency.
            </li>
          </ol>

          <h2>Calculate Your FD Returns Now</h2>
          <p>
            Use our free FD Calculator to calculate the exact maturity amount and interest for any
            bank, rate, and tenure.
          </p>
          <ul>
            <li>
              <Link
                href="/calculators/fd-calculator"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                Use our FD Calculator →
              </Link>
            </li>
            <li>
              <Link
                href="/calculators/income-tax-calculator"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                Use our Income Tax Calculator →
              </Link>
            </li>
          </ul>
        </div>

        {/* Related calculators */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Related Calculators
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relatedTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-teal-400 hover:shadow-sm dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                    {tool.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{tool.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-teal-500" />
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom ad */}
        <div className="mt-10 flex justify-center">
          <AdSlot size="rectangle" />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
