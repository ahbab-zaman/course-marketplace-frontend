import type { Metadata } from "next";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  // In production, fetch course data here for dynamic metadata
  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    description: `Learn more about this course and start your learning journey.`,
  };
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="font-heading text-3xl font-bold">
        Course: {slug.replace(/-/g, " ")}
      </h1>
      <p className="mt-2 text-[var(--muted-foreground)]">
        Course details, curriculum, and reviews will appear here.
      </p>
      {/* Course detail layout will go here */}
    </main>
  );
}
