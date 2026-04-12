"use client";

import React, { useState } from "react";
import { GSAPReveal } from "@/components/animations/GSAPReveal";
import Link from "next/link";

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
                    ? "opacity-100 transform translate-x-0"
                    : "opacity-0 transform -translate-x-12 absolute inset-0 pointer-events-none p-8 md:p-12"
                }`}
              >
                {/* Social Logins */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-[1.5px] border-outline-variant/30 hover:bg-surface-container transition-all group">
                    <img
                      alt="Google"
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDa6fP1D8s6Etg-gSLpwwUZtIpDrWCPgV9OIuzDjQ4sVmeAAxIIOb2-S1draTIvlOhuB4tJC6_2AqTY3T1SGPRCmT0045QGWGUID0FtCVU6W-lKliQKNJm8j9rNuCX79dQXBySbltApYzyqn5xJKlXJfaT4dW_p7iPcoasTBB8tSor4HAblmYdpl0320ZnE3sZ2qCmOGu2NKMerGr5DBDrpVQF9Z7kYsKUJJ3r5SV0HDgSEwWzq-4l1pabZnSus3Z2Invw_uEyyvE"
                    />
                    <span className="text-sm font-medium text-primary">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-[1.5px] border-outline-variant/30 hover:bg-surface-container transition-all group">
                    <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform text-primary">apple</span>
                    <span className="text-sm font-medium text-primary">Apple</span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center mb-8">
                  <div className="flex-grow border-t border-surface-variant/50"></div>
                  <span className="flex-shrink mx-4 text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">
                    Or continue with email
                  </span>
                  <div className="flex-grow border-t border-surface-variant/50"></div>
                </div>

                {/* Form */}
                <form action="#" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5 focus-within:text-primary-container text-outline-variant transition-colors">
                    <label
                      className="block text-xs font-semibold text-secondary uppercase tracking-wider ml-1"
                      htmlFor="login_email"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
                        mail
                      </span>
                      <input
                        className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border-none rounded-xl text-primary placeholder:text-outline focus:ring-2 focus:ring-primary-container transition-all"
                        id="login_email"
                        placeholder="name@university.edu"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 focus-within:text-primary-container text-outline-variant transition-colors">
                    <div className="flex justify-between items-center ml-1">
                      <label
                        className="block text-xs font-semibold text-secondary uppercase tracking-wider"
                        htmlFor="login_password"
                      >
                        Password
                      </label>
                      <Link
                        href="/forgot-password"
                        className="text-[10px] font-bold text-secondary-fixed-dim hover:text-primary transition-colors uppercase tracking-widest"
                      >
                        Forgot?
                      </Link>
                    </div>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
                        lock
                      </span>
                      <input
                        className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border-none rounded-xl text-primary placeholder:text-outline focus:ring-2 focus:ring-primary-container transition-all"
                        id="login_password"
                        placeholder="••••••••"
                        type="password"
                      />
                      <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-primary transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-lg opacity-70">visibility</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 py-2 cursor-pointer group">
                    <input
                      className="w-4 h-4 rounded border-outline-variant text-primary-container focus:ring-primary-container cursor-pointer"
                      id="remember"
                      type="checkbox"
                    />
                    <label
                      className="text-sm text-on-surface-variant font-medium cursor-pointer group-hover:text-primary transition-colors"
                      htmlFor="remember"
                    >
                      Keep me logged in for 30 days
                    </label>
                  </div>

                  <button
                    className="w-full bg-primary-container text-on-primary font-headline font-bold py-4 rounded-xl shadow-lg shadow-primary-container/20 hover:bg-secondary transition-all hover:-translate-y-1 active:scale-[0.98]"
                    type="submit"
                  >
                    Enter Workspace
                  </button>
                </form>
              </div>
              
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeTab === "register"
                    ? "opacity-100 transform translate-x-0"
                    : "opacity-0 transform translate-x-12 absolute inset-0 pointer-events-none p-8 md:p-12"
                }`}
              >
                {/* Social Registrations */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-[1.5px] border-outline-variant/30 hover:bg-surface-container transition-all group">
                    <img
                      alt="Google"
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDa6fP1D8s6Etg-gSLpwwUZtIpDrWCPgV9OIuzDjQ4sVmeAAxIIOb2-S1draTIvlOhuB4tJC6_2AqTY3T1SGPRCmT0045QGWGUID0FtCVU6W-lKliQKNJm8j9rNuCX79dQXBySbltApYzyqn5xJKlXJfaT4dW_p7iPcoasTBB8tSor4HAblmYdpl0320ZnE3sZ2qCmOGu2NKMerGr5DBDrpVQF9Z7kYsKUJJ3r5SV0HDgSEwWzq-4l1pabZnSus3Z2Invw_uEyyvE"
                    />
                    <span className="text-sm font-medium text-primary">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-[1.5px] border-outline-variant/30 hover:bg-surface-container transition-all group">
                    <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform text-primary">apple</span>
                    <span className="text-sm font-medium text-primary">Apple</span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center mb-8">
                  <div className="flex-grow border-t border-surface-variant/50"></div>
                  <span className="flex-shrink mx-4 text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">
                    Or register with email
                  </span>
                  <div className="flex-grow border-t border-surface-variant/50"></div>
                </div>

                {/* Form */}
                <form action="#" className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5 focus-within:text-primary-container text-outline-variant transition-colors">
                    <label
                      className="block text-xs font-semibold text-secondary uppercase tracking-wider ml-1"
                      htmlFor="register_name"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
                        person
                      </span>
                      <input
                        className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border-none rounded-xl text-primary placeholder:text-outline focus:ring-2 focus:ring-primary-container transition-all"
                        id="register_name"
                        placeholder="e.g. Julian Vane"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 focus-within:text-primary-container text-outline-variant transition-colors">
                    <label
                      className="block text-xs font-semibold text-secondary uppercase tracking-wider ml-1"
                      htmlFor="register_email"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
                        mail
                      </span>
                      <input
                        className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border-none rounded-xl text-primary placeholder:text-outline focus:ring-2 focus:ring-primary-container transition-all"
                        id="register_email"
                        placeholder="name@university.edu"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 focus-within:text-primary-container text-outline-variant transition-colors">
                    <div className="flex justify-between items-center ml-1">
                      <label
                        className="block text-xs font-semibold text-secondary uppercase tracking-wider"
                        htmlFor="register_password"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2">
                        lock
                      </span>
                      <input
                        className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border-none rounded-xl text-primary placeholder:text-outline focus:ring-2 focus:ring-primary-container transition-all"
                        id="register_password"
                        placeholder="••••••••"
                        type="password"
                      />
                      <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-primary transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-lg opacity-70">visibility</span>
                      </button>
                    </div>
                  </div>

                  <button
                    className="w-full bg-primary-container text-on-primary font-headline font-bold py-4 rounded-xl shadow-lg shadow-primary-container/20 hover:bg-secondary transition-all hover:-translate-y-1 active:scale-[0.98] mt-2"
                    type="submit"
                  >
                    Create Account
                  </button>
                </form>
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
