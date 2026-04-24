import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Course } from "@/types";
import { formatPrice } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className }: CourseCardProps) {
  const categoryLabel =
    typeof course.category === "string"
      ? course.category
      : (course.category?.name ?? "General");

  return (
    <Link
      href={`/course/${course.slug}`}
      className={cn(
        "group rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {course.discountPrice && (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--destructive)] px-2.5 py-1 text-xs font-semibold text-white">
            SALE
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs font-medium text-primary-500">
          {categoryLabel}
        </span>
        <h3 className="mt-1 line-clamp-2 font-semibold leading-snug group-hover:text-primary-500 transition-colors">
          {course.title}
        </h3>
        <p className="mt-1 text-xs text-[var(--muted-foreground)]">
          {course.instructor.name}
        </p>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <span className="text-sm font-bold text-amber-500">
            {course.rating.toFixed(1)}
          </span>
          <span className="text-xs text-[var(--muted-foreground)]">
            ({course.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold">
            {formatPrice(course.discountPrice ?? course.price)}
          </span>
          {course.discountPrice && (
            <span className="text-sm text-[var(--muted-foreground)] line-through">
              {formatPrice(course.price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
