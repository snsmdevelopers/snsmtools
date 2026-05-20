"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  TrendingUp,
  Calculator,
  Landmark,
  Receipt,
  Percent,
  Home,
  PiggyBank,
  Calendar,
  ChevronDown,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

const calculators = [
  { name: "EMI Calculator", href: "/calculators/emi-calculator", icon: Calculator },
  { name: "SIP Calculator", href: "/calculators/sip-calculator", icon: TrendingUp },
  { name: "FD Calculator", href: "/calculators/fd-calculator", icon: Landmark },
  { name: "Income Tax", href: "/calculators/income-tax-calculator", icon: Receipt },
  { name: "GST Calculator", href: "/calculators/gst-calculator", icon: Percent },
  { name: "HRA Calculator", href: "/calculators/hra-calculator", icon: Home },
  { name: "PPF Calculator", href: "/calculators/ppf-calculator", icon: PiggyBank },
  { name: "Age Calculator", href: "/calculators/age-calculator", icon: Calendar },
] as const;

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Avoid hydration mismatch for theme icon
  useEffect(() => setMounted(true), []);

  // Scroll-based border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setCalcOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCalcOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const navLink = (href: string) =>
    `text-sm font-medium transition-colors px-3 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 ${
      pathname === href
        ? "text-teal-600"
        : "text-gray-600 dark:text-gray-300"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all duration-200 dark:bg-gray-950/95 ${
        scrolled
          ? "border-b border-gray-200 shadow-sm dark:border-gray-800"
          : "border-b border-transparent"
      }`}
    >
      {/* ── Main bar ── */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"
        >
          <TrendingUp className="h-5 w-5 text-teal-600" />
          FinTools
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:flex">
          <Link href="/" className={navLink("/")}>
            Home
          </Link>

          {/* Calculators dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCalcOpen((o) => !o)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-900/20 ${
                pathname.startsWith("/calculators")
                  ? "text-teal-600"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Calculators
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  calcOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {calcOpen && (
              <div className="absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-800 dark:bg-gray-950">
                <div className="grid grid-cols-2 gap-0.5">
                  {calculators.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-900/20 ${
                        pathname === c.href
                          ? "bg-teal-50 text-teal-600 dark:bg-teal-900/20"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <c.icon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{c.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className={navLink("/blog")}>
            Blog
          </Link>
          <Link
            href="/tamil"
            className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 ${
              pathname.startsWith("/tamil")
                ? "text-teal-600"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            தமிழ்
          </Link>
          <Link href="/about" className={navLink("/about")}>
            About
          </Link>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-1">
          {/* Dark mode toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            ) : (
              <span className="block h-4 w-4" />
            )}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white sm:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out sm:hidden ${
          mobileOpen ? "max-h-[640px]" : "max-h-0"
        }`}
      >
        <div className="space-y-1 border-t border-gray-200 px-4 py-4 dark:border-gray-800">
          <Link
            href="/"
            className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-900/20 ${
              pathname === "/" ? "text-teal-600" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Home
          </Link>

          <div className="pt-2">
            <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Calculators
            </p>
            {calculators.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-900/20 ${
                  pathname === c.href
                    ? "text-teal-600"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <c.icon className="h-4 w-4 shrink-0" />
                {c.name}
              </Link>
            ))}
          </div>

          <div className="pt-1">
            <Link
              href="/blog"
              className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-900/20 ${
                pathname === "/blog" ? "text-teal-600" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/tamil"
              className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-900/20 ${
                pathname.startsWith("/tamil") ? "text-teal-600" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              தமிழ்
            </Link>
            <Link
              href="/about"
              className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-900/20 ${
                pathname === "/about" ? "text-teal-600" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
