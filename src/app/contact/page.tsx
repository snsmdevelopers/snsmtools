import type { Metadata } from "next";
import { Mail, Clock } from "lucide-react";
import { ChevronRight } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact SNSM Tools | Get in Touch",
  description:
    "Have a suggestion, found a bug, or want to partner with us? Contact SNSM Tools — we respond within 24-48 hours.",
  alternates: { canonical: "https://snsmtools.in/contact" },
};

const contactFaqs = [
  {
    q: "Do you offer API access to the calculators?",
    a: "We do not currently offer a public API. All calculators are available as free web tools on snsmtools.in. If you have a specific business requirement for an API or white-label solution, please reach out using the contact form and we will evaluate the request.",
  },
  {
    q: "Can I suggest a new calculator?",
    a: "Absolutely! We love suggestions. If there is a financial calculator that would be useful for Indian users and is not already on the site, please contact us with the details. We review all suggestions and prioritise the most-requested tools in our development roadmap.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Have a suggestion, found a bug, or want to partner with us?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Contact info */}
        <div className="space-y-4 lg:col-span-1">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
            <h2 className="mb-4 font-semibold text-gray-900 dark:text-white">Get in Touch</h2>

            <div className="space-y-4">
              <a
                href="mailto:snsmdevelopers@gmail.com"
                className="flex items-start gap-3 rounded-xl border border-gray-100 p-4 transition-colors hover:border-teal-300 dark:border-gray-800"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-950/60">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 break-all">
                    snsmdevelopers@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-xl border border-gray-100 p-4 dark:border-gray-800">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-950/60">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Response Time</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Within 24–48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white">SNSM Developers</strong>
              <br />
              Tamil Nadu, India
              <br />
              <br />
              We are a small indie team passionate about building free, accurate financial tools for India.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900 lg:col-span-2">
          <h2 className="mb-6 font-semibold text-gray-900 dark:text-white">Send a Message</h2>
          <ContactForm />
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
          {contactFaqs.map((faq) => (
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
    </div>
  );
}
