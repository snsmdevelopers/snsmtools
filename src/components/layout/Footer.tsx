import Link from "next/link";
import { TrendingUp } from "lucide-react";

const calculators = [
  { name: "EMI Calculator", href: "/calculators/emi-calculator" },
  { name: "SIP Calculator", href: "/calculators/sip-calculator" },
  { name: "FD Calculator", href: "/calculators/fd-calculator" },
  { name: "Income Tax Calculator", href: "/calculators/income-tax-calculator" },
  { name: "GST Calculator", href: "/calculators/gst-calculator" },
  { name: "HRA Calculator", href: "/calculators/hra-calculator" },
  { name: "PPF Calculator", href: "/calculators/ppf-calculator" },
  { name: "Age Calculator", href: "/calculators/age-calculator" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Three columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Column 1 — Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"
            >
              <TrendingUp className="h-5 w-5 text-teal-600" />
              FinTools
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Free finance calculators for every Indian
            </p>
            <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
              Made with ❤️ in India
            </p>
          </div>

          {/* Column 2 — Calculators */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
              Calculators
            </h3>
            <ul className="space-y-2">
              {calculators.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-gray-200 pt-6 dark:border-gray-800 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © 2025 FinTools. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Free to use. Ad-supported.
          </p>
        </div>
      </div>
    </footer>
  );
}
