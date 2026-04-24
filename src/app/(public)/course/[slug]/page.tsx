"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { courseService } from "@/services/course.service";
import { reviewService, type CourseReview } from "@/services/review.service";
import type { Course } from "@/types";

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [related, setRelated] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [enrollState, setEnrollState] = useState<string>("");
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [reviews, setReviews] = useState<CourseReview[]>([]);

  const categoryName = useMemo(
    () =>
      typeof course?.category === "string"
        ? course.category
        : (course?.category?.name ?? "General"),
    [course]
  );

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const courseResponse = await courseService.getBySlug(slug);
        setCourse(courseResponse.data);
        const reviewResponse = await reviewService.getByCourse(courseResponse.data.id);
        setReviews(reviewResponse.data);

        const listResponse = await courseService.getAll({ limit: 4, sort: "rating_desc" });
        setRelated(listResponse.data.filter((item) => item.slug !== slug).slice(0, 3));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load course");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      void loadData();
    }
  }, [slug]);

  const handleEnroll = async () => {
    if (!course) return;
    setIsEnrolling(true);
    try {
      await courseService.enroll(course.id);
      setEnrollState("Enrollment confirmed.");
    } catch (err) {
      setEnrollState(err instanceof Error ? err.message : "Enrollment failed");
    } finally {
      setIsEnrolling(false);
    }
  };

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-20">
        <div className="h-8 w-64 animate-pulse rounded bg-surface-container-high" />
      </main>
    );
  }

  if (error || !course) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-2xl font-bold text-primary">Course unavailable</h1>
        <p className="mt-2 text-on-surface-variant">{error ?? "This course could not be loaded."}</p>
        <Link href={ROUTES.COURSES} className="mt-6 inline-block text-sm font-semibold text-primary">
          Back to courses
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-20 space-y-10">
      <div>
        <p className="text-xs uppercase tracking-wider text-on-surface-variant">{categoryName}</p>
        <h1 className="mt-2 text-4xl font-bold text-primary">{course.title}</h1>
        <p className="mt-3 text-on-surface-variant">{course.shortDescription || course.description}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2 space-y-6">
          <img
            src={course.thumbnail || "/placeholder-course.jpg"}
            alt={course.title}
            className="h-80 w-full rounded-2xl object-cover"
          />
          <article className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6">
            <h2 className="text-xl font-semibold text-primary">About this course</h2>
            <p className="mt-3 whitespace-pre-wrap text-on-surface-variant">{course.description}</p>
          </article>
        </section>

        <aside className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6 h-fit">
          <p className="text-sm text-on-surface-variant">Price</p>
          <p className="mt-1 text-3xl font-bold text-primary">${course.price.toFixed(2)}</p>
          <button
            type="button"
            onClick={handleEnroll}
            disabled={isEnrolling}
            className="mt-6 w-full rounded-lg bg-primary py-3 font-semibold text-on-primary disabled:opacity-70"
          >
            {isEnrolling ? "Enrolling..." : "Enroll Now"}
          </button>
          <p className="mt-3 text-xs text-on-surface-variant">
            {enrollState || "Enrollment uses the live course enrollment endpoint."}
          </p>
        </aside>
      </div>

      <section>
        <h3 className="text-2xl font-semibold text-primary">Reviews</h3>
        <div className="mt-4 space-y-3">
          {reviews.length > 0 ? reviews.map((review) => (
            <div key={review.id} className="rounded-xl border border-outline-variant/20 p-4">
              <p className="font-medium text-primary">{review.user.name}</p>
              <p className="text-sm text-on-surface-variant">Rating: {review.rating}/5</p>
              <p className="mt-2 text-sm text-on-surface-variant">{review.comment ?? "No comment provided."}</p>
            </div>
          )) : <p className="text-sm text-on-surface-variant">No reviews yet.</p>}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-primary">Related courses</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.id} href={ROUTES.COURSE_DETAIL(item.slug)} className="rounded-xl border border-outline-variant/20 p-4">
              <p className="font-medium text-primary">{item.title}</p>
              <p className="mt-2 text-sm text-on-surface-variant">${item.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
