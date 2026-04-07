import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Courses",
  description:
    "Browse thousands of courses in web development, data science, design, business, and more.",
};

export default function CoursesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20">
      <h1 className="font-heading text-4xl font-bold">Explore Courses</h1>
      <p className="mt-2 text-[var(--muted-foreground)]">
        Discover courses taught by industry experts.
      </p>
      {/* Course grid + filters will go here */}
    </main>
  );
}
