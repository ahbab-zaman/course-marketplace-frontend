import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Course Marketplace — our mission, team, and commitment to quality online education.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="font-heading text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">
        We are building the future of online education. Coming soon.
      </p>
    </main>
  );
}
