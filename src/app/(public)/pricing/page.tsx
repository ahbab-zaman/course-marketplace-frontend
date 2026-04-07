import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore flexible pricing plans for Course Marketplace. Individual courses, subscriptions, and team plans.",
};

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-4 text-lg text-[var(--muted-foreground)]">
          Choose the plan that fits your learning goals.
        </p>
      </div>
      {/* Pricing cards will go here */}
    </main>
  );
}
