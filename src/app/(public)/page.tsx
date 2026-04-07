export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-surface-900 to-secondary-950" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Master New Skills with{" "}
            <span className="gradient-text">Expert-Led</span> Courses
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-300">
            Join thousands of learners worldwide. Access premium courses taught
            by industry professionals and advance your career.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/courses"
              className="rounded-xl bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-500 hover:shadow-glow"
            >
              Explore Courses
            </a>
            <a
              href="/auth"
              className="rounded-xl border border-white/20 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Start Teaching
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
