"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-surface-950 px-4 text-white">
          <div className="text-6xl">💥</div>
          <h1 className="text-3xl font-bold">Something went wrong!</h1>
          <p className="max-w-md text-center text-surface-400">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>
          <button
            onClick={reset}
            className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-500"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
