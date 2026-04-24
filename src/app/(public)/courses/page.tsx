"use client";

import React, { useState, useEffect, useCallback } from "react";
import { GSAPReveal } from "@/components/animations/GSAPReveal";
import Link from "next/link";
import { courseService, categoryService } from "@/services/course.service";
import { ROUTES } from "@/constants/routes";
import type { Course, CourseCategory, FilterState } from "@/types";

export default function CoursesListingPage() {
  const [priceRange, setPriceRange] = useState(250);
  const [coursesData, setCoursesData] = useState<Course[]>([]);
  const [categories, setCategories] = useState<CourseCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({ page: 1, limit: 12, total: 0, totalPages: 0 });
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  const transformFiltersForApi = useCallback((filters: Partial<FilterState>) => {
    const apiParams: Record<string, string | number> = {};
    
    if (filters.search) apiParams.search = filters.search;
    if (filters.category) apiParams.categoryId = filters.category;
    if (filters.priceRange) {
      apiParams.minPrice = filters.priceRange[0];
      apiParams.maxPrice = filters.priceRange[1];
    }
    if (filters.sortBy) apiParams.sort = filters.sortBy;
    if (filters.page) apiParams.page = filters.page;
    if (filters.limit) apiParams.limit = filters.limit;
    
    return apiParams;
  }, []);

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const apiFilters: Partial<FilterState> = {
        // Backend accepts one category filter at a time (`categoryId` or `categorySlug`).
        ...(selectedCategories.length > 0 && { category: selectedCategories[0] }),
        ...(selectedLevel && { level: selectedLevel as FilterState['level'] }),
        ...(priceRange < 499 && { priceRange: [0, priceRange] as [number, number] }),
        sortBy,
        page: pagination.page,
        limit: pagination.limit,
      };
      
      const response = await courseService.getAll(transformFiltersForApi(apiFilters));
      setCoursesData(response.data);
      if (response.pagination) {
        setPagination(prev => ({ ...prev, ...response.pagination }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load courses");
    } finally {
      setLoading(false);
    }
  }, [selectedCategories, selectedLevel, priceRange, sortBy, pagination.page, pagination.limit, transformFiltersForApi]);

  const fetchCategories = async () => {
    try {
      const response = await categoryService.getAll();
      if (response.data) {
        setCategories(response.data);
      }
    } catch (err) {
      console.error("Failed to load categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <main className="pt-32 pb-24 min-h-screen bg-surface relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-surface-container-low to-transparent pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-72 shrink-0 pb-12">
          <div className="sticky top-28 space-y-10">
            <GSAPReveal animation="fadeUp" delay={0.1}>
              <h3 className="font-headline font-bold text-primary text-xl mb-6">Filters</h3>
            </GSAPReveal>

            <div className="space-y-10">
              {/* Categories */}
              <GSAPReveal animation="slideRight" delay={0.2}>
                <section>
                  <label className="text-xs uppercase tracking-widest font-bold text-secondary mb-4 block">Category</label>
                  <div className="space-y-3">
                    {categories.length > 0 ? categories.map((category) => (
                      <label key={category.id} className="flex items-center gap-3 group cursor-pointer">
                        <input
                          checked={selectedCategories.includes(category.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories(prev => [...prev, category.id]);
                            } else {
                              setSelectedCategories(prev => prev.filter(id => id !== category.id));
                            }
                          }}
                          className="w-5 h-5 rounded border-outline-variant/40 text-primary-container focus:ring-primary-container/20 transition-colors"
                          type="checkbox"
                        />
                        <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">{category.name}</span>
                      </label>
                    )) : null}
                  </div>
                </section>
              </GSAPReveal>

              {/* Level */}
              <GSAPReveal animation="slideRight" delay={0.3}>
                <section>
                  <label className="text-xs uppercase tracking-widest font-bold text-secondary mb-4 block">Academic Level</label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 group cursor-pointer">
                      <input
                        onChange={() => setSelectedLevel("")}
                        className="w-5 h-5 border-outline-variant/40 text-primary-container focus:ring-primary-container/20 transition-colors"
                        name="level"
                        type="radio"
                        defaultChecked
                        value=""
                      />
                      <span className="text-sm font-medium text-on-surface transition-colors">All Levels</span>
                    </label>
                    {["beginner", "intermediate", "advanced"].map((level) => (
                      <label key={level} className="flex items-center gap-3 group cursor-pointer">
                        <input
                          checked={selectedLevel === level}
                          onChange={() => setSelectedLevel(level)}
                          className="w-5 h-5 border-outline-variant/40 text-primary-container focus:ring-primary-container/20 transition-colors"
                          name="level"
                          type="radio"
                        />
                        <span className="text-sm font-medium text-on-surface transition-colors capitalize">{level}</span>
                      </label>
                    ))}
                  </div>
                </section>
              </GSAPReveal>

              {/* Price Range */}
              <GSAPReveal animation="slideRight" delay={0.4}>
                <section>
                  <label className="text-xs uppercase tracking-widest font-bold text-secondary mb-4 block">Tuition Range</label>
                  <input
                    className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container"
                    type="range"
                    min="49"
                    max="499"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                  />
                  <div className="flex justify-between mt-3 text-xs font-bold text-on-surface-variant">
                    <span>$49</span>
                    <span className="text-primary-container bg-primary-container/10 px-2 py-0.5 rounded">${priceRange}</span>
                    <span>$499+</span>
                  </div>
                </section>
              </GSAPReveal>
            </div>

            {/* Institutional Access Card */}
            <GSAPReveal animation="scale" delay={0.5}>
              <div className="p-6 bg-primary-container rounded-2xl relative overflow-hidden group shadow-lg">
                <div className="relative z-10">
                  <h4 className="text-on-primary font-headline font-bold text-lg mb-2">Institutional Access</h4>
                  <p className="text-on-primary-container text-xs leading-relaxed mb-5">
                    Request a curriculum demo for your faculty or department.
                  </p>
                  <button className="text-xs font-bold bg-white text-primary px-4 py-2.5 rounded-lg hover:bg-secondary-container transition-colors shadow-sm">
                    Learn More
                  </button>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                  <span className="material-symbols-outlined text-8xl text-white">school</span>
                </div>
              </div>
            </GSAPReveal>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="flex-1 w-full">
          <header className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <GSAPReveal animation="slideRight" delay={0.1}>
              <div>
                <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-3 leading-tight">
                  Academic Catalogs
                </h1>
                <p className="text-secondary font-medium text-lg">
                  Refined curricula for the modern intellectual.
                </p>
              </div>
            </GSAPReveal>
            
            <GSAPReveal animation="slideLeft" delay={0.2}>
              <div className="flex items-center gap-4 bg-surface-container-low border border-outline-variant/20 p-2 rounded-xl shadow-sm">
                <span className="text-xs font-bold text-secondary px-3 uppercase tracking-widest">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer outline-none"
                >
                  <option value="newest">Newest Arrivals</option>
                  <option value="oldest">Oldest First</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="rating_desc">Highest Rated</option>
                  <option value="popular_desc">Most Popular</option>
                </select>
              </div>
            </GSAPReveal>
          </header>

          {/* Bento Grid Layout for Courses */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="h-full bg-surface-container-lowest rounded-[1.5rem] overflow-hidden animate-pulse">
                  <div className="h-56 bg-surface-container-high"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 w-20 bg-surface-container-high rounded"></div>
                    <div className="h-6 w-full bg-surface-container-high rounded"></div>
                    <div className="h-4 w-3/4 bg-surface-container-high rounded"></div>
                    <div className="pt-5 border-t border-outline-variant/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-surface-container-high"></div>
                        <div className="h-3 w-20 bg-surface-container-high rounded"></div>
                      </div>
                      <div className="h-6 w-16 bg-surface-container-high rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20">
              <span className="material-symbols-outlined text-6xl text-error mb-4">error</span>
              <h3 className="font-headline text-xl text-primary mb-2">Failed to Load Courses</h3>
              <p className="text-on-surface-variant mb-6">{error}</p>
              <button 
                onClick={fetchCourses}
                className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : coursesData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">school</span>
              <h3 className="font-headline text-xl text-primary mb-2">No Courses Found</h3>
              <p className="text-on-surface-variant">Try adjusting your filters to see more results.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {coursesData.map((course, idx) => (
                <GSAPReveal key={course.id} animation="fadeUp" delay={0.2 + (idx * 0.1)}>
                  <Link href={ROUTES.COURSE_DETAIL(course.slug)} className="block h-full">
                    <article className="h-full group bg-surface-container-lowest rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-outline-variant/10 hover:-translate-y-2">
                      <div className="relative h-56 overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <img
                          alt={course.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
                          src={course.thumbnail}
                        />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-1 relative bg-surface-container-lowest">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[10px] font-bold text-on-tertiary-container bg-tertiary-fixed-dim/20 px-2.5 py-1 rounded-md tracking-wider">
                            {typeof course.category === "string" ? course.category : (course.category?.name ?? "General")}
                          </span>
                          <div className="flex items-center gap-1.5 ml-auto">
                            <span className="material-symbols-outlined text-sm text-[#FFB703]" style={{ fontVariationSettings: "'FILL' 1" }}>
                              star
                            </span>
                            <span className="text-xs font-bold text-primary">{course.rating.toFixed(1)}</span>
                          </div>
                        </div>
                        
                        <h3 className="font-headline font-bold text-xl text-primary leading-tight mb-3 group-hover:text-secondary transition-colors duration-300">
                          {course.title}
                        </h3>
                        <p className="text-sm text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">
                          {course.shortDescription}
                        </p>
                        
                        <div className="mt-auto pt-5 border-t border-outline-variant/10 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden bg-surface-container shadow-sm">
                              <img
                                alt={course.instructor.name}
                                className="w-full h-full object-cover"
                                src={course.instructor.avatar || "/placeholder-avatar.png"}
                              />
                            </div>
                            <span className="text-xs font-bold text-secondary">{course.instructor.name}</span>
                          </div>
                          <span className="text-lg font-headline font-extrabold text-primary">
                            ${course.price}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </GSAPReveal>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
