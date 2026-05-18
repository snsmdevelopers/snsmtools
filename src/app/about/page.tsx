import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  TrendingUp,
  PiggyBank,
  Receipt,
  Percent,
  Home,
  Landmark,
  Calendar,
  ArrowRight,
  Heart,
  Shield,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About SNSM Tools — Free Finance Calculators for India",
  description:
    "SNSM Tools is a free finance calculator website for Indian users, built by SNSM Developers. No login required, no data collected, always accurate.",
  alternates: { canonical: "https://snsmtools.in/about" },
};

const tools = [
  { icon: Calculator, name: "EMI Calculator", desc: "Home, car & personal loan EMI with amortization schedule", href: "/calculators/emi-calculator" },
  { icon: TrendingUp, name: "SIP Calculator", desc: "Mutual fund SIP return estimator with year-wise chart", href: "/calculators/sip-calculator" },
  { icon: PiggyBank, name: "FD Calculator", desc: "Fixed deposit maturity with all compounding frequencies", href: "/calculators/fd-calculator" },
  { icon: Receipt, name: "Income Tax Calculator", desc: "FY 2024-25 old vs new regime comparison", href: "/calculators/income-tax-calculator" },
  { icon: Percent, name: "GST Calculator", desc: "Add or remove GST — CGST, SGST & IGST breakdown", href: "/calculators/gst-calculator" },
  { icon: Home, name: "HRA Calculator", desc: "HRA exemption under Section 10(13A)", href: "/calculators/hra-calculator" },
  { icon: Landmark, name: "PPF Calculator", desc: "PPF maturity at 7.1% with 15-year statement", href: "/calculators/ppf-calculator" },
  { icon: Calendar, name: "Age Calculator", desc: "Exact age with total days, weeks, and birthday countdown", href: "/calculators/age-calculator" },
];

const values = [
  {
    icon: Heart,
    title: "Always Free",
    desc: "Every calculator on SNSM Tools is completely free. We will never charge for our tools or lock features behind a paywall.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    desc: "We do not collect personal data, require sign-ups, or store your calculations. Everything runs in your browser.",
  },
  {
    icon: Users,
    title: "Built for India",
    desc: "All tools use Indian number formatting (lakh, crore), follow RBI guidelines, and are updated for the latest tax rules.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About SNSM Tools</h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Free financial calculators for every Indian
        </p>
      </div>

      {/* Mission */}
      <section className="mb-12 rounded-2xl border border-teal-200 bg-teal-50 p-8 dark:border-teal-800 dark:bg-teal-950/30">
        <h2 className="mb-4 text-2xl font-bold text-teal-800 dark:text-teal-200">Our Mission</h2>
        <p className="text-teal-700 dark:text-teal-300">
          Our mission is to provide free, accurate financial calculators to every Indian. We believe
          financial literacy should be accessible to all — not just those who can afford financial
          advisors. Whether you are a salaried employee calculating take-home pay, a first-time home
          buyer estimating loan EMI, or an investor comparing SIP vs FD returns, SNSM Tools gives you
          the numbers you need instantly, without any barriers.
        </p>
      </section>

      {/* Values */}
      <section className="mb-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950/60">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools we offer */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">What We Offer</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {tools.map(({ icon: Icon, name, desc, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-teal-400 dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-950/60">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-gray-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
                  {name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-teal-500 dark:text-gray-600" />
            </Link>
          ))}
        </div>
      </section>

      {/* Why free */}
      <section className="mb-12 rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Why Is It Free?</h2>
        <p className="text-gray-600 dark:text-gray-400">
          SNSM Tools is free to use and supported by non-intrusive display advertisements (Google
          AdSense). We will never charge for our calculators, ask you to create an account, or show
          you misleading financial products. Ads help us cover hosting and development costs while
          keeping every tool permanently free for all users.
        </p>
      </section>

      {/* About the team */}
      <section className="mb-12 rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">About SNSM Developers</h2>
        <p className="text-gray-600 dark:text-gray-400">
          SNSM Tools is built and maintained by SNSM Developers, a small indie development team based
          in Tamil Nadu, India. We are passionate about building practical, accessible tools that solve
          real problems for everyday Indians. Every calculator is hand-crafted with attention to
          accuracy, usability, and mobile performance.
        </p>
      </section>

      {/* Contact CTA */}
      <div className="rounded-2xl bg-teal-600 p-8 text-center text-white">
        <h2 className="mb-2 text-2xl font-bold">Have a suggestion?</h2>
        <p className="mb-6 text-teal-100">
          Found a bug, want a new calculator, or have feedback? We&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
