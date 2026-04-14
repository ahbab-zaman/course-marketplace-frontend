"use client";

import React, { useState, useEffect } from "react";
import { GSAPReveal } from "@/components/animations/GSAPReveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function VerifyEmailPage() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const { verifyEmail, resendVerification, isLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required");
      return;
    }
    try {
      await verifyEmail(email, otp);
      toast.success("Email verified successfully! You can now log in.");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Verification failed");
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }
    try {
      await resendVerification(email);
      toast.success("Verification code sent to your email");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to resend code");
    }
  };

  return (
    <main className="flex-grow flex items-center justify-center p-6 md:p-12 relative overflow-hidden min-h-[calc(100vh-200px)] pt-24 pb-24">
      {/* Background Organic Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-surface-container rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary-container/30 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="w-full max-w-md z-10 relative">
        <GSAPReveal animation="fadeUp" delay={0.1}>
          {/* Brand Anchor */}
          <div className="text-center mb-10">
            <Link href="/" className="inline-block">
              <h1 className="font-headline text-3xl font-extrabold text-primary tracking-tighter mb-2">
                The Curator
              </h1>
            </Link>
            <p className="font-body text-secondary text-sm tracking-wide uppercase">
              Academic Workspace
            </p>
          </div>
        </GSAPReveal>

        <GSAPReveal animation="scale" delay={0.2}>
          {/* Verify Card */}
          <div className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(21,29,27,0.06)] relative z-20">
            <div className="p-8 md:p-12 relative overflow-hidden">
              <div className="flex flex-col items-center gap-2 mb-6">
                <div
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-surface-variant/50"
                  aria-hidden="true"
                >
                  <svg
                    className="stroke-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
                  </svg>
                </div>
                <div className="flex flex-col space-y-1.5 text-center">
                  <h2 className="text-xl font-headline font-semibold tracking-tight text-primary">Verify Your Email</h2>
                  <p className="text-sm text-secondary">
                    We've sent a 6-digit code to {email || "your email"}. Enter it below to verify your account.
                  </p>
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleVerify}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-secondary font-semibold uppercase tracking-wider text-xs">Email</Label>
                    <Input
                      id="email"
                      placeholder="hi@yourcompany.com"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-3.5 px-4 bg-surface-container-low border-surface-variant/50 text-primary placeholder:text-outline focus-visible:ring-primary-container"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="otp" className="text-secondary font-semibold uppercase tracking-wider text-xs">Verification Code</Label>
                    <Input
                      id="otp"
                      placeholder="Enter 6-digit code"
                      type="text"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      className="py-3.5 px-4 bg-surface-container-low border-surface-variant/50 text-primary placeholder:text-outline focus-visible:ring-primary-container text-center text-lg tracking-widest"
                    />
                  </div>
                </div>

                <Button type="submit" disabled={isLoading} className="w-full bg-primary-container text-on-primary font-headline font-bold py-6 rounded-xl hover:bg-secondary hover:-translate-y-1 active:scale-[0.98] transition-all">
                  {isLoading ? "Verifying..." : "Verify Email"}
                </Button>
              </form>

              <div className="text-center mt-6">
                <p className="text-sm text-secondary mb-2">
                  Didn't receive the code?
                </p>
                <Button
                  variant="ghost"
                  onClick={handleResend}
                  disabled={isLoading}
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  Resend Code
                </Button>
              </div>

              <div className="text-center mt-4">
                <Link
                  href="/login"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  Back to Login
                </Link>
              </div>
            </div>

            {/* Footer Tonal Base */}
            <div className="bg-surface-container px-8 py-6 text-center border-t border-outline-variant/10">
              <p className="text-xs text-on-secondary-container/80 font-medium leading-relaxed">
                Need help? Contact our{" "}
                <Link className="text-primary font-bold hover:underline" href="#">
                  support team
                </Link>
                .
              </p>
            </div>
          </div>
        </GSAPReveal>
      </div>
    </main>
  );
}