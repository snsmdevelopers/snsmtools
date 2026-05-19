import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// TODO: After Google Search Console setup, add inside metadata:
// verification: { google: "PASTE_YOUR_GSC_CODE_HERE" }

export const metadata: Metadata = {
  title: {
    default: "SNSM Tools — Free Finance Calculators for India",
    template: "%s | SNSM Tools",
  },
  description:
    "Free EMI, SIP, FD, income tax, GST, HRA and PPF calculators for India. No login required. Instant results.",
  keywords: [
    "emi calculator",
    "sip calculator",
    "fd calculator",
    "income tax calculator india",
    "gst calculator",
    "snsmtools",
    "free finance tools india",
  ],
  metadataBase: new URL("https://snsmtools.in"),
  openGraph: {
    title: "SNSM Tools — Free Finance Calculators for India",
    description:
      "Free EMI, SIP, FD, income tax, GST, HRA and PPF calculators for India. No login required. Instant results.",
    url: "https://snsmtools.in",
    siteName: "SNSM Tools",
    type: "website",
    locale: "en_IN",
  },
  other: {
    "google-adsense-account": "ca-pub-6211404446210803",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6211404446210803"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  );
}
