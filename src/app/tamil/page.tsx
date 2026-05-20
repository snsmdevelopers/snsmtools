import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, TrendingUp, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "தமிழ் கணக்கீடுகள் - EMI, SIP, வயது கணக்கீடு | SNSM Tools",
  description:
    "இலவச தமிழ் நிதி கணக்கீடுகள். EMI கணக்கீடு, SIP கணக்கீடு, வயது கணக்கீடு மற்றும் பலவற்றை தமிழில் பயன்படுத்துங்கள்.",
  alternates: { canonical: "https://snsmtools.in/tamil" },
};

const tools = [
  {
    icon: Calculator,
    name: "EMI கணக்கீடு",
    desc: "வீட்டு கடன், கார் கடன் தவணை",
    href: "/tamil/emi-calculator",
  },
  {
    icon: TrendingUp,
    name: "SIP கணக்கீடு",
    desc: "மாதாந்திர முதலீட்டு வருமானம்",
    href: "/tamil/sip-calculator",
  },
  {
    icon: Calendar,
    name: "வயது கணக்கீடு",
    desc: "பிறந்த தேதியில் இருந்து வயது",
    href: "/tamil/age-calculator",
  },
];

export default function TamilHubPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          தமிழ் கணக்கீடுகள்
        </h1>
        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
          அனைத்து நிதி கணக்கீடுகளும் தமிழில்
        </p>
      </div>

      {/* Tool cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {tools.map(({ icon: Icon, name, desc, href }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-teal-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-teal-600"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white dark:bg-teal-950/60">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="mb-1.5 text-lg font-bold text-gray-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
              {name}
            </h2>
            <p className="flex-1 text-sm text-gray-500 dark:text-gray-400">{desc}</p>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-teal-600 dark:text-teal-400">
              கணக்கிடுங்கள்
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>

      {/* Coming soon note */}
      <div className="mt-12 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center dark:border-teal-800 dark:bg-teal-950/30">
        <p className="text-teal-700 dark:text-teal-300">
          மேலும் கணக்கீடுகள் விரைவில் வருகின்றன...
        </p>
        <p className="mt-1 text-sm text-teal-600/80 dark:text-teal-400/80">
          FD, Income Tax, GST, HRA, PPF கணக்கீடுகள் தமிழில் சேர்க்கப்படும்.
        </p>
      </div>
    </div>
  );
}
