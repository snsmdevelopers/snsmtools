import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, ArrowRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";

export const metadata: Metadata = {
  title: "How to Save ₹1 Lakh Tax on ₹10 Lakh Salary in 2024-25 | SNSM Tools",
  description:
    "Complete guide to save maximum tax on ₹10 lakh salary in FY 2024-25. Learn about 80C, 80D, HRA, NPS deductions and whether old or new regime saves more tax.",
  alternates: { canonical: "https://snsmtools.in/blog/save-tax-10-lakh-salary" },
  openGraph: {
    title: "How to Save ₹1 Lakh Tax on ₹10 Lakh Salary in 2024-25",
    description: "Complete tax saving guide for ₹10 lakh salary in India",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Save ₹1 Lakh Tax on ₹10 Lakh Salary in 2024-25",
  author: { "@type": "Organization", name: "SNSM Tools" },
  publisher: { "@type": "Organization", name: "SNSM Tools" },
  datePublished: "2025-05-21",
  url: "https://snsmtools.in/blog/save-tax-10-lakh-salary",
};

const relatedTools = [
  {
    name: "Income Tax Calculator",
    href: "/calculators/income-tax-calculator",
    desc: "Compare old vs new regime tax for your exact income",
  },
  {
    name: "HRA Calculator",
    href: "/calculators/hra-calculator",
    desc: "Calculate your HRA exemption and tax saving",
  },
  {
    name: "PPF Calculator",
    href: "/calculators/ppf-calculator",
    desc: "See how your PPF investment grows over 15 years",
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

export default function SaveTax10LakhPage() {
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
          <span className="text-gray-900 dark:text-white">Save Tax on ₹10 Lakh Salary</span>
        </nav>

        {/* Article header */}
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full px-3 py-1 text-xs font-semibold bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300">
              Tax Planning
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="h-3 w-3" /> 9 min read
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar className="h-3 w-3" /> May 2025
            </span>
            <span className="text-xs text-gray-400">By SNSM Tools</span>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
            How to Save ₹1 Lakh Tax on ₹10 Lakh Salary in FY 2024-25
          </h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            Complete guide to every legal deduction available for a ₹10 lakh salary — 80C, 80D,
            HRA, NPS — and a side-by-side comparison of which tax regime saves you more.
          </p>
        </header>

        {/* Top ad */}
        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        {/* Article — Part 1: Intro + Tax Without Planning + 80C */}
        <article className={articleClasses}>
          <p>
            If you earn ₹10 lakh per year, you are in a significant tax bracket in India. Without
            proper planning, you could end up paying ₹75,000 to ₹1,00,000 or more in income tax
            every year. The good news is that Indian tax laws offer several legitimate ways to reduce
            your tax burden significantly — sometimes to zero.
          </p>
          <p>
            In this guide, we walk through every available deduction and exemption for a ₹10 lakh
            salary in FY 2024-25, compare both tax regimes, and show you exactly how to save maximum
            tax legally.
          </p>

          <h2>Your Tax Liability Without Planning</h2>
          <p>Let us first understand what you owe without any planning:</p>
          <p>
            <strong>Under New Tax Regime (FY 2024-25):</strong>
          </p>
          <ul>
            <li>Gross salary: ₹10,00,000</li>
            <li>Standard deduction: ₹75,000</li>
            <li>Taxable income: ₹9,25,000</li>
          </ul>
          <p>Tax calculation:</p>
          <ul>
            <li>Up to ₹3,00,000: NIL</li>
            <li>₹3,00,001 to ₹7,00,000: 5% = ₹20,000</li>
            <li>₹7,00,001 to ₹9,25,000: 10% = ₹22,500</li>
            <li>Total tax: ₹42,500</li>
            <li>Add 4% cess: ₹1,700</li>
            <li><strong>Total tax payable: ₹44,200</strong></li>
          </ul>
          <p>
            <strong>Under Old Tax Regime (without any deductions):</strong>
          </p>
          <ul>
            <li>Gross salary: ₹10,00,000</li>
            <li>Standard deduction: ₹50,000</li>
            <li>Taxable income: ₹9,50,000</li>
          </ul>
          <p>Tax calculation:</p>
          <ul>
            <li>Up to ₹2,50,000: NIL</li>
            <li>₹2,50,001 to ₹5,00,000: 5% = ₹12,500</li>
            <li>₹5,00,001 to ₹9,50,000: 20% = ₹90,000</li>
            <li>Total tax: ₹1,02,500</li>
            <li>Add 4% cess: ₹4,100</li>
            <li><strong>Total tax payable: ₹1,06,600</strong></li>
          </ul>
          <p>
            Clearly the new regime is better without deductions. But with deductions the old regime
            can win — let us see how.
          </p>

          <h2>Step 1 — Section 80C (Save up to ₹46,800)</h2>
          <p>
            Section 80C allows deduction up to ₹1,50,000 per year. This is available only under the
            old tax regime.
          </p>
          <p>Best 80C investment options:</p>
          <ul>
            <li>
              <strong>EPF (Employee Provident Fund):</strong> Already deducted from salary — check
              your payslip. Most salaried employees contribute 12% of basic salary.
            </li>
            <li>
              <strong>PPF (Public Provident Fund):</strong> Safe, tax-free returns at 7.1%. Can
              invest up to ₹1.5 lakh per year.
            </li>
            <li>
              <strong>ELSS Mutual Funds:</strong> Equity-linked savings scheme. Shortest lock-in of
              3 years among 80C options. Potential returns of 12–15%.
            </li>
            <li>
              <strong>Life Insurance Premium:</strong> If you have a term or endowment policy, the
              premium qualifies under 80C.
            </li>
            <li>
              <strong>Home Loan Principal:</strong> Principal repayment on home loan qualifies under
              80C.
            </li>
            <li>
              <strong>Children&apos;s Tuition Fees:</strong> Fees paid for up to 2 children&apos;s
              full-time education qualifies.
            </li>
            <li>
              <strong>NSC (National Savings Certificate):</strong> Post office scheme with 7.7%
              interest.
            </li>
            <li>
              <strong>Tax-saving Fixed Deposit:</strong> 5-year FD with any bank. Interest is
              taxable.
            </li>
          </ul>
          <ul>
            <li>Tax saved at 20% slab: ₹1,50,000 × 20% = ₹30,000</li>
            <li>Tax saved at 30% slab: ₹1,50,000 × 30% = ₹45,000</li>
          </ul>
        </article>

        {/* Mid-article ad — after 3rd section */}
        <div className="my-10 flex justify-center">
          <AdSlot size="rectangle" />
        </div>

        {/* Article — Part 2: Remaining steps + comparison tables + CTA */}
        <div className={articleClasses}>
          <h2>Step 2 — Section 80D Health Insurance (Save up to ₹15,600)</h2>
          <p>Section 80D allows deduction for health insurance premiums:</p>
          <ul>
            <li>Self, spouse, children: Up to ₹25,000 per year</li>
            <li>Parents (below 60): Additional ₹25,000</li>
            <li>Parents (above 60): Additional ₹50,000</li>
          </ul>
          <p>
            For a person with family floater health insurance (₹25,000 premium) and parents&apos;
            insurance (₹25,000):
          </p>
          <ul>
            <li>Total deduction: ₹50,000</li>
            <li>Tax saved at 20% slab: ₹10,000</li>
          </ul>
          <p>
            Health insurance is a must-have anyway — the tax benefit is a bonus. A good family
            floater policy for ₹10–15 lakh coverage costs ₹12,000–₹25,000 per year.
          </p>

          <h2>Step 3 — HRA Exemption (Save up to ₹60,000+)</h2>
          <p>If you live in a rented house, HRA exemption can be your biggest tax saver.</p>
          <p>For a ₹10 lakh salary employee in Chennai or Madurai:</p>
          <ul>
            <li>Basic salary (typically 40–50% of CTC): ₹4,00,000/year</li>
            <li>HRA received: ₹1,60,000/year (₹13,333/month)</li>
            <li>Actual rent paid: ₹1,80,000/year (₹15,000/month)</li>
            <li>City: Non-metro</li>
          </ul>
          <p>HRA exemption = minimum of:</p>
          <ol>
            <li>Actual HRA received: ₹1,60,000</li>
            <li>Rent − 10% of basic: ₹1,80,000 − ₹40,000 = ₹1,40,000</li>
            <li>40% of basic (non-metro): ₹1,60,000</li>
          </ol>
          <ul>
            <li><strong>HRA exempt: ₹1,40,000</strong></li>
            <li>Tax saved at 20% slab: ₹28,000</li>
          </ul>
          <p>
            <strong>Important:</strong> You must actually pay rent and maintain rent receipts. If
            paying rent to parents, ensure they declare rental income in their ITR.
          </p>

          <h2>Step 4 — Section 80CCD(1B) NPS (Save up to ₹15,600)</h2>
          <p>
            Section 80CCD(1B) allows an additional deduction of ₹50,000 for contribution to
            National Pension System (NPS) — over and above the ₹1.5 lakh 80C limit.
          </p>
          <p>This is one of the most underutilized tax benefits in India.</p>
          <p>NPS benefits:</p>
          <ul>
            <li>Additional ₹50,000 deduction (separate from 80C)</li>
            <li>Tax-free returns during accumulation</li>
            <li>Government-regulated, low-cost fund management</li>
            <li>On maturity, 60% is tax-free withdrawal</li>
          </ul>
          <p>Tax saved at 20% slab: ₹50,000 × 20% = ₹10,000</p>
          <p>
            The only drawback: NPS is locked until age 60 (partial withdrawal allowed after 3 years
            for specific reasons).
          </p>

          <h2>Step 5 — Section 24(b) Home Loan Interest (Save up to ₹60,000)</h2>
          <p>
            If you have a home loan, you can claim deduction on interest paid up to ₹2,00,000 per
            year under Section 24(b).
          </p>
          <p>For a ₹40 lakh home loan at 8.75% for 20 years:</p>
          <ul>
            <li>Monthly EMI: approximately ₹35,240</li>
            <li>Interest in first year: approximately ₹3,47,000</li>
            <li>Deduction allowed: ₹2,00,000 (capped)</li>
            <li>Tax saved at 20% slab: ₹40,000</li>
            <li>Tax saved at 30% slab: ₹60,000</li>
          </ul>
          <p>
            <strong>Note:</strong> This deduction is available under both old and new regime for
            let-out properties. For self-occupied property, it is available only under old regime.
          </p>

          <h2>Old Regime vs New Regime for ₹10 Lakh Salary</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Deduction</th>
                  <th>Amount</th>
                  <th>Old Regime</th>
                  <th>New Regime</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Standard deduction</td>
                  <td>₹50,000 / ₹75,000</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Section 80C</td>
                  <td>₹1,50,000</td>
                  <td>✓</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td>Section 80D</td>
                  <td>₹25,000</td>
                  <td>✓</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td>HRA exemption</td>
                  <td>₹1,40,000</td>
                  <td>✓</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td>NPS 80CCD(1B)</td>
                  <td>₹50,000</td>
                  <td>✓</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td>Home loan interest</td>
                  <td>₹2,00,000</td>
                  <td>✓</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td><strong>Total deductions</strong></td>
                  <td><strong>₹5,65,000</strong></td>
                  <td><strong>✓</strong></td>
                  <td><strong>✗</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Old regime with all deductions:</strong>
          </p>
          <ul>
            <li>Gross income: ₹10,00,000</li>
            <li>Total deductions: ₹5,65,000</li>
            <li>Taxable income: ₹4,35,000</li>
            <li>Tax: ₹9,250 (5% on ₹1,85,000)</li>
            <li>Add 4% cess: ₹370</li>
            <li><strong>Total tax: ₹9,620</strong></li>
          </ul>
          <p>
            <strong>New regime (no deductions except standard): Total tax: ₹44,200</strong>
          </p>
          <p>
            <strong>Savings with old regime: ₹34,580</strong>
          </p>
          <p>
            Conclusion: If you can claim all these deductions, old regime saves significantly more
            for a ₹10 lakh salary.
          </p>

          <h2>Complete Tax Saving Summary for ₹10 Lakh Salary</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Strategy</th>
                  <th>Deduction</th>
                  <th>Tax Saved (20% slab)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Section 80C (EPF + PPF + ELSS)</td>
                  <td>₹1,50,000</td>
                  <td>₹30,000</td>
                </tr>
                <tr>
                  <td>Section 80D (Health insurance)</td>
                  <td>₹25,000</td>
                  <td>₹5,000</td>
                </tr>
                <tr>
                  <td>HRA exemption</td>
                  <td>₹1,40,000</td>
                  <td>₹28,000</td>
                </tr>
                <tr>
                  <td>NPS Section 80CCD(1B)</td>
                  <td>₹50,000</td>
                  <td>₹10,000</td>
                </tr>
                <tr>
                  <td>Home loan interest 24(b)</td>
                  <td>₹2,00,000</td>
                  <td>₹40,000</td>
                </tr>
                <tr>
                  <td>Standard deduction</td>
                  <td>₹50,000</td>
                  <td>₹10,000</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>₹6,15,000</strong></td>
                  <td><strong>₹1,23,000</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            With proper planning, a ₹10 lakh salary earner can reduce tax liability from ₹1,06,600
            to under ₹10,000 — saving over ₹96,000 per year. That is money better invested in your
            future.
          </p>

          <h2>3 Quick Wins You Can Do Right Now</h2>
          <ol>
            <li>
              <strong>Check your EPF contribution</strong> — Log into your EPFO account and confirm
              your employer is depositing your PF. This is your easiest 80C deduction with zero
              extra effort.
            </li>
            <li>
              <strong>Buy health insurance if you do not have one</strong> — A basic family floater
              policy of ₹10 lakh cover costs just ₹8,000–₹15,000 per year and gives you ₹25,000 in
              tax deduction plus actual health protection.
            </li>
            <li>
              <strong>Open a PPF account</strong> — If you have not used your full ₹1.5 lakh 80C
              limit, invest the remaining amount in PPF before March 31. You can open a PPF account
              online through SBI, PNB, or India Post.
            </li>
          </ol>

          <h2>Calculate Your Exact Tax Now</h2>
          <p>
            Use our free Income Tax Calculator to see exactly how much tax you owe under both
            regimes and find your best option.
          </p>
          <ul>
            <li>
              <Link
                href="/calculators/income-tax-calculator"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                Use our Income Tax Calculator →
              </Link>
            </li>
            <li>
              <Link
                href="/calculators/hra-calculator"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                Use our HRA Calculator →
              </Link>
            </li>
            <li>
              <Link
                href="/calculators/ppf-calculator"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                Use our PPF Calculator →
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
