import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, ArrowRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";

export const metadata: Metadata = {
  title: "Income Tax for Freelancers in India 2024-25 — Complete Guide | SNSM Tools",
  description:
    "Complete income tax guide for freelancers in India. Learn about ITR-4, presumptive taxation, GST registration, allowable deductions and how to file taxes as a freelancer.",
  alternates: { canonical: "https://snsmtools.in/blog/income-tax-freelancers-india" },
  openGraph: {
    title: "Income Tax for Freelancers in India 2024-25 — Complete Guide",
    description: "Complete tax guide for Indian freelancers and self-employed",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Income Tax for Freelancers in India 2024-25 — Complete Guide",
  author: { "@type": "Organization", name: "SNSM Tools" },
  publisher: { "@type": "Organization", name: "SNSM Tools" },
  datePublished: "2025-05-21",
  url: "https://snsmtools.in/blog/income-tax-freelancers-india",
};

const relatedTools = [
  {
    name: "Income Tax Calculator",
    href: "/calculators/income-tax-calculator",
    desc: "Estimate your freelance tax under old and new regime",
  },
  {
    name: "GST Calculator",
    href: "/calculators/gst-calculator",
    desc: "Calculate GST on your freelance invoices instantly",
  },
  {
    name: "SIP Calculator",
    href: "/calculators/sip-calculator",
    desc: "Invest your tax savings in SIP for long-term wealth",
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

export default function IncomeTaxFreelancersPage() {
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
          <span className="text-gray-900 dark:text-white">Income Tax for Freelancers India</span>
        </nav>

        {/* Article header */}
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full px-3 py-1 text-xs font-semibold bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300">
              Tax Planning
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="h-3 w-3" /> 10 min read
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar className="h-3 w-3" /> May 2025
            </span>
            <span className="text-xs text-gray-400">By SNSM Tools</span>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
            Income Tax for Freelancers in India 2024-25 — Complete Guide
          </h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            Which ITR to file, how Section 44ADA cuts your tax in half, advance tax deadlines, GST
            requirements, and every deduction available to Indian freelancers.
          </p>
        </header>

        {/* Top ad */}
        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        {/* Article — Part 1: Intro + Required? + ITR Form + 44ADA */}
        <article className={articleClasses}>
          <p>
            Freelancing in India has exploded in the last few years. From software developers and
            designers to writers, consultants, and YouTubers — millions of Indians now earn income
            outside traditional employment. But with freelance income comes a responsibility that
            many overlook: paying income tax correctly.
          </p>
          <p>
            Unlike salaried employees whose tax is deducted at source by employers, freelancers must
            calculate and pay their own taxes. This guide explains everything a freelancer in India
            needs to know about income tax for FY 2024-25 — from which ITR to file, to how much tax
            to pay, to every deduction you can legally claim.
          </p>

          <h2>Are Freelancers Required to Pay Income Tax?</h2>
          <p>
            Yes — absolutely. Any income earned in India above the basic exemption limit is taxable,
            regardless of whether you are salaried, self-employed, or a freelancer.
          </p>
          <p>Freelance income is classified as:</p>
          <ul>
            <li>
              <strong>Profession income:</strong> For doctors, lawyers, architects, engineers,
              consultants, designers, writers, programmers
            </li>
            <li>
              <strong>Business income:</strong> For traders, commission agents, and other business
              activities
            </li>
          </ul>
          <p>
            Both are taxed under the head{" "}
            <strong>&apos;Profits and Gains from Business or Profession&apos; (PGBP)</strong>.
          </p>
          <p>
            <strong>Basic exemption limits for FY 2024-25:</strong>
          </p>
          <ul>
            <li>
              New regime: ₹3,00,000 (rebate under 87A makes it effectively ₹7,00,000)
            </li>
            <li>
              Old regime: ₹2,50,000 (₹3,00,000 for senior citizens)
            </li>
          </ul>
          <p>If your freelance income exceeds these limits, you must file an ITR.</p>

          <h2>Which ITR Form Should Freelancers File?</h2>
          <p>
            Choosing the right ITR form is crucial. Filing the wrong form can result in a defective
            return notice from the Income Tax Department.
          </p>
          <p>
            <strong>ITR-4 (Sugam) — For most freelancers:</strong> Use ITR-4 if your freelance
            income is up to ₹2 crore and you opt for presumptive taxation under Section 44ADA. This
            is the simplest form — minimal bookkeeping required.
          </p>
          <p>
            <strong>ITR-3 — For higher income freelancers:</strong> Use ITR-3 if your freelance
            income exceeds ₹2 crore, or if you want to claim actual expenses instead of presumptive
            taxation. Requires maintaining detailed books of accounts.
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Condition</th>
                  <th>Use This ITR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Freelance income below ₹75 lakh, opt presumptive</td>
                  <td>ITR-4</td>
                </tr>
                <tr>
                  <td>Freelance income ₹75 lakh to ₹2 crore, opt presumptive</td>
                  <td>ITR-4</td>
                </tr>
                <tr>
                  <td>Freelance income above ₹2 crore</td>
                  <td>ITR-3</td>
                </tr>
                <tr>
                  <td>Want to claim actual expenses</td>
                  <td>ITR-3</td>
                </tr>
                <tr>
                  <td>Have capital gains also</td>
                  <td>ITR-3</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Presumptive Taxation — Section 44ADA (The Easiest Option)</h2>
          <p>
            Section 44ADA is a game-changer for freelancers. It was introduced specifically for
            professionals to simplify tax compliance.
          </p>
          <p>
            <strong>Who can use Section 44ADA:</strong> Resident individuals and HUFs engaged in
            specified professions:
          </p>
          <ul>
            <li>Software developers and IT professionals</li>
            <li>Graphic designers and creative professionals</li>
            <li>Writers, journalists, and content creators</li>
            <li>Doctors (clinical practice)</li>
            <li>Lawyers and legal consultants</li>
            <li>Architects and engineers</li>
            <li>Accountants and financial consultants</li>
            <li>Technical consultants</li>
          </ul>
          <p>
            <strong>How it works:</strong> Under Section 44ADA, you declare 50% of your gross
            receipts as profit — automatically. The remaining 50% is assumed to be your expenses.
            You do not need to prove or document actual expenses.
          </p>
          <p>
            <strong>Example:</strong>
          </p>
          <ul>
            <li>Freelance income: ₹10,00,000</li>
            <li>Presumptive profit (50%): ₹5,00,000</li>
            <li>Taxable income: ₹5,00,000</li>
            <li>Tax (new regime): approximately ₹20,000 (after rebate)</li>
          </ul>
          <p>No bookkeeping required. No expense bills needed. Just your total receipts.</p>
          <p>
            <strong>Important change from FY 2024-25:</strong> The presumptive taxation limit under
            44ADA has been increased to ₹75 lakh (from ₹50 lakh earlier) — provided that cash
            receipts do not exceed 5% of total receipts. This means more freelancers can now use
            this simplified scheme.
          </p>
        </article>

        {/* Mid-article ad — after 3rd section */}
        <div className="my-10 flex justify-center">
          <AdSlot size="rectangle" />
        </div>

        {/* Article — Part 2: Tax slabs + Deductions + Advance Tax + GST + TDS + Filing steps + CTA */}
        <div className={articleClasses}>
          <h2>Tax Slabs for Freelancers FY 2024-25</h2>
          <p>Freelancers are taxed at the same slab rates as salaried individuals.</p>
          <p>
            <strong>New Tax Regime (recommended for most freelancers):</strong>
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Income Slab</th>
                  <th>Tax Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Up to ₹3,00,000</td><td>NIL</td></tr>
                <tr><td>₹3,00,001 to ₹7,00,000</td><td>5%</td></tr>
                <tr><td>₹7,00,001 to ₹10,00,000</td><td>10%</td></tr>
                <tr><td>₹10,00,001 to ₹12,00,000</td><td>15%</td></tr>
                <tr><td>₹12,00,001 to ₹15,00,000</td><td>20%</td></tr>
                <tr><td>Above ₹15,00,000</td><td>30%</td></tr>
              </tbody>
            </table>
          </div>
          <p>Add 4% Health and Education Cess on total tax.</p>
          <p>
            <strong>Rebate under Section 87A:</strong> If taxable income is up to ₹7,00,000 under
            new regime, full tax rebate is available — meaning zero tax.
          </p>
          <p>
            <strong>Note:</strong> Freelancers cannot claim standard deduction of ₹75,000 under
            new regime — that is only for salaried employees. However, presumptive taxation under
            44ADA effectively gives a 50% deduction.
          </p>

          <h2>Deductions Available to Freelancers</h2>
          <p>
            Under the old tax regime with actual expense method (ITR-3):
          </p>
          <p>
            <strong>Business expenses you can deduct:</strong>
          </p>
          <ul>
            <li>Office rent and utilities</li>
            <li>Internet and mobile bills (100% if used for work)</li>
            <li>Laptop, computer, and equipment (depreciation)</li>
            <li>Software subscriptions and tools</li>
            <li>Professional courses and certifications</li>
            <li>Books, journals, and subscriptions</li>
            <li>Travel expenses for client meetings</li>
            <li>Co-working space membership</li>
            <li>Professional fees paid to sub-contractors</li>
            <li>Bank charges and payment gateway fees</li>
          </ul>
          <p>
            <strong>Section 80C deductions (old regime):</strong>
          </p>
          <ul>
            <li>PPF contribution: Up to ₹1,50,000</li>
            <li>Life insurance premium</li>
            <li>ELSS mutual funds</li>
            <li>EPF (if you have it)</li>
          </ul>
          <ul>
            <li>
              <strong>Section 80D:</strong> Health insurance premium up to ₹25,000
            </li>
            <li>
              <strong>NPS Section 80CCD(1B):</strong> Additional ₹50,000 deduction for NPS
              contribution
            </li>
          </ul>
          <p>
            <strong>Pro tip:</strong> If your actual expenses are less than 50% of income, use
            Section 44ADA presumptive method. If expenses exceed 50%, use actual expense method
            with ITR-3.
          </p>

          <h2>Advance Tax — Pay Tax Quarterly</h2>
          <p>
            This is the most common compliance mistake freelancers make. If your total tax liability
            exceeds ₹10,000 in a year, you must pay advance tax in four instalments.
          </p>
          <p>
            <strong>Advance tax schedule:</strong>
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Due Date</th>
                  <th>Percentage to Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15th June</td>
                  <td>15% of estimated annual tax</td>
                </tr>
                <tr>
                  <td>15th September</td>
                  <td>45% of estimated annual tax</td>
                </tr>
                <tr>
                  <td>15th December</td>
                  <td>75% of estimated annual tax</td>
                </tr>
                <tr>
                  <td>15th March</td>
                  <td>100% of estimated annual tax</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Penalty for not paying advance tax:</strong> If you miss advance tax payments,
            you pay interest at 1% per month under Section 234B and 234C. On ₹50,000 tax liability,
            this can add ₹3,000–₹6,000 in interest.
          </p>
          <p>
            <strong>How to pay advance tax:</strong> Go to incometax.gov.in → e-Pay Tax → Select
            Challan 280 → Select Advance Tax → Pay online via net banking or UPI.
          </p>

          <h2>GST for Freelancers — When is it Required?</h2>
          <p>GST registration is mandatory for freelancers if:</p>
          <ol>
            <li>
              Annual turnover exceeds ₹20 lakh (₹10 lakh for special category states)
            </li>
            <li>
              You provide services to clients outside India (export of services) — mandatory
              regardless of turnover, but you can claim GST refund
            </li>
          </ol>
          <p>
            <strong>GST rate for most freelance services: 18%</strong>
          </p>
          <p>
            <strong>If registered for GST:</strong>
          </p>
          <ul>
            <li>Charge 18% GST on your invoices</li>
            <li>File GSTR-1 monthly or quarterly</li>
            <li>File GSTR-3B monthly</li>
            <li>Can claim input tax credit on business purchases</li>
          </ul>
          <p>
            <strong>If not registered:</strong>
          </p>
          <ul>
            <li>Do not charge GST on invoices</li>
            <li>Cannot claim input tax credit</li>
            <li>
              Simply mention &apos;GST not applicable — turnover below threshold&apos;
            </li>
          </ul>
          <p>
            <strong>For freelancers working with international clients:</strong> Services exported
            outside India are zero-rated under GST. You do not charge GST to foreign clients. You
            can apply for GST registration and claim refund of GST paid on your business inputs.
          </p>

          <h2>TDS — When Clients Deduct Tax</h2>
          <p>
            If your client is a company or firm, they will deduct TDS from your payment under
            Section 194J at 10% (for professional services).
          </p>
          <p>
            <strong>Example:</strong>
          </p>
          <ul>
            <li>Your invoice: ₹1,00,000</li>
            <li>TDS deducted by client (10%): ₹10,000</li>
            <li>Payment received: ₹90,000</li>
          </ul>
          <p>
            The ₹10,000 TDS is deposited with the government in your name. You can claim it as
            advance tax paid when filing your ITR.
          </p>
          <p>
            Always check Form 26AS on incometax.gov.in to verify all TDS deducted by your clients
            is reflecting correctly. If TDS is not reflecting, follow up with the client to deposit
            it.
          </p>

          <h2>Step-by-Step Tax Filing Process for Freelancers</h2>
          <ol>
            <li>
              <strong>Calculate total freelance income for the year (April to March)</strong> — Add
              all payments received from all clients.
            </li>
            <li>
              <strong>Deduct presumptive expense (if using 44ADA)</strong> — Taxable income = 50%
              of total receipts.
            </li>
            <li>
              <strong>Add other income</strong> — Add interest income, rental income, and any other
              income.
            </li>
            <li>
              <strong>Apply deductions (old regime only)</strong> — 80C, 80D, NPS etc.
            </li>
            <li>
              <strong>Calculate tax as per applicable slab</strong> — Use our Income Tax Calculator
              for accurate calculation.
            </li>
            <li>
              <strong>Subtract TDS already deducted</strong> — Check Form 26AS for TDS credits.
            </li>
            <li>
              <strong>Pay remaining tax</strong> — Pay self-assessment tax via Challan 280 before
              filing ITR.
            </li>
            <li>
              <strong>File ITR</strong> — File ITR-4 on incometax.gov.in before July 31.
            </li>
          </ol>

          <h2>Calculate Your Tax Now</h2>
          <p>
            Use our free Income Tax Calculator to estimate your tax liability as a freelancer under
            both old and new regimes.
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
                href="/calculators/gst-calculator"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                Use our GST Calculator →
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
