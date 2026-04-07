import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In / Register",
  description: "Sign in or create an account to access your courses and dashboard.",
};

export default function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Sign in to your account or create a new one
          </p>
        </div>
        {/* Auth tab system (login / register) will go here */}
      </div>
    </main>
  );
}
