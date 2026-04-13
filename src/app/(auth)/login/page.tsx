"use client";

import React, { useState } from "react";
import { GSAPReveal } from "@/components/animations/GSAPReveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <main className="flex-grow flex items-center justify-center p-6 md:p-12 relative overflow-hidden min-h-[calc(100vh-200px)] pt-24 pb-24">
      {/* Background Organic Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-surface-container rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary-container/30 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="w-full max-w-xl z-10 relative">
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
          {/* Auth Card */}
          <div className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(21,29,27,0.06)] relative z-20">
            
            {/* Tab Headers */}
            <div className="flex border-b border-surface-variant/50 relative">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-5 text-sm font-semibold font-headline transition-all ${
                  activeTab === "login"
                    ? "border-b-2 border-primary text-primary"
                    : "border-b-2 border-transparent text-secondary hover:text-primary"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`flex-1 py-5 text-sm font-semibold font-headline transition-all ${
                  activeTab === "register"
                    ? "border-b-2 border-primary text-primary"
                    : "border-b-2 border-transparent text-secondary hover:text-primary"
                }`}
              >
                Register
              </button>
            </div>

            <div className="p-8 md:p-12 relative overflow-hidden">
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeTab === "login"
                    ? "opacity-100 transform translate-x-0 relative"
                    : "opacity-0 transform -translate-x-12 absolute inset-0 pointer-events-none p-8 md:p-12 hidden"
                }`}
              >
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
                    <h2 className="text-xl font-headline font-semibold tracking-tight text-primary">Welcome back</h2>
                    <p className="text-sm text-secondary">
                      Enter your credentials to login to your account.
                    </p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-secondary font-semibold uppercase tracking-wider text-xs">Email</Label>
                      <Input id="login-email" placeholder="hi@yourcompany.com" type="email" required className="py-3.5 px-4 bg-surface-container-low border-surface-variant/50 text-primary placeholder:text-outline focus-visible:ring-primary-container" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="login-password" className="text-secondary font-semibold uppercase tracking-wider text-xs">Password</Label>
                        <Link
                          href="/forgot-password"
                          className="text-[10px] font-bold text-secondary-fixed-dim hover:text-primary transition-colors uppercase tracking-widest"
                        >
                          Forgot?
                        </Link>
                      </div>
                      <Input
                        id="login-password"
                        placeholder="Enter your password"
                        type="password"
                        required
                        className="py-3.5 px-4 bg-surface-container-low border-surface-variant/50 text-primary placeholder:text-outline focus-visible:ring-primary-container"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Checkbox id="login-remember" className="border-outline-variant text-primary-container data-[state=checked]:bg-primary-container data-[state=checked]:border-primary-container" />
                      <Label htmlFor="login-remember" className="font-normal text-on-surface-variant cursor-pointer hover:text-primary transition-colors">
                        Remember me for 30 days
                      </Label>
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-primary-container text-on-primary font-headline font-bold py-6 rounded-xl hover:bg-secondary hover:-translate-y-1 active:scale-[0.98] transition-all">
                    Sign in
                  </Button>
                </form>

                <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-surface-variant/50 after:h-px after:flex-1 after:bg-surface-variant/50 my-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">Or</span>
                </div>

                <Button variant="outline" className="w-full py-6 rounded-xl border-[1.5px] border-outline-variant/30 hover:bg-surface-container text-primary flex items-center justify-center gap-3">
                  <img
                    alt="Google"
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDa6fP1D8s6Etg-gSLpwwUZtIpDrWCPgV9OIuzDjQ4sVmeAAxIIOb2-S1draTIvlOhuB4tJC6_2AqTY3T1SGPRCmT0045QGWGUID0FtCVU6W-lKliQKNJm8j9rNuCX79dQXBySbltApYzyqn5xJKlXJfaT4dW_p7iPcoasTBB8tSor4HAblmYdpl0320ZnE3sZ2qCmOGu2NKMerGr5DBDrpVQF9Z7kYsKUJJ3r5SV0HDgSEwWzq-4l1pabZnSus3Z2Invw_uEyyvE"
                  />
                  <span>Login with Google</span>
                </Button>
              </div>
              
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeTab === "register"
                    ? "opacity-100 transform translate-x-0 relative"
                    : "opacity-0 transform translate-x-12 absolute inset-0 pointer-events-none p-8 md:p-12 hidden"
                }`}
              >
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
                    <h2 className="text-xl font-headline font-semibold tracking-tight text-primary">Create an Account</h2>
                    <p className="text-sm text-secondary">
                      Enter your details to create a new workspace.
                    </p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name" className="text-secondary font-semibold uppercase tracking-wider text-xs">Full Name</Label>
                      <Input id="register-name" placeholder="e.g. Julian Vane" type="text" required className="py-3.5 px-4 bg-surface-container-low border-surface-variant/50 text-primary placeholder:text-outline focus-visible:ring-primary-container" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-secondary font-semibold uppercase tracking-wider text-xs">Email</Label>
                      <Input id="register-email" placeholder="hi@yourcompany.com" type="email" required className="py-3.5 px-4 bg-surface-container-low border-surface-variant/50 text-primary placeholder:text-outline focus-visible:ring-primary-container" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-secondary font-semibold uppercase tracking-wider text-xs">Password</Label>
                      <Input
                        id="register-password"
                        placeholder="Enter your password"
                        type="password"
                        required
                        className="py-3.5 px-4 bg-surface-container-low border-surface-variant/50 text-primary placeholder:text-outline focus-visible:ring-primary-container"
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary-container text-on-primary font-headline font-bold py-6 rounded-xl hover:bg-secondary hover:-translate-y-1 active:scale-[0.98] transition-all my-2">
                    Create Account
                  </Button>
                </form>

                <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-surface-variant/50 after:h-px after:flex-1 after:bg-surface-variant/50 my-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">Or</span>
                </div>

                <Button variant="outline" className="w-full py-6 rounded-xl border-[1.5px] border-outline-variant/30 hover:bg-surface-container text-primary flex items-center justify-center gap-3">
                  <img
                    alt="Google"
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDa6fP1D8s6Etg-gSLpwwUZtIpDrWCPgV9OIuzDjQ4sVmeAAxIIOb2-S1draTIvlOhuB4tJC6_2AqTY3T1SGPRCmT0045QGWGUID0FtCVU6W-lKliQKNJm8j9rNuCX79dQXBySbltApYzyqn5xJKlXJfaT4dW_p7iPcoasTBB8tShore4HAblmYdpl0320ZnE3sZ2qCmOGu2NKMerGr5DBDrpVQF9Z7kYsKUJJ3r5SV0HDgSEwWzq-4l1pabZnSus3Z2Invw_uEyyvE"
                  />
                  <span>Sign up with Google</span>
                </Button>
              </div>
            </div>

            {/* Footer Tonal Base */}
            <div className="bg-surface-container px-8 py-6 text-center border-t border-outline-variant/10">
              <p className="text-xs text-on-secondary-container/80 font-medium leading-relaxed">
                By continuing, you agree to our{" "}
                <Link className="text-primary font-bold hover:underline" href="#">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link className="text-primary font-bold hover:underline" href="#">
                  Academic Integrity Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </GSAPReveal>

        {/* Secondary CTA */}
        <GSAPReveal animation="fadeUp" delay={0.4}>
          <div className="mt-8 flex justify-center items-center gap-2">
            <span className="material-symbols-outlined text-tertiary text-lg">
              verified_user
            </span>
            <span className="text-[10px] font-bold text-secondary tracking-widest uppercase">
              Secured by The Curator Institutional Auth
            </span>
          </div>
        </GSAPReveal>
      </div>
    </main>
  );
}
