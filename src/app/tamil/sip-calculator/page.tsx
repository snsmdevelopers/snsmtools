import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AdSlot from "@/components/layout/AdSlot";
import SIPCalculator from "@/components/calculators/SIPCalculator";

export const metadata: Metadata = {
  title: "SIP கணக்கீடு - மியூச்சுவல் ஃபண்ட் வருமானம் | SNSM Tools",
  description:
    "இலவச SIP கணக்கீடு. மாதாந்திர முதலீட்டில் எவ்வளவு வருமானம் கிடைக்கும் என்று கணக்கிடுங்கள். Mutual fund SIP returns calculator Tamil.",
  keywords: ["sip கணக்கீடு", "mutual fund calculator tamil", "மாதாந்திர முதலீடு", "sip calculator tamil"],
  alternates: {
    canonical: "https://snsmtools.in/tamil/sip-calculator",
    languages: {
      ta: "https://snsmtools.in/tamil/sip-calculator",
      en: "https://snsmtools.in/calculators/sip-calculator",
    },
  },
};

const faqs = [
  {
    q: "SIP என்றால் என்ன?",
    a: "SIP என்பது Systematic Investment Plan என்பதன் சுருக்கம். ஒவ்வொரு மாதமும் ஒரு நிலையான தொகையை mutual fund திட்டத்தில் தானாகவே முதலீடு செய்யும் முறை இது. ₹500 முதல் தொடங்கலாம். நீண்ட காலத்தில் compound interest மூலம் உங்கள் பணம் பெருகும்.",
  },
  {
    q: "SIP-ல் எவ்வளவு வருமானம் எதிர்பார்க்கலாம்?",
    a: "பொதுவாக large-cap mutual funds 10-12% வருடாந்திர வருமானம் தருகின்றன. Mid-cap மற்றும் small-cap funds 12-15% தரும் — ஆனால் ரிஸ்க் அதிகம். திட்டமிடலுக்கு 10-12% என்று எடுத்துக்கொள்வது பாதுகாப்பானது.",
  },
  {
    q: "SIP எப்போது தொடங்குவது நல்லது?",
    a: "இப்போதே தொடங்குவது சிறந்தது! வயது குறைவாக இருக்கும்போது தொடங்கினால், compound interest அதிக காலம் வேலை செய்யும். 25 வயதில் ₹2,000 SIP தொடங்கினால், 60 வயதில் சுமார் ₹1 கோடி வரை சேர்க்கலாம்.",
  },
  {
    q: "SIP நிறுத்தலாமா?",
    a: "ஆம், SIP எந்த நேரத்திலும் நிறுத்தலாம் — penalty இல்லை. ஆனால் நீண்ட காலம் தொடர்வதே அதிக வருமானம் தரும். தொடர முடியாத சூழ்நிலையில் SIP-ஐ pause செய்யும் வசதியும் உள்ளது.",
  },
] as const;

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SIP கணக்கீடு",
    url: "https://snsmtools.in/tamil/sip-calculator",
    description: "இலவச SIP கணக்கீடு — மாதாந்திர mutual fund முதலீட்டு வருமானம்",
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

export default function TamilSIPPage() {
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
          <span className="text-gray-900 dark:text-white">SIP கணக்கீடு</span>
        </nav>

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            SIP கணக்கீடு (SIP Calculator)
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            SIP (Systematic Investment Plan) என்பது மாதந்தோறும் ஒரு நிலையான தொகையை mutual
            fund-ல் முதலீடு செய்வது ஆகும். சிறிய தொகையை தொடர்ந்து முதலீடு செய்வதன் மூலம்
            நீண்ட காலத்தில் பெரிய செல்வம் சேர்க்கலாம். மாதம் ₹1,000 முதலீட்டில் கூட 20
            ஆண்டுகளில் சுமார் ₹10 லட்சம் வரை சேர்க்கலாம். எங்கள் SIP கணக்கீட்டை பயன்படுத்தி
            உங்கள் முதலீட்டு இலக்கை அடைய திட்டமிடுங்கள்.
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
        <SIPCalculator />

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
          <Link href="/calculators/sip-calculator" className="text-teal-600 hover:underline dark:text-teal-400">
            SIP Calculator (English)
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
