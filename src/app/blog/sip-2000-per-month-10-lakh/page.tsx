import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, ArrowRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";

export const metadata: Metadata = {
  title: "How ₹2000 SIP Per Month Becomes ₹10 Lakh — Real Calculation | SNSM Tools",
  description:
    "See exactly how a monthly SIP of ₹2000 grows to ₹10 lakh and beyond. Real calculations with different return rates and time periods. Start SIP with just ₹500 per month.",
  alternates: { canonical: "https://snsmtools.in/blog/sip-2000-per-month-10-lakh" },
  openGraph: {
    title: "How ₹2000 SIP Per Month Becomes ₹10 Lakh — Real Calculation",
    description: "Real SIP growth calculations for Indian investors starting small",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How ₹2000 SIP Per Month Becomes ₹10 Lakh — Real Calculation",
  author: { "@type": "Organization", name: "SNSM Tools" },
  publisher: { "@type": "Organization", name: "SNSM Tools" },
  datePublished: "2025-05-21",
  url: "https://snsmtools.in/blog/sip-2000-per-month-10-lakh",
};

const relatedTools = [
  {
    name: "SIP Calculator",
    href: "/calculators/sip-calculator",
    desc: "See exactly how your monthly SIP grows over time",
  },
  {
    name: "PPF Calculator",
    href: "/calculators/ppf-calculator",
    desc: "Compare SIP returns vs PPF over 15 years",
  },
  {
    name: "FD Calculator",
    href: "/calculators/fd-calculator",
    desc: "Compare SIP returns vs fixed deposit maturity",
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

export default function SIP2000PerMonthPage() {
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
          <span className="text-gray-900 dark:text-white">SIP ₹2000 Per Month</span>
        </nav>

        {/* Article header */}
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full px-3 py-1 text-xs font-semibold bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300">
              Investments
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
            How ₹2000 SIP Per Month Becomes ₹10 Lakh — Real Numbers
          </h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            Real calculations showing exactly how ₹2,000 per month grows over 5, 10, 15, 20, and
            25 years — with step-up SIP strategy, fund comparisons, and a step-by-step guide to
            start today.
          </p>
        </header>

        {/* Top ad */}
        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        {/* Article — Part 1: Intro + Math + Growth Table + When ₹10L */}
        <article className={articleClasses}>
          <p>
            Many Indians believe investing is only for the wealthy. The reality is very different.
            With just ₹2,000 per month — less than what most people spend on eating out — you can
            build significant wealth over time through the power of SIP (Systematic Investment Plan)
            in mutual funds.
          </p>
          <p>
            In this article we show you the real numbers — exactly how ₹2,000 per month grows over
            5, 10, 15, 20, and 25 years at different return rates. No jargon, no complicated
            formulas — just clear numbers that will motivate you to start today.
          </p>

          <h2>The Simple Math Behind SIP Growth</h2>
          <p>SIP works through two powerful forces working together:</p>
          <ol>
            <li>
              <strong>Compound interest</strong> — your returns earn returns
            </li>
            <li>
              <strong>Rupee cost averaging</strong> — you buy more units when markets fall
            </li>
          </ol>
          <p>
            When you invest ₹2,000 every month, each instalment earns returns for the remaining
            investment period. The first ₹2,000 you invest earns returns for the entire duration.
            The last ₹2,000 earns returns for just one month. The magic is in the compounding of
            all these instalments together.
          </p>
          <p>
            <strong>At 12% annual return:</strong>
          </p>
          <ul>
            <li>Month 1 investment of ₹2,000 invested for 10 years grows to: ₹6,212</li>
            <li>Month 60 investment of ₹2,000 invested for 5 years grows to: ₹3,524</li>
            <li>Month 120 investment of ₹2,000 invested for 0 years: ₹2,000</li>
          </ul>
          <p>The total of all these growing instalments is your SIP maturity value.</p>

          <h2>₹2000 SIP — Complete Growth Table</h2>
          <p>Here is exactly how ₹2,000 per month SIP grows:</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Duration</th>
                  <th>Total Invested</th>
                  <th>At 10% Returns</th>
                  <th>At 12% Returns</th>
                  <th>At 15% Returns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5 years</td>
                  <td>₹1,20,000</td>
                  <td>₹1,54,882</td>
                  <td>₹1,63,754</td>
                  <td>₹1,79,546</td>
                </tr>
                <tr>
                  <td>10 years</td>
                  <td>₹2,40,000</td>
                  <td>₹4,09,836</td>
                  <td>₹4,64,615</td>
                  <td>₹5,59,958</td>
                </tr>
                <tr>
                  <td>15 years</td>
                  <td>₹3,60,000</td>
                  <td>₹8,32,462</td>
                  <td>₹10,11,596</td>
                  <td>₹13,37,724</td>
                </tr>
                <tr>
                  <td>20 years</td>
                  <td>₹4,80,000</td>
                  <td>₹15,19,592</td>
                  <td>₹19,83,194</td>
                  <td>₹28,75,060</td>
                </tr>
                <tr>
                  <td>25 years</td>
                  <td>₹6,00,000</td>
                  <td>₹26,53,073</td>
                  <td>₹37,39,982</td>
                  <td>₹60,24,584</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Key takeaways:</strong>
          </p>
          <ul>
            <li>
              ₹2,000/month for 15 years at 12% crosses ₹10 lakh — investing only ₹3.6 lakh
            </li>
            <li>
              ₹2,000/month for 25 years at 12% reaches ₹37 lakh — investing only ₹6 lakh
            </li>
            <li>The longer you stay invested the more dramatic the growth becomes</li>
          </ul>

          <h2>When Does ₹2000 SIP Cross ₹10 Lakh?</h2>
          <p>The answer depends on the return rate:</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Expected Return</th>
                  <th>Years to Reach ₹10 Lakh</th>
                  <th>Total Invested</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10% per annum</td>
                  <td>17.5 years</td>
                  <td>₹4,20,000</td>
                </tr>
                <tr>
                  <td>12% per annum</td>
                  <td>15.5 years</td>
                  <td>₹3,72,000</td>
                </tr>
                <tr>
                  <td>14% per annum</td>
                  <td>14 years</td>
                  <td>₹3,36,000</td>
                </tr>
                <tr>
                  <td>15% per annum</td>
                  <td>13.5 years</td>
                  <td>₹3,24,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            At 12% — a reasonable expectation from a diversified equity mutual fund — your ₹2,000
            monthly SIP crosses ₹10 lakh in about 15.5 years while you invest only ₹3.72 lakh. The
            remaining ₹6.28 lakh is pure returns from compounding.
          </p>
        </article>

        {/* Mid-article ad — after 3rd section */}
        <div className="my-10 flex justify-center">
          <AdSlot size="rectangle" />
        </div>

        {/* Article — Part 2: Step-up SIP + Comparison + Funds + Mistakes + How to Start + CTA */}
        <div className={articleClasses}>
          <h2>What if You Increase SIP by 10% Every Year?</h2>
          <p>
            A step-up SIP where you increase your monthly investment by 10% every year dramatically
            accelerates wealth creation.
          </p>
          <ul>
            <li>Starting SIP: ₹2,000/month</li>
            <li>Annual step-up: 10%</li>
            <li>Return: 12% per annum</li>
          </ul>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Monthly SIP</th>
                  <th>Year-end Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Year 1</td><td>₹2,000</td><td>₹25,360</td></tr>
                <tr><td>Year 3</td><td>₹2,420</td><td>₹98,540</td></tr>
                <tr><td>Year 5</td><td>₹2,928</td><td>₹2,28,430</td></tr>
                <tr><td>Year 10</td><td>₹4,711</td><td>₹9,87,650</td></tr>
                <tr><td>Year 15</td><td>₹7,577</td><td>₹28,64,210</td></tr>
                <tr><td>Year 20</td><td>₹12,189</td><td>₹72,45,890</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            With just a 10% annual increase — matching your typical salary increment — your ₹2,000
            SIP reaches ₹72 lakh in 20 years instead of ₹19.8 lakh with a flat SIP.
          </p>
          <p>
            This is the single most powerful SIP strategy available to salaried Indians.
          </p>

          <h2>Comparing SIP with Other Options for ₹2000/Month</h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>₹2000/month for 15 years</th>
                  <th>Total Invested</th>
                  <th>Returns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SIP at 12%</td>
                  <td><strong>₹10,11,596</strong></td>
                  <td>₹3,60,000</td>
                  <td>₹6,51,596</td>
                </tr>
                <tr>
                  <td>PPF at 7.1%</td>
                  <td>₹6,35,170</td>
                  <td>₹3,60,000</td>
                  <td>₹2,75,170</td>
                </tr>
                <tr>
                  <td>FD at 7.5%</td>
                  <td>₹6,44,320</td>
                  <td>₹3,60,000</td>
                  <td>₹2,84,320</td>
                </tr>
                <tr>
                  <td>Savings account 3.5%</td>
                  <td>₹4,45,820</td>
                  <td>₹3,60,000</td>
                  <td>₹85,820</td>
                </tr>
                <tr>
                  <td>Under mattress (0%)</td>
                  <td>₹3,60,000</td>
                  <td>₹3,60,000</td>
                  <td>₹0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            SIP at 12% gives nearly 2.4 times more returns than PPF and FD over 15 years. The
            difference is entirely due to the power of equity compounding over long periods.
          </p>

          <h2>Best Mutual Funds for ₹2000 SIP in 2025</h2>
          <p>
            For a beginner starting with ₹2,000 per month, these categories are ideal:
          </p>
          <ol>
            <li>
              <strong>Large Cap Index Funds (Lowest risk, market returns)</strong>
              <br />
              Examples: Nifty 50 Index Fund, Sensex Index Fund. Expected return: 10–12% long term.
              Tracks the top 50 Indian companies. Low expense ratio. Consistent performance.
            </li>
            <li>
              <strong>Flexi Cap Funds (Balanced risk, good returns)</strong>
              <br />
              Examples: Parag Parikh Flexi Cap, HDFC Flexi Cap. Expected return: 12–14% long term.
              Fund manager invests across large, mid, and small cap as per market conditions.
            </li>
            <li>
              <strong>ELSS Funds (Tax saving under 80C)</strong>
              <br />
              Examples: Mirae Asset ELSS, Axis Long Term Equity. Expected return: 12–15% long term.
              Qualifies for Section 80C deduction. 3-year lock-in. Best of both — tax saving and
              wealth creation.
            </li>
          </ol>
          <p>
            <strong>Simple 2-fund portfolio for ₹2,000/month:</strong>
          </p>
          <ul>
            <li>₹1,000 → Nifty 50 Index Fund (safety)</li>
            <li>₹1,000 → ELSS Fund (tax saving)</li>
          </ul>
          <p>As income grows, increase each SIP proportionally.</p>

          <h2>Common SIP Mistakes to Avoid</h2>
          <ol>
            <li>
              <strong>Stopping SIP when markets fall</strong> — This is the biggest mistake. Market
              corrections are actually good for SIP investors — you buy more units at lower prices.
              Stopping SIP during a crash locks in your losses and you miss the recovery.
            </li>
            <li>
              <strong>Starting too late</strong> — Every year you delay costs you significantly.
              ₹2,000 SIP started at age 25 grows to ₹1.98 crore by age 60 (at 12%, 35 years). The
              same SIP started at 35 grows to only ₹64 lakh by age 60 (25 years). Starting 10 years
              later costs you ₹1.34 crore.
            </li>
            <li>
              <strong>Checking portfolio value daily</strong> — SIP is a long-term instrument.
              Checking daily creates anxiety and temptation to exit. Check quarterly at most.
            </li>
            <li>
              <strong>Investing in too many funds</strong> — 5–6 SIPs in different funds does not
              give better diversification — it just creates confusion. 2–3 well-chosen funds are
              enough.
            </li>
            <li>
              <strong>Not increasing SIP when income grows</strong> — Many people keep the same
              ₹2,000 SIP for 10 years despite salary doubling. Increase SIP with every salary hike
              — even by ₹500.
            </li>
          </ol>

          <h2>How to Start Your ₹2000 SIP Today</h2>
          <p>Starting a SIP takes less than 10 minutes:</p>
          <ol>
            <li>
              <strong>Complete KYC</strong> — Go to any AMC website or Zerodha Coin, Groww, or
              Paytm Money app. Complete eKYC with Aadhaar and PAN.
            </li>
            <li>
              <strong>Choose your fund</strong> — For beginners: start with a Nifty 50 Index Fund
              from any major AMC. HDFC Nifty 50 Index Fund, SBI Nifty Index Fund, UTI Nifty 50
              Index Fund — all are good.
            </li>
            <li>
              <strong>Set up SIP</strong> — Choose amount: ₹2,000. Choose date: 1st or 5th of
              month (right after salary credit). Choose duration: Perpetual (never stop).
            </li>
            <li>
              <strong>Link bank account</strong> — Give NACH mandate or use UPI auto-pay. Money
              gets auto-debited every month.
            </li>
            <li>
              <strong>Forget and let it grow</strong> — Set a calendar reminder to review once
              every 6 months. Do not panic during market downturns.
            </li>
          </ol>

          <h2>Calculate Your SIP Returns</h2>
          <p>
            Use our free SIP Calculator to see exactly how your monthly investment will grow at
            different return rates and time periods.
          </p>
          <ul>
            <li>
              <Link
                href="/calculators/sip-calculator"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                Use our SIP Calculator →
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
