import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";
import AgeCalculator from "@/components/calculators/AgeCalculator";

export const metadata: Metadata = {
  title: "வயது கணக்கீடு - பிறந்த தேதியில் இருந்து வயது | SNSM Tools",
  description:
    "இலவச வயது கணக்கீடு. பிறந்த தேதியில் இருந்து சரியான வயதை ஆண்டு, மாதம், நாள் கணக்கிடுங்கள். Aadhaar, passport விண்ணப்பத்திற்கு உதவியாக இருக்கும்.",
  keywords: ["வயது கணக்கீடு", "age calculator tamil", "பிறந்த தேதி கணக்கீடு", "வயது கணக்கு"],
  alternates: {
    canonical: "https://snsmtools.in/tamil/age-calculator",
    languages: {
      ta: "https://snsmtools.in/tamil/age-calculator",
      en: "https://snsmtools.in/calculators/age-calculator",
    },
  },
};

const faqs = [
  {
    q: "வயது கணக்கீடு எப்படி பயன்படுத்துவது?",
    a: "உங்கள் பிறந்த தேதியை உள்ளிடுங்கள். கணக்கீடு உங்கள் சரியான வயதை ஆண்டு, மாதம், நாள் கணக்கில் காட்டும். Aadhaar அல்லது passport விண்ணப்பத்திற்கு, விண்ணப்ப தேதியை 'இந்த தேதி வரை கணக்கிடு' என்ற பகுதியில் உள்ளிடுங்கள்.",
  },
  {
    q: "Aadhaar-க்கு வயது சரிபார்க்க இந்த கணக்கீடு உதவுமா?",
    a: "ஆம். 'Calculate As Of' என்ற பகுதியில் Aadhaar விண்ணப்ப தேதியை உள்ளிட்டால், அந்த தேதி வரை உங்கள் சரியான வயதை காணலாம். இது அரசு ஆவணங்களுக்கு மிகவும் உதவியாக இருக்கும்.",
  },
  {
    q: "18 வயது நிரம்பியுள்ளதா என்று எப்படி தெரிந்துகொள்வது?",
    a: "உங்கள் பிறந்த தேதியை உள்ளிடுங்கள். கணக்கீடு 18 ஆண்டுகளுக்கும் அதிகமான வயதை காட்டினால், நீங்கள் வாக்களிக்கவும், driving licence பெறவும் தகுதியுடையவர்.",
  },
  {
    q: "பிறந்தநாள் எத்தனை நாட்களில் வருகிறது?",
    a: "எங்கள் வயது கணக்கீடு உங்கள் அடுத்த பிறந்தநாள் எத்தனை நாட்களில் வருகிறது என்பதையும் காட்டும். இது ஒரு சுவாரஸ்யமான தகவல் — குடும்பத்தினரோடு பகிர்ந்துகொள்ளுங்கள்!",
  },
] as const;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "வயது கணக்கீடு",
    url: "https://snsmtools.in/tamil/age-calculator",
    description: "இலவச வயது கணக்கீடு — பிறந்த தேதியில் இருந்து சரியான வயது",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    inLanguage: "ta",
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

export default function TamilAgePage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
        >
          <Link href="/" className="transition-colors hover:text-teal-600">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/tamil" className="transition-colors hover:text-teal-600">Tamil</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gray-900 dark:text-white">வயது கணக்கீடு</span>
        </nav>

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            வயது கணக்கீடு (Age Calculator)
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            உங்கள் சரியான வயதை தெரிந்துகொள்ள இந்த இலவச வயது கணக்கீட்டை பயன்படுத்துங்கள்.
            Aadhaar card, passport, driving licence விண்ணப்பிக்கும்போது சரியான வயது
            தெரிந்திருப்பது அவசியம். பிறந்த தேதியை உள்ளிட்டால், ஆண்டு, மாதம், நாள் கணக்கில்
            உங்கள் சரியான வயதை உடனே காணலாம். அடுத்த பிறந்தநாள் எத்தனை நாட்களில் வருகிறது
            என்பதையும் தெரிந்துகொள்ளலாம்.
          </p>
        </div>

        {/* Ad slot — above calculator */}
        <div className="mb-8 flex flex-col items-center">
          <p className="mb-2 text-xs text-gray-400">Advertisement</p>
          <div className="hidden md:block"><AdSlot size="leaderboard" /></div>
          <div className="block md:hidden"><AdSlot size="mobile-banner" /></div>
        </div>

        {/* Calculator */}
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          கீழே உள்ள கணக்கீட்டை பயன்படுத்துங்கள்:
        </p>
        <AgeCalculator />

        {/* Ad slot — below calculator */}
        <div className="mt-10 flex justify-center">
          <AdSlot size="rectangle" />
        </div>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            அடிக்கடி கேட்கப்படும் கேள்விகள்
          </h2>
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {faqs.map((faq) => (
              <details key={faq.q} className="group px-6 py-0">
                <summary className="flex cursor-pointer list-none items-center justify-between py-5">
                  <span className="font-medium text-gray-900 dark:text-white">{faq.q}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 rotate-90 text-gray-400 transition-transform duration-200 group-open:-rotate-90" />
                </summary>
                <div className="pb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* English version link */}
        <p className="mt-8 text-sm text-gray-400 dark:text-gray-500">
          Looking for the English version?{" "}
          <Link href="/calculators/age-calculator" className="text-teal-600 hover:underline dark:text-teal-400">
            Age Calculator (English)
          </Link>
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </>
  );
}
