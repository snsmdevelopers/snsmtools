import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";
import EMICalculator from "@/components/calculators/EMICalculator";

export const metadata: Metadata = {
  title: "EMI கணக்கீடு - வீட்டு கடன், கார் கடன் | SNSM Tools",
  description:
    "இலவச EMI கணக்கீடு. வீட்டு கடன், கார் கடன், தனிநபர் கடன் மாதாந்திர தவணை உடனே கணக்கிடுங்கள். உள்நுழைவு தேவையில்லை.",
  keywords: ["emi கணக்கீடு", "வீட்டு கடன் கணக்கீடு", "மாதாந்திர தவணை", "emi calculator tamil"],
  alternates: {
    canonical: "https://snsmtools.in/tamil/emi-calculator",
    languages: {
      ta: "https://snsmtools.in/tamil/emi-calculator",
      en: "https://snsmtools.in/calculators/emi-calculator",
    },
  },
};

const faqs = [
  {
    q: "EMI என்றால் என்ன?",
    a: "EMI என்பது Equated Monthly Instalment என்பதன் சுருக்கம். நீங்கள் வங்கியிடம் இருந்து கடன் வாங்கும்போது, அந்த கடனை திரும்ப செலுத்த மாதந்தோறும் செலுத்த வேண்டிய நிலையான தொகையே EMI ஆகும். இதில் அசல் தொகை மற்றும் வட்டி இரண்டும் அடங்கும்.",
  },
  {
    q: "EMI எப்படி கணக்கிடப்படுகிறது?",
    a: "EMI = P × r × (1+r)^n / ((1+r)^n - 1) என்ற சூத்திரத்தின் மூலம் கணக்கிடப்படுகிறது. இங்கு P = கடன் தொகை, r = மாதாந்திர வட்டி விகிதம், n = மாதங்களில் கடன் காலம். எங்கள் கணக்கீடு இந்த சூத்திரத்தை தானாகவே பயன்படுத்துகிறது.",
  },
  {
    q: "வீட்டு கடனுக்கு EMI எவ்வளவு இருக்கும்?",
    a: "25 லட்சம் ரூபாய் வீட்டு கடனுக்கு, 8.5% வட்டி விகிதத்தில், 20 ஆண்டுகள் காலத்தில் மாதாந்திர EMI சுமார் ₹21,695 இருக்கும். கடன் தொகை, வட்டி விகிதம் மற்றும் காலம் மாறும்போது EMI மாறும்.",
  },
  {
    q: "EMI குறைக்க என்ன செய்யலாம்?",
    a: "EMI குறைக்க மூன்று வழிகள் உள்ளன: (1) அதிக முன்பணம் (down payment) செலுத்துங்கள், (2) குறைந்த வட்டி விகிதம் உள்ள வங்கியை தேர்வு செய்யுங்கள், (3) கடன் காலத்தை அதிகரியுங்கள் — ஆனால் இது மொத்த வட்டியை அதிகரிக்கும்.",
  },
] as const;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "EMI கணக்கீடு",
    url: "https://snsmtools.in/tamil/emi-calculator",
    description: "இலவச EMI கணக்கீடு — வீட்டு கடன், கார் கடன், தனிநபர் கடன்",
    applicationCategory: "FinanceApplication",
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

export default function TamilEMIPage() {
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
          <span className="text-gray-900 dark:text-white">EMI கணக்கீடு</span>
        </nav>

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            EMI கணக்கீடு (EMI Calculator)
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            EMI (Equated Monthly Instalment) என்பது நீங்கள் வங்கிக்கு மாதந்தோறும் செலுத்த
            வேண்டிய நிலையான தொகை ஆகும். வீட்டு கடன், கார் கடன் அல்லது தனிநபர் கடன் எடுக்கும்
            முன், உங்கள் மாதாந்திர தவணையை முன்கூட்டியே தெரிந்துகொள்வது மிகவும் முக்கியம்.
            எங்கள் இலவச EMI கணக்கீட்டை பயன்படுத்தி உங்கள் கடன் தவணையை உடனே கணக்கிடுங்கள்.
            கடன் தொகை, வட்டி விகிதம் மற்றும் கடன் காலம் ஆகியவற்றை உள்ளிட்டால் போதும் —
            முடிவு உடனடியாக கிடைக்கும்.
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
        <EMICalculator />

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
          <Link href="/calculators/emi-calculator" className="text-teal-600 hover:underline dark:text-teal-400">
            EMI Calculator (English)
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
