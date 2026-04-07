import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Course Marketplace team. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="font-heading text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">
        Have questions? We&apos;re here to help.
      </p>
      {/* Contact form will go here */}
    </main>
  );
}
