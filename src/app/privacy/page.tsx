import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SNSM Tools",
  description:
    "Privacy policy for SNSM Tools. We do not collect personal data. Learn how Google AdSense cookies work and your rights as a user.",
  alternates: { canonical: "https://snsmtools.in/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
      <p className="mb-10 text-sm text-gray-400">Effective Date: May 2025</p>

      <div className="space-y-10 text-gray-600 dark:text-gray-400">
        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">1. Overview</h2>
          <p>
            SNSM Tools (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the website snsmtools.in. This page informs you
            of our policies regarding the collection, use, and disclosure of personal data when you
            use our service and the choices you have associated with that data.
          </p>
          <p className="mt-3">
            We are committed to protecting your privacy. SNSM Tools does not require account
            registration, does not store your calculations on our servers, and does not sell or share
            your personal data with third parties (except as described below for advertising purposes).
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">2. Data We Collect</h2>
          <p className="mb-3">
            <strong className="text-gray-900 dark:text-white">We do not collect personal data.</strong>{" "}
            All calculator inputs (loan amounts, salary figures, dates of birth, etc.) are processed
            entirely in your browser and are never transmitted to our servers.
          </p>
          <p>
            We may collect anonymised, non-personally-identifiable usage data such as page views,
            browser type, and geographic region through Google Analytics (see Section 4). This data
            cannot be used to identify you as an individual.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">3. Google AdSense & Advertising Cookies</h2>
          <p className="mb-3">
            SNSM Tools uses Google AdSense to display advertisements. Google AdSense uses cookies to
            serve ads based on your prior visits to this or other websites. These are third-party
            cookies set by Google, not by SNSM Tools.
          </p>
          <p className="mb-3">
            Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your
            visit to snsmtools.in and/or other sites on the Internet. You may opt out of personalised
            advertising by visiting{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline dark:text-teal-400"
            >
              Google Ads Settings
            </a>
            .
          </p>
          <p>
            For more information about how Google uses data, please review{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline dark:text-teal-400"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">4. Google Analytics</h2>
          <p>
            We may use Google Analytics to understand how visitors interact with our website. Google
            Analytics collects anonymised data such as the pages visited, time spent on pages, and the
            country from which you are visiting. This data is aggregated and cannot identify you
            personally. You can opt out of Google Analytics by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline dark:text-teal-400"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">5. No Account Required</h2>
          <p>
            SNSM Tools does not require users to create an account, provide an email address, or share
            any personal information to use any calculator. All tools are freely accessible without
            registration.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices or content of those sites. We encourage you to review the privacy policy
            of any third-party site you visit.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">7. Your Rights Under IT Act 2000</h2>
          <p className="mb-3">
            Under the Information Technology Act, 2000 and the IT (Amendment) Act, 2008 of India, you
            have the right to:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>Know what information is collected about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw consent for data processing at any time</li>
          </ul>
          <p className="mt-3">
            Since SNSM Tools does not collect personal data, these rights are inherently satisfied.
            For any concerns, contact us at the email below.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated effective date. We encourage you to review this page periodically.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">9. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at{" "}
            <a
              href="mailto:snsmdevelopers@gmail.com"
              className="text-teal-600 hover:underline dark:text-teal-400"
            >
              snsmdevelopers@gmail.com
            </a>
            . You can also use our{" "}
            <Link href="/contact" className="text-teal-600 hover:underline dark:text-teal-400">
              Contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
