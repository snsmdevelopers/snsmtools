import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, ArrowRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";

// ── Article data ──────────────────────────────────────────────────────────────

interface RelatedTool {
  name: string;
  href: string;
  desc: string;
}

interface ArticleMeta {
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishDate: string;
  related: RelatedTool[];
}

const articleMeta: Record<string, ArticleMeta> = {
  "how-to-calculate-emi-home-loan": {
    title: "How to Calculate EMI for Home Loan in India (2025 Guide)",
    description:
      "Learn how banks calculate EMI for home loans, the EMI formula explained with a worked example, and proven tips to reduce your monthly loan burden.",
    category: "Loans",
    readTime: "5 min read",
    publishDate: "May 2025",
    related: [
      { name: "EMI Calculator", href: "/calculators/emi-calculator", desc: "Calculate monthly EMI with full amortization schedule" },
      { name: "HRA Calculator", href: "/calculators/hra-calculator", desc: "Claim HRA exemption while paying rent" },
    ],
  },
  "sip-vs-lump-sum-investment": {
    title: "SIP vs Lump Sum: Which Investment Strategy is Right for You?",
    description:
      "A complete comparison of SIP and lump sum mutual fund investment strategies — when to use each, rupee cost averaging explained, with a comparison table.",
    category: "Investments",
    readTime: "6 min read",
    publishDate: "May 2025",
    related: [
      { name: "SIP Calculator", href: "/calculators/sip-calculator", desc: "Estimate SIP returns with year-wise chart" },
      { name: "FD Calculator", href: "/calculators/fd-calculator", desc: "Compare FD maturity vs SIP returns" },
    ],
  },
  "new-vs-old-tax-regime-2024-25": {
    title: "New vs Old Tax Regime: Which Saves More Tax in FY 2024-25?",
    description:
      "Compare new and old income tax regime slabs for FY 2024-25 with worked examples at ₹6L, ₹10L, and ₹15L income levels. Find out which regime saves you more.",
    category: "Taxes",
    readTime: "7 min read",
    publishDate: "May 2025",
    related: [
      { name: "Income Tax Calculator", href: "/calculators/income-tax-calculator", desc: "Compare both regimes instantly for your income" },
      { name: "HRA Calculator", href: "/calculators/hra-calculator", desc: "Calculate HRA exemption under old regime" },
    ],
  },
};

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(articleMeta).map((slug) => ({ slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = articleMeta[slug];
  if (!meta) return {};
  return {
    title: `${meta.title} | SNSM Tools`,
    description: meta.description,
    alternates: { canonical: `https://snsmtools.in/blog/${slug}` },
  };
}

// ── Article content components ────────────────────────────────────────────────

function Article1() {
  return (
    <div className="prose-content">
      <h2>What is EMI?</h2>
      <p>
        EMI stands for <strong>Equated Monthly Instalment</strong> — a fixed payment amount that a
        borrower makes to a lender on a specified date every month. Each EMI payment covers both the
        interest charged for that month and a portion of the principal loan amount. Over the full
        loan tenure, all your EMI payments together repay the entire principal plus all accrued interest.
      </p>
      <p>
        Unlike simple interest loans where you pay interest separately, EMI combines principal repayment
        and interest into a single predictable monthly amount. This makes budgeting easier because you
        know exactly how much you need to set aside each month throughout the loan period. Indian banks
        and housing finance companies (HFCs) universally use the EMI structure for home loans.
      </p>

      <h2>The EMI Formula</h2>
      <p>
        The formula used by all Indian banks to calculate EMI follows the reducing-balance compound
        interest method:
      </p>
      <div className="formula-box">
        <p className="font-mono text-base">EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)</p>
      </div>
      <p>Where:</p>
      <ul>
        <li><strong>P</strong> = Principal loan amount (₹)</li>
        <li><strong>r</strong> = Monthly interest rate = Annual rate ÷ 12 ÷ 100</li>
        <li><strong>n</strong> = Loan tenure in months</li>
      </ul>
      <p><strong>Worked example:</strong></p>
      <ul>
        <li>Loan amount (P): ₹50,00,000</li>
        <li>Annual interest rate: 8.5% → monthly rate r = 8.5 ÷ 12 ÷ 100 = 0.007083</li>
        <li>Tenure: 20 years = 240 months (n = 240)</li>
        <li>EMI = 50,00,000 × 0.007083 × (1.007083)²⁴⁰ ÷ ((1.007083)²⁴⁰ − 1)</li>
        <li><strong>EMI ≈ ₹43,391 per month</strong></li>
        <li>Total repayment = ₹43,391 × 240 = ₹1,04,13,840</li>
        <li>Total interest paid = ₹1,04,13,840 − ₹50,00,000 = ₹54,13,840</li>
      </ul>

      <h2>Factors That Affect Your Home Loan EMI</h2>
      <ul>
        <li>
          <strong>Principal amount:</strong> A higher loan amount directly increases EMI. A larger
          down payment reduces the principal and therefore the monthly burden.
        </li>
        <li>
          <strong>Interest rate:</strong> Even a 0.5% difference in rate significantly changes EMI
          over a long tenure. Compare rates across banks before choosing.
        </li>
        <li>
          <strong>Loan tenure:</strong> A longer tenure lowers monthly EMI but increases total
          interest paid. A shorter tenure means higher EMI but lower total cost.
        </li>
        <li>
          <strong>Credit score:</strong> A CIBIL score above 750 qualifies you for lower interest
          rates, reducing your EMI. Scores below 650 may attract higher rates or rejection.
        </li>
        <li>
          <strong>Type of interest rate:</strong> Fixed-rate loans have constant EMI throughout the
          tenure. Floating-rate loans have EMI that changes when the RBI repo rate changes.
        </li>
      </ul>

      <h2>How to Reduce Your Home Loan EMI</h2>
      <p>
        Here are four practical ways to lower your monthly EMI:
      </p>
      <ol>
        <li>
          <strong>Make a larger down payment.</strong> Banks typically finance 80% of the property
          value. Paying 30–40% upfront significantly reduces the principal, cutting EMI proportionally.
        </li>
        <li>
          <strong>Negotiate a lower interest rate.</strong> Shop around — even 0.25% lower rate
          saves lakhs over 20 years. Use competing bank offers as leverage. Existing customers can
          request rate reviews when the RBI cuts the repo rate.
        </li>
        <li>
          <strong>Choose a longer tenure.</strong> Extending from 15 to 20 years can reduce EMI by
          ₹5,000–₹10,000 per month for a ₹50L loan. The trade-off is higher total interest.
        </li>
        <li>
          <strong>Make partial prepayments.</strong> Paying a lump sum (bonus, inheritance) directly
          reduces principal, which reduces future EMI or shortens the tenure — saving substantial
          interest.
        </li>
      </ol>

      <h2>EMI vs Rent — Which is Better?</h2>
      <p>
        The classic debate: is paying EMI for a home better than paying rent? Financially, if your
        EMI is close to your current rent, buying is often preferable because you are building equity
        in an asset that typically appreciates over time. Additionally, you can claim deductions under
        Section 80C (principal repayment up to ₹1.5L) and Section 24(b) (interest up to ₹2L per year).
      </p>
      <p>
        However, renting offers flexibility and keeps your capital liquid for investments. If property
        prices in your city are very high relative to rent (a high price-to-rent ratio), renting and
        investing the difference in equity mutual funds may generate better long-term wealth. The right
        choice depends on your city, life stage, and how long you plan to stay in one place.
      </p>

      <h2>Use Our Free EMI Calculator</h2>
      <p>
        Stop guessing — use our free EMI calculator to instantly compute your monthly instalment,
        total interest, and complete amortization schedule for any loan amount, interest rate, and
        tenure. Adjust the sliders to see how different combinations affect your EMI and plan your
        home loan confidently.
      </p>
    </div>
  );
}

function Article2() {
  return (
    <div className="prose-content">
      <h2>What is SIP?</h2>
      <p>
        A <strong>Systematic Investment Plan (SIP)</strong> allows you to invest a fixed amount in a
        mutual fund at regular intervals — typically monthly. Instead of investing a large sum all at
        once, you invest small amounts (even ₹500/month) automatically. SIP is the most popular way
        Indians invest in equity mutual funds because it requires discipline without timing the market.
      </p>
      <p>
        Over time, SIP benefits from <em>rupee cost averaging</em> (buying more units when markets
        fall and fewer when markets rise) and the power of compounding. A ₹5,000/month SIP at 12%
        CAGR for 20 years grows to approximately ₹49.9 lakh from a total investment of ₹12 lakh.
      </p>

      <h2>What is Lump Sum Investment?</h2>
      <p>
        A <strong>lump sum investment</strong> means deploying a large amount at once into a mutual
        fund. If you receive a year-end bonus, inheritance, or a maturity amount, you might invest it
        as a lump sum. The entire amount starts compounding from day one — which is advantageous when
        markets are at a low point. A ₹1,00,000 lump sum at 12% CAGR for 10 years grows to ₹3.1 lakh.
      </p>

      <h2>SIP vs Lump Sum — Key Differences</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Factor</th>
              <th>SIP</th>
              <th>Lump Sum</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Investment style</td><td>Regular, fixed amount</td><td>One-time, large amount</td></tr>
            <tr><td>Market timing risk</td><td>Low (averaged out)</td><td>High (depends on entry point)</td></tr>
            <tr><td>Capital required</td><td>Low (₹500+ per month)</td><td>High (large corpus needed)</td></tr>
            <tr><td>Discipline</td><td>Builds habit, auto-debit</td><td>Requires surplus capital</td></tr>
            <tr><td>Best market</td><td>Volatile or rising markets</td><td>Bear market / market lows</td></tr>
            <tr><td>Rupee cost avg.</td><td>Yes — automatic</td><td>No — fixed NAV at entry</td></tr>
            <tr><td>Return potential</td><td>Moderate (averaged)</td><td>Higher if timed well</td></tr>
          </tbody>
        </table>
      </div>

      <h2>When Should You Choose SIP?</h2>
      <ul>
        <li><strong>You have a regular monthly income</strong> and want to invest part of it automatically.</li>
        <li><strong>You are a salaried employee</strong> who cannot accumulate a large lump sum before starting.</li>
        <li><strong>Markets are at all-time highs</strong> — SIP reduces the risk of investing entirely at the peak.</li>
        <li><strong>You are new to mutual funds</strong> and want a low-risk, disciplined entry point.</li>
        <li><strong>You have a long investment horizon</strong> (10+ years) — compounding works best with time.</li>
      </ul>

      <h2>When Should You Choose Lump Sum?</h2>
      <ul>
        <li><strong>Markets are significantly below their peak</strong> — bear markets or corrections offer attractive entry.</li>
        <li><strong>You received a large windfall</strong> — bonus, maturity amount, or inheritance that needs to be deployed.</li>
        <li><strong>You have a short investment horizon</strong> (1–3 years) — a single investment is simpler to manage.</li>
        <li><strong>You are investing in debt mutual funds</strong> where market volatility is lower and timing matters less.</li>
      </ul>

      <h2>The Power of Rupee Cost Averaging in SIP</h2>
      <p>
        Rupee cost averaging is the key advantage of SIP. When NAV (Net Asset Value) falls, your
        fixed SIP amount buys <em>more units</em>. When NAV rises, it buys fewer units. Over time,
        the average cost per unit becomes lower than the average NAV during the period.
      </p>
      <p>
        <strong>Example:</strong> You invest ₹1,000/month for 3 months. If NAV is ₹50, ₹40, ₹60
        in the three months, you buy 20, 25, and 16.67 units respectively — total 61.67 units for
        ₹3,000, giving an average cost of ₹48.65 per unit. The simple average NAV was ₹50, but
        your average cost is lower — that&apos;s the benefit of rupee cost averaging.
      </p>

      <h2>Calculate Your SIP Returns Now</h2>
      <p>
        Use our free SIP calculator to see how your monthly investment grows over time with a
        year-wise chart and detailed table. Try different investment amounts, return rates, and
        tenures to plan your financial goals.
      </p>
    </div>
  );
}

function Article3() {
  return (
    <div className="prose-content">
      <h2>What Changed in FY 2024-25?</h2>
      <p>
        From FY 2024-25 (Assessment Year 2025-26), the <strong>new tax regime is the default</strong>
        — taxpayers must explicitly opt for the old regime. Budget 2024 enhanced the new regime with
        a higher standard deduction of <strong>₹75,000</strong> (up from ₹50,000) and revised slabs.
        The rebate under Section 87A means individuals with taxable income up to ₹7 lakh pay{" "}
        <strong>zero tax</strong> under the new regime.
      </p>

      <h2>New Tax Regime — Slabs and Rates (FY 2024-25)</h2>
      <p>Standard deduction: ₹75,000 (automatic, no declaration needed)</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr><th>Taxable Income (after ₹75K deduction)</th><th>Tax Rate</th></tr>
          </thead>
          <tbody>
            <tr><td>Up to ₹3,00,000</td><td>Nil</td></tr>
            <tr><td>₹3,00,001 – ₹7,00,000</td><td>5%</td></tr>
            <tr><td>₹7,00,001 – ₹10,00,000</td><td>10%</td></tr>
            <tr><td>₹10,00,001 – ₹12,00,000</td><td>15%</td></tr>
            <tr><td>₹12,00,001 – ₹15,00,000</td><td>20%</td></tr>
            <tr><td>Above ₹15,00,000</td><td>30%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        * 87A rebate: zero tax if taxable income (after ₹75K deduction) ≤ ₹7 lakh. Add 4% health &amp; education cess on computed tax.
      </p>

      <h2>Old Tax Regime — Slabs and Rates (FY 2024-25)</h2>
      <p>Allows deductions: 80C (₹1.5L), 80D (₹25K–₹50K), HRA, standard deduction ₹50K, etc.</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr><th>Taxable Income (after all deductions)</th><th>Tax Rate (Below 60)</th></tr>
          </thead>
          <tbody>
            <tr><td>Up to ₹2,50,000</td><td>Nil</td></tr>
            <tr><td>₹2,50,001 – ₹5,00,000</td><td>5%</td></tr>
            <tr><td>₹5,00,001 – ₹10,00,000</td><td>20%</td></tr>
            <tr><td>Above ₹10,00,000</td><td>30%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        * 87A rebate: zero tax if taxable income ≤ ₹5 lakh (old regime). Senior citizens (60–80): exemption up to ₹3L. Super senior (80+): up to ₹5L.
      </p>

      <h2>New Regime vs Old Regime — Side by Side Comparison</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr><th>Feature</th><th>New Regime</th><th>Old Regime</th></tr>
          </thead>
          <tbody>
            <tr><td>Standard deduction</td><td>₹75,000</td><td>₹50,000</td></tr>
            <tr><td>Section 80C (LIC, ELSS, PPF)</td><td>Not allowed</td><td>Up to ₹1,50,000</td></tr>
            <tr><td>Section 80D (health insurance)</td><td>Not allowed</td><td>Up to ₹25,000–₹50,000</td></tr>
            <tr><td>HRA exemption</td><td>Not allowed</td><td>Allowed (10(13A))</td></tr>
            <tr><td>Home loan interest (Sec 24)</td><td>Not allowed</td><td>Up to ₹2,00,000</td></tr>
            <tr><td>NPS (80CCD(1B))</td><td>Not allowed</td><td>Up to ₹50,000</td></tr>
            <tr><td>Default from FY 2024-25</td><td>Yes</td><td>Must opt in</td></tr>
            <tr><td>87A rebate limit</td><td>₹7,00,000</td><td>₹5,00,000</td></tr>
          </tbody>
        </table>
      </div>

      <h2>When is Old Regime Better?</h2>
      <p>Old regime saves more tax if your total eligible deductions are significant. Rule of thumb:</p>
      <ul>
        <li><strong>₹6L–₹10L income:</strong> Old regime wins if deductions exceed ~₹2L–₹2.5L</li>
        <li><strong>₹10L–₹15L income:</strong> Old regime wins if deductions exceed ~₹3L–₹3.5L</li>
        <li><strong>Above ₹15L income:</strong> Old regime wins if deductions exceed ~₹4L+</li>
        <li>High HRA (metro city renter with basic &gt; ₹50K/month) strongly favours old regime</li>
        <li>Home loan with ₹2L interest + 80C of ₹1.5L + 80D of ₹25K = ₹3.75L total deduction — old regime likely wins</li>
      </ul>

      <h2>When is New Regime Better?</h2>
      <ul>
        <li>Your deductions are less than ₹2L–₹3L per year (common for young earners, first jobs)</li>
        <li>You don&apos;t pay rent or have a home loan</li>
        <li>Income ≤ ₹7L → effectively zero tax after ₹75K standard deduction and 87A rebate</li>
        <li>You prefer simplicity — no need to track investments or save receipts</li>
        <li>You are self-employed or a freelancer without access to HRA or employer NPS</li>
      </ul>

      <h2>Examples for Different Income Levels</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Gross Income</th>
              <th>New Regime Tax</th>
              <th>Old Regime Tax*</th>
              <th>Better Option</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>₹6,00,000</td>
              <td>₹0 (87A rebate)</td>
              <td>₹23,400</td>
              <td><strong className="text-teal-700">New Regime</strong></td>
            </tr>
            <tr>
              <td>₹10,00,000</td>
              <td>₹44,200</td>
              <td>₹62,400*</td>
              <td><strong className="text-teal-700">New Regime</strong></td>
            </tr>
            <tr>
              <td>₹10,00,000</td>
              <td>₹44,200</td>
              <td>₹14,560**</td>
              <td><strong className="text-purple-700">Old Regime</strong></td>
            </tr>
            <tr>
              <td>₹15,00,000</td>
              <td>₹1,04,000</td>
              <td>₹1,56,000*</td>
              <td><strong className="text-teal-700">New Regime</strong></td>
            </tr>
            <tr>
              <td>₹15,00,000</td>
              <td>₹1,04,000</td>
              <td>₹62,400***</td>
              <td><strong className="text-purple-700">Old Regime</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        * No deductions (only ₹50K standard). ** With max deductions: 80C ₹1.5L + 80D ₹25K + HRA ₹1.5L + NPS ₹50K = ₹3.75L. *** With full deductions at ₹15L. All figures include 4% cess. Use our calculator for your exact numbers.
      </p>

      <h2>Calculate Your Tax Now</h2>
      <p>
        Numbers above are illustrative. Your actual tax depends on your specific deductions, HRA
        city, age group, and other factors. Use our free Income Tax Calculator to enter your exact
        details and instantly see which regime saves you more — with a complete slab-wise breakdown
        and take-home salary comparison.
      </p>
    </div>
  );
}

const articleComponents: Record<string, () => React.JSX.Element> = {
  "how-to-calculate-emi-home-loan": Article1,
  "sip-vs-lump-sum-investment": Article2,
  "new-vs-old-tax-regime-2024-25": Article3,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = articleMeta[slug];
  const Content = articleComponents[slug];

  if (!meta || !Content) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    url: `https://snsmtools.in/blog/${slug}`,
    datePublished: "2025-05-01",
    dateModified: "2025-05-01",
    author: {
      "@type": "Organization",
      name: "SNSM Developers",
      url: "https://snsmtools.in",
    },
    publisher: {
      "@type": "Organization",
      name: "SNSM Tools",
      url: "https://snsmtools.in",
    },
  };

  const categoryColor: Record<string, string> = {
    Loans: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
    Investments: "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300",
    Taxes: "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300",
  };

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
          <span className="text-gray-900 dark:text-white">{meta.category}</span>
        </nav>

        {/* Article header */}
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColor[meta.category] ?? ""}`}>
              {meta.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="h-3 w-3" /> {meta.readTime}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar className="h-3 w-3" /> {meta.publishDate}
            </span>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
            {meta.title}
          </h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">{meta.description}</p>
        </header>

        {/* Top ad */}
        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        {/* Article body */}
        <article className="
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
          [&_.formula-box]:rounded-xl [&_.formula-box]:border [&_.formula-box]:border-teal-200 [&_.formula-box]:bg-teal-50 [&_.formula-box]:dark:border-teal-800 [&_.formula-box]:dark:bg-teal-950/30 [&_.formula-box]:px-6 [&_.formula-box]:py-4 [&_.formula-box]:my-4
        ">
          <Content />
        </article>

        {/* Mid-article ad */}
        <div className="my-10 flex justify-center">
          <AdSlot size="rectangle" />
        </div>

        {/* Related calculators */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Related Calculators
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {meta.related.map((tool) => (
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
