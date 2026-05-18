import Link from "next/link";
import { Calculator } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-950/40">
        <Calculator className="h-10 w-10 text-teal-600" />
      </div>

      <p className="mb-2 text-6xl font-bold text-teal-600">404</p>
      <h1 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
        Page Not Found
      </h1>
      <p className="mb-8 text-gray-500 dark:text-gray-400">
        Oops! The page you&apos;re looking for doesn&apos;t exist. It may have been moved, or you may have mistyped the URL.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
        >
          Go to Home
        </Link>
        <Link
          href="/calculators"
          className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-teal-400 hover:text-teal-600 dark:border-gray-700 dark:text-gray-300"
        >
          All Calculators
        </Link>
      </div>
    </div>
  );
}
