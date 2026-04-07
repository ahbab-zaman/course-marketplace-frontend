import { z } from "zod";

export const courseSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title is too long"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(5000, "Description is too long"),
  shortDescription: z
    .string()
    .min(10, "Short description must be at least 10 characters")
    .max(200, "Short description is too long"),
  price: z
    .number()
    .min(0, "Price must be positive")
    .max(10000, "Price cannot exceed $10,000"),
  category: z.string().min(1, "Category is required"),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  tags: z.array(z.string()).min(1, "Add at least one tag").max(10),
  requirements: z.array(z.string()),
  objectives: z.array(z.string()).min(1, "Add at least one learning objective"),
});

export const reviewSchema = z.object({
  rating: z.number().min(1, "Rating is required").max(5),
  comment: z
    .string()
    .min(10, "Review must be at least 10 characters")
    .max(1000, "Review is too long"),
});

export type CourseFormData = z.infer<typeof courseSchema>;
export type ReviewFormData = z.infer<typeof reviewSchema>;
