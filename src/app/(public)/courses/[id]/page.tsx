import { redirect } from "next/navigation";

interface CourseByIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseByIdPage({ params }: CourseByIdPageProps) {
  const { id } = await params;
  redirect(`/course/${id}`);
}
