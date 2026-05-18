import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";
import GSTCalculator from "@/components/calculators/GSTCalculator";

export const metadata: Metadata = {
  title: "GST Calculator — Add or Remove GST from Price | SNSM Tools",
  description:
    "Free GST calculator to add or remove Goods and Services Tax from any price. Supports all GST slabs: 5%, 12%, 18%, 28%. Get CGST, SGST & IGST breakdown instantly.",
  alternates: { canonical: "https://snsmtools.in/calculators/gst-calculator" },
};

const faqs = [
  {
    q: "What is GST and how does it work in India?",
    a: "GST (Goods and Services Tax) is India's unified indirect tax system that replaced multiple cascading taxes in 2017. It is levied on the supply of goods and services at each stage of the supply chain. There are four main GST slabs: 5% (essential items), 12% (processed foods, some services), 18% (most manufactured goods, restaurants), and 28% (luxury goods, automobiles). GST is collected by the Central Government (CGST) and State Governments (SGST) in equal halves for intra-state transactions.",
  },
  {
    q: "What is the difference between CGST, SGST, and IGST?",
    a: "For intra-state transactions (buyer and seller in the same state), GST is split equally: CGST goes to the Central Government and SGST goes to the State Government. For inter-state transactions (buyer and seller in different states), IGST (Integrated GST) is levied, which equals CGST + SGST. IGST is collected by the Central Government and later distributed to states. Our calculator shows all three for easy reference.",
  },
  {
    q: "How do I calculate GST-inclusive price from original price?",
    a: "To add GST to an original price (exclusive GST): GST Amount = Original Price × GST Rate ÷ 100; Final Price = Original Price + GST Amount. To find the original price from a GST-inclusive price (inclusive GST): Original Price = Inclusive Price × 100 ÷ (100 + GST Rate); GST Amount = Inclusive Price − Original Price. Use the 'Add GST' / 'Remove GST' toggle in our calculator to switch between these modes instantly.",
  },
  {
    q: "Which goods and services fall under 0% GST?",
    a: "Several essential goods are exempt from GST or fall under the 0% slab: fresh fruits, vegetables, milk, eggs, bread, cereals, unprocessed meat and fish, educational services, and healthcare services. These items are considered necessities and are kept GST-free to minimise the tax burden on lower-income households. Agricultural produce and certain religious services also enjoy GST exemption.",
  },
] as const;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "GST Calculator",
    url: "https://snsmtools.in/calculators/gst-calculator",
    description: "Free online GST calculator to add or remove GST with CGST, SGST and IGST breakdown",
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

export default function GSTCalculatorPage() {
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
          <span className="text-gray-900 dark:text-white">GST Calculator</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">GST Calculator</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Our free GST calculator makes it easy to compute Goods and Services Tax for any transaction
            in India. Whether you need to add GST to a base price or remove GST from an inclusive price,
            our tool handles both scenarios instantly. Simply choose the calculation mode, enter the
            amount, and select the applicable GST rate — 5%, 12%, 18%, or 28%. The calculator displays
            the complete tax breakdown including GST amount, CGST (Central GST), SGST (State GST), and
            the IGST equivalent for inter-state transactions. Ideal for business owners, freelancers,
            accountants, and consumers who need quick GST calculations on the go.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        <GSTCalculator />

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
