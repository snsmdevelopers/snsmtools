import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, ArrowRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";

export const metadata: Metadata = {
  title: "Home Loan Eligibility in India 2025 — How Banks Decide | SNSM Tools",
  description:
    "How do banks calculate home loan eligibility in India? Learn about income criteria, CIBIL score, FOIR, co-applicant benefits and how to maximize your home loan amount.",
  alternates: { canonical: "https://snsmtools.in/blog/home-loan-eligibility-india" },
  openGraph: {
    title: "Home Loan Eligibility in India 2025 — How Banks Decide",
    description: "Complete guide to home loan eligibility calculation in India",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Home Loan Eligibility in India 2025 — How Banks Decide",
  author: { "@type": "Organization", name: "SNSM Tools" },
  publisher: { "@type": "Organization", name: "SNSM Tools" },
  datePublished: "2025-05-21",
  url: "https://snsmtools.in/blog/home-loan-eligibility-india",
};

const relatedTools = [
  {
    name: "EMI Calculator",
    href: "/calculators/emi-calculator",
    desc: "Calculate your exact monthly home loan EMI before applying",
  },
  {
    name: "Income Tax Calculator",
    href: "/calculators/income-tax-calculator",
    desc: "Find your tax saving from home loan interest and principal",
  },
  {
    name: "HRA Calculator",
    href: "/calculators/hra-calculator",
    desc: "Calculate HRA exemption if you are currently renting",
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

export default function HomeLoanEligibilityPage() {
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
          <span className="text-gray-900 dark:text-white">Home Loan Eligibility India</span>
        </nav>

        {/* Article header */}
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              Home Loans
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar className="h-3 w-3" /> May 2025
            </span>
            <span className="text-xs text-gray-400">By SNSM Tools</span>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
            Home Loan Eligibility in India 2025 — How Banks Decide
          </h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            How do Indian banks calculate your home loan eligibility? Learn about FOIR, CIBIL score,
            income multiplier, co-applicant benefits, and 5 proven ways to maximize your loan
            amount.
          </p>
        </header>

        {/* Top ad */}
        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        {/* Article — Part 1: Intro + Basic Criteria + FOIR + CIBIL */}
        <article className={articleClasses}>
          <p>
            Getting a home loan approved in India is not just about having a good salary. Banks
            evaluate multiple factors before deciding how much loan to sanction — your income,
            existing debts, credit score, age, employment type, and even the property itself.
            Understanding how banks calculate eligibility helps you plan better and maximize your
            loan amount.
          </p>
          <p>
            In this guide, we explain exactly how Indian banks determine home loan eligibility in
            2025, what factors affect your eligibility, and practical steps to improve your chances
            of getting the loan amount you need.
          </p>

          <h2>The Basic Eligibility Criteria</h2>
          <p>Most Indian banks have these minimum requirements for a home loan:</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>Salaried</th>
                  <th>Self-Employed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Age</td>
                  <td>21–60 years</td>
                  <td>21–65 years</td>
                </tr>
                <tr>
                  <td>Minimum income</td>
                  <td>₹25,000/month</td>
                  <td>₹2 lakh/year (ITR)</td>
                </tr>
                <tr>
                  <td>Employment stability</td>
                  <td>2+ years in current job</td>
                  <td>3+ years in business</td>
                </tr>
                <tr>
                  <td>CIBIL score</td>
                  <td>700+ (750+ preferred)</td>
                  <td>700+ (750+ preferred)</td>
                </tr>
                <tr>
                  <td>Minimum loan amount</td>
                  <td>₹5 lakh</td>
                  <td>₹5 lakh</td>
                </tr>
                <tr>
                  <td>Maximum tenure</td>
                  <td>Up to 30 years</td>
                  <td>Up to 20 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Note:</strong> Criteria vary by bank. Some banks like SBI and HDFC have
            different requirements for government employees vs private sector employees.
          </p>

          <h2>How Banks Calculate Your Loan Amount — FOIR</h2>
          <p>
            The most important factor in home loan eligibility is FOIR —{" "}
            <strong>Fixed Obligation to Income Ratio</strong>.
          </p>
          <p>
            <strong>FOIR = (Total Monthly EMIs + Proposed Home Loan EMI) ÷ Gross Monthly Income</strong>
          </p>
          <p>
            Most banks allow FOIR up to 40–50%. This means your total EMI commitments including the
            new home loan should not exceed 40–50% of your gross monthly income.
          </p>
          <p>
            <strong>Example calculation:</strong>
          </p>
          <ul>
            <li>Gross monthly salary: ₹60,000</li>
            <li>Existing EMIs (car loan + personal loan): ₹10,000</li>
            <li>Maximum FOIR allowed (45%): ₹60,000 × 45% = ₹27,000</li>
            <li>Maximum home loan EMI allowed: ₹27,000 − ₹10,000 = ₹17,000</li>
          </ul>
          <p>
            With ₹17,000 EMI at 8.75% for 20 years:{" "}
            <strong>Maximum loan eligible: approximately ₹19.5 lakh</strong>
          </p>
          <p>
            This is why clearing existing loans before applying for a home loan dramatically
            increases your eligibility.
          </p>

          <h2>CIBIL Score — The Most Critical Factor</h2>
          <p>
            Your CIBIL score (credit score) is the first thing every bank checks. It ranges from
            300 to 900.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>CIBIL Score</th>
                  <th>Loan Approval Chances</th>
                  <th>Interest Rate Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>750 and above</td>
                  <td>Excellent — easy approval</td>
                  <td>Best rates offered</td>
                </tr>
                <tr>
                  <td>700 to 749</td>
                  <td>Good — approval likely</td>
                  <td>Standard rates</td>
                </tr>
                <tr>
                  <td>650 to 699</td>
                  <td>Fair — may need co-applicant</td>
                  <td>Higher rates</td>
                </tr>
                <tr>
                  <td>600 to 649</td>
                  <td>Poor — difficult to get loan</td>
                  <td>Very high rates or rejection</td>
                </tr>
                <tr>
                  <td>Below 600</td>
                  <td>Very poor — likely rejection</td>
                  <td>Most banks will reject</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>How to improve your CIBIL score:</strong>
          </p>
          <ol>
            <li>
              Pay all EMIs and credit card bills on or before due date — even one missed payment
              drops score by 50–100 points
            </li>
            <li>Keep credit card utilization below 30% of your credit limit</li>
            <li>
              Do not apply for multiple loans simultaneously — each inquiry reduces score
            </li>
            <li>Maintain a mix of secured and unsecured credit</li>
            <li>
              Check your CIBIL report for errors — dispute any incorrect entries
            </li>
          </ol>
          <p>You can check your CIBIL score free once a year at cibil.com.</p>
        </article>

        {/* Mid-article ad — after 3rd section */}
        <div className="my-10 flex justify-center">
          <AdSlot size="rectangle" />
        </div>

        {/* Article — Part 2: Income method + Tenure + Co-applicant + Documents + Tips + Table + CTA */}
        <div className={articleClasses}>
          <h2>Income Multiplier Method — Quick Estimate</h2>
          <p>A quick rule of thumb used by many banks:</p>
          <p>
            <strong>Home loan eligibility = Net monthly income × 60</strong>
          </p>
          <p>
            <strong>Example:</strong> Net monthly salary: ₹50,000 → Estimated eligibility:
            ₹50,000 × 60 = <strong>₹30,00,000</strong>
          </p>
          <p>
            However this is just an estimate. The actual amount depends on your existing
            obligations, CIBIL score, tenure chosen, and the bank&apos;s specific policies.
          </p>
          <p>
            <strong>Income considered by banks — For salaried employees:</strong>
          </p>
          <ul>
            <li>Basic salary + DA (fully counted)</li>
            <li>HRA (partially counted — 50–75%)</li>
            <li>Special allowances (partially counted)</li>
            <li>Bonus and incentives (50% of average last 2 years)</li>
            <li>Rental income (75–80% counted)</li>
          </ul>
          <p>
            <strong>For self-employed:</strong>
          </p>
          <ul>
            <li>Average net profit from last 3 years ITR</li>
            <li>Business income after deductions</li>
            <li>Depreciation added back</li>
          </ul>

          <h2>How Tenure Affects Your Eligibility</h2>
          <p>
            <strong>Longer tenure = smaller EMI = higher loan eligibility.</strong>
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Loan Amount</th>
                  <th>Rate</th>
                  <th>Tenure</th>
                  <th>Monthly EMI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>₹30,00,000</td>
                  <td>8.75%</td>
                  <td>10 years</td>
                  <td>₹37,480</td>
                </tr>
                <tr>
                  <td>₹30,00,000</td>
                  <td>8.75%</td>
                  <td>15 years</td>
                  <td>₹29,930</td>
                </tr>
                <tr>
                  <td>₹30,00,000</td>
                  <td>8.75%</td>
                  <td>20 years</td>
                  <td>₹26,650</td>
                </tr>
                <tr>
                  <td>₹30,00,000</td>
                  <td>8.75%</td>
                  <td>25 years</td>
                  <td>₹24,750</td>
                </tr>
                <tr>
                  <td>₹30,00,000</td>
                  <td>8.75%</td>
                  <td>30 years</td>
                  <td>₹23,590</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Choosing 30 years instead of 20 years reduces your EMI by ₹3,060 — which increases
            your eligibility. However total interest paid over 30 years is significantly higher than
            20 years. Balance this carefully.
          </p>

          <h2>Adding a Co-Applicant — Boost Your Eligibility</h2>
          <p>
            Adding a co-applicant (spouse, parent, or sibling) to your home loan can significantly
            increase your eligible loan amount.
          </p>
          <p>
            <strong>Benefits of co-applicant:</strong>
          </p>
          <ul>
            <li>Combined income considered — doubles or increases eligibility significantly</li>
            <li>
              If co-applicant has good CIBIL score, it strengthens the application
            </li>
            <li>
              Both co-applicants get Section 80C and Section 24(b) tax benefits
            </li>
            <li>
              Some banks offer lower interest rates for women co-applicants (0.05% lower)
            </li>
          </ul>
          <p>
            <strong>Example:</strong>
          </p>
          <ul>
            <li>Husband income: ₹50,000/month — eligible for ₹25 lakh</li>
            <li>Wife income: ₹35,000/month — eligible for ₹18 lakh</li>
            <li>
              Combined eligibility: ₹40–43 lakh (not simply additive — banks use combined FOIR)
            </li>
          </ul>
          <p>
            <strong>Important:</strong> Co-applicant becomes equally liable for the loan. If the
            primary applicant cannot pay, the co-applicant must pay.
          </p>

          <h2>Documents Required for Home Loan</h2>
          <p>Having these documents ready speeds up approval:</p>
          <p>
            <strong>For salaried employees:</strong>
          </p>
          <ul>
            <li>Last 3 months salary slips</li>
            <li>Last 2 years Form 16</li>
            <li>Last 6 months bank statements</li>
            <li>PAN card and Aadhaar card</li>
            <li>Passport size photographs</li>
            <li>Property documents (sale agreement, NOC from builder)</li>
          </ul>
          <p>
            <strong>For self-employed:</strong>
          </p>
          <ul>
            <li>Last 3 years ITR with computation</li>
            <li>Last 3 years audited balance sheet and P&amp;L</li>
            <li>Business registration certificate</li>
            <li>Last 12 months bank statements (business and personal)</li>
            <li>PAN card and Aadhaar card</li>
          </ul>

          <h2>5 Ways to Increase Your Home Loan Eligibility</h2>
          <ol>
            <li>
              <strong>Clear existing loans before applying</strong> — Pay off personal loans and car
              loans first. Each ₹10,000 reduction in monthly EMI obligations increases your home
              loan eligibility by approximately ₹8–10 lakh.
            </li>
            <li>
              <strong>Improve your CIBIL score</strong> — Spend 6–12 months improving your score
              before applying. Going from 680 to 750 can mean the difference between rejection and
              approval — or between 9.5% and 8.5% interest rate.
            </li>
            <li>
              <strong>Add a working co-applicant</strong> — A spouse or parent with income can
              dramatically increase your combined eligibility and may also get you a better interest
              rate.
            </li>
            <li>
              <strong>Choose a longer tenure</strong> — Opting for 25 or 30 years instead of 15 or
              20 years reduces your EMI and increases eligibility. You can always prepay later when
              income grows.
            </li>
            <li>
              <strong>Show all income sources</strong> — Rental income, freelance income,
              agricultural income — ensure all legitimate income is reflected in your ITR. Banks
              consider documented income only.
            </li>
          </ol>

          <h2>Bank-wise Home Loan Eligibility for ₹50,000 Salary</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Bank</th>
                  <th>Approx Eligibility</th>
                  <th>Rate (2025)</th>
                  <th>Processing Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SBI</td>
                  <td>₹28–32 lakh</td>
                  <td>8.50% onwards</td>
                  <td>0.35% (max ₹10,000)</td>
                </tr>
                <tr>
                  <td>HDFC</td>
                  <td>₹30–35 lakh</td>
                  <td>8.70% onwards</td>
                  <td>0.50%</td>
                </tr>
                <tr>
                  <td>ICICI</td>
                  <td>₹28–33 lakh</td>
                  <td>8.75% onwards</td>
                  <td>0.50%</td>
                </tr>
                <tr>
                  <td>Axis Bank</td>
                  <td>₹30–35 lakh</td>
                  <td>8.75% onwards</td>
                  <td>1%</td>
                </tr>
                <tr>
                  <td>LIC Housing</td>
                  <td>₹28–32 lakh</td>
                  <td>8.50% onwards</td>
                  <td>0.25%</td>
                </tr>
                <tr>
                  <td>Kotak</td>
                  <td>₹30–35 lakh</td>
                  <td>8.75% onwards</td>
                  <td>0.50%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Eligibility varies based on your complete profile. Always apply to 2–3 banks and
            compare offers before finalizing.
          </p>

          <h2>Calculate Your EMI Now</h2>
          <p>
            Before applying for a home loan, calculate your exact monthly EMI using our free EMI
            Calculator. Know your numbers before you walk into the bank.
          </p>
          <ul>
            <li>
              <Link
                href="/calculators/emi-calculator"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                Use our EMI Calculator →
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
