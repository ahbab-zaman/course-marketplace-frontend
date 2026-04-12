"use client";

import React, { FormEvent } from "react";
import { GSAPReveal } from "@/components/animations/GSAPReveal";

export default function ContactPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <main className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      {/* Background Abstract Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-secondary-fixed/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-tertiary-fixed/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Contact Info */}
          <section className="w-full md:w-5/12">
            <header className="mb-12">
              <GSAPReveal animation="slideRight" delay={0.1}>
                <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-primary tracking-tighter mb-6 leading-tight">
                  Let's refine your <br />
                  <span className="text-secondary italic">academic vision.</span>
                </h1>
              </GSAPReveal>
              <GSAPReveal animation="slideRight" delay={0.25}>
                <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                  Whether you're seeking institutional access or individual guidance, our curation team is ready to assist your scholarly journey.
                </p>
              </GSAPReveal>
            </header>

            <div className="space-y-10">
              {/* Contact Method: Email */}
              <GSAPReveal animation="slideRight" delay={0.4}>
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0 group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">mail</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm uppercase tracking-widest text-secondary mb-1">
                      Email Us
                    </p>
                    <p className="text-xl font-medium text-primary group-hover:text-secondary-fixed transition-colors">
                      concierge@thecurator.edu
                    </p>
                  </div>
                </div>
              </GSAPReveal>

              {/* Contact Method: Call */}
              <GSAPReveal animation="slideRight" delay={0.5}>
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0 group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">call</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm uppercase tracking-widest text-secondary mb-1">
                      Call Us
                    </p>
                    <p className="text-xl font-medium text-primary group-hover:text-secondary-fixed transition-colors">
                      +1 (555) 829-4000
                    </p>
                  </div>
                </div>
              </GSAPReveal>

              {/* Contact Method: Location */}
              <GSAPReveal animation="slideRight" delay={0.6}>
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0 group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">location_on</span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm uppercase tracking-widest text-secondary mb-1">
                      Visit The Atelier
                    </p>
                    <p className="text-xl font-medium text-primary leading-snug group-hover:text-secondary-fixed transition-colors">
                      422 Scholars Row, <br />
                      Cambridge, MA 02138
                    </p>
                  </div>
                </div>
              </GSAPReveal>
            </div>

            {/* Aesthetic Image block */}
            <GSAPReveal animation="fadeUp" delay={0.8}>
              <div className="mt-16 relative aspect-video rounded-2xl overflow-hidden shadow-sm group">
                <img
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  alt="Modern minimal architect studio with large windows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgUqDS_r-TInJ2uYX5LflwZfGbS4emlrwsfNC28GnakVYk09wBYRQiJpnubMOEHVkG4lKm7jJxdN-vQCvbvRuNwIBO4aPGfOswXaHdynNRGw4vi3W4pWzhVECI8rNeZe_a410pYnyIAoGJ-efws_JA-z2Ec3VlBeZ0Jz4X2o7LhhMlXk_q54d6188V0NmwNqXYRYI7zwxY6PsTlRhn5pdqhlCWTjvOi9TmuOi49uD8BsxCrwOkzXdiGEnAdir4EnYTs_HRLgxXoNk"
                />
                <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
            </GSAPReveal>
          </section>

          {/* Right Column: Inquiry Form */}
          <section className="w-full md:w-7/12">
            <GSAPReveal animation="fadeUp" delay={0.3} className="h-full">
              <div className="h-full bg-surface-container-low rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-outline-variant/20">
                {/* Form decorative background */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-tertiary-fixed opacity-20 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="relative z-10">
                  <h2 className="font-headline text-3xl font-bold text-primary mb-10 tracking-tight">
                    Inquiry Portal
                  </h2>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3 group">
                        <label className="text-xs font-semibold uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">
                          Full Name
                        </label>
                        <input
                          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 text-primary placeholder:text-outline-variant focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all outline-none"
                          placeholder="Julian Thorne"
                          type="text"
                          required
                        />
                      </div>
                      <div className="space-y-3 group">
                        <label className="text-xs font-semibold uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">
                          Institutional Email
                        </label>
                        <input
                          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 text-primary placeholder:text-outline-variant focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all outline-none"
                          placeholder="j.thorne@university.edu"
                          type="email"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3 group/select relative">
                      <label className="text-xs font-semibold uppercase tracking-widest text-secondary group-focus-within/select:text-primary transition-colors">
                        Subject of Interest
                      </label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 text-primary focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all outline-none appearance-none cursor-pointer">
                          <option>Institutional Partnerships</option>
                          <option>Graduate Research Workspace</option>
                          <option>Curated Course Inquiry</option>
                          <option>Technical Support</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">
                          keyboard_arrow_down
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 group">
                      <label className="text-xs font-semibold uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">
                        Message
                      </label>
                      <textarea
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 text-primary placeholder:text-outline-variant focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all outline-none resize-none"
                        placeholder="How can our curation team support your research goals?"
                        rows={6}
                        required
                      ></textarea>
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        className="w-full group bg-primary-container text-on-primary font-headline font-extrabold py-5 rounded-xl hover:bg-primary shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative"
                      >
                        {/* Button hover effect overlay */}
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        <span className="relative z-10">Send Inquiry</span>
                        <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                          send
                        </span>
                      </button>
                      <p className="text-center mt-6 text-[11px] text-on-surface-variant font-medium uppercase tracking-widest opacity-80">
                        Response typical within 24 academic hours
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </GSAPReveal>
          </section>

        </div>
      </div>
    </main>
  );
}
