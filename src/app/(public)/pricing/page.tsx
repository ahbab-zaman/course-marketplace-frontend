"use client";

import React, { useState } from "react";
import { GSAPReveal } from "@/components/animations/GSAPReveal";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-secondary-fixed/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-surface-container-highest/40 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAI2uc50Rth_EwV4N0ZFIZJbGZY4SEAI-Lg2aEAihtmlEBZUAfRKjkeGYy1Jf9eRbmTzIQU4fYQ88lGba3Gwv71bI-Y4n-H0rBsgp7xJ2LKzOkjqaGuDVFbcrLSyL4PnglRGff5GtCk9nnaQBrCKjWoxH9zvcpSRX3i3tVlGyD0SQndPsVUGE_FFXjf1Ane4-7fd6c0xPBGEhQQXdTlEcXgs9xEh5v6u2NYLa4zqJ2hj1zLkFusgqtj_BT3Ttc2UEWMc-FKssnL-nQ')" }}></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20 mt-8">
          <GSAPReveal animation="fadeUp" delay={0.1}>
            <span className="inline-block py-1 px-4 rounded-full bg-surface-container text-secondary text-xs font-bold tracking-widest uppercase mb-6">
              Invest in your craft
            </span>
          </GSAPReveal>
          
          <GSAPReveal animation="fadeUp" delay={0.25}>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-6 leading-[1.1]">
              Curated Pricing for <br/>
              <span className="text-secondary italic">Serious</span> Minds.
            </h1>
          </GSAPReveal>

          <GSAPReveal animation="fadeUp" delay={0.4}>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              Select a plan that fits your academic journey. From individual mastery to enterprise-level research systems.
            </p>
          </GSAPReveal>
          
          {/* Monthly/Yearly Toggle */}
          <GSAPReveal animation="fadeUp" delay={0.55}>
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-semibold transition-colors ${!isYearly ? 'text-primary' : 'text-on-surface-variant'}`}>
                Monthly
              </span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-7 bg-surface-container-highest rounded-full p-1 transition-colors relative focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <div className={`w-5 h-5 bg-primary-container rounded-full shadow-sm transition-transform duration-300 ease-in-out ${isYearly ? "translate-x-7" : "translate-x-0"}`}></div>
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold transition-colors ${isYearly ? 'text-primary' : 'text-on-surface-variant'}`}>
                  Yearly
                </span>
                <span className="px-2 py-0.5 bg-on-tertiary-container/10 text-on-tertiary-container rounded text-[10px] font-bold uppercase tracking-wider">
                  -20% Save
                </span>
              </div>
            </div>
          </GSAPReveal>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-6xl mx-auto">
          
          {/* Starter Tier */}
          <GSAPReveal animation="scale" delay={0.7} className="h-full">
            <div className="h-full flex flex-col bg-surface-container-lowest p-10 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8 flex-1">
                <h3 className="font-headline text-xl font-bold text-primary mb-2">Starter</h3>
                <p className="text-on-surface-variant text-sm">Essentials for solo learners beginning their curated journey.</p>
                <div className="mt-8">
                  <span className="text-5xl font-bold tracking-tighter text-primary font-headline">
                    ${isYearly ? "23" : "29"}
                  </span>
                  <span className="text-on-surface-variant text-sm font-medium">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  5 Active Courses
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Standard Analytics
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Community Support
                </li>
              </ul>
              <button className="w-full bg-surface-container-high text-primary py-4 rounded-xl font-headline font-bold text-sm hover:bg-surface-variant transition-colors active:scale-95 border border-outline-variant/30">
                Get Started
              </button>
            </div>
          </GSAPReveal>

          {/* Pro Tier (Most Popular) */}
          <GSAPReveal animation="scale" delay={0.8} className="lg:-mt-8 z-20">
            <div className="bg-primary text-on-primary p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden transform lg:scale-105 border border-tertiary-container/40">
              <div className="absolute top-0 right-0 p-6 z-10">
                <div className="bg-on-tertiary-container text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              </div>
              
              {/* Subtle Teal Glow Accent */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-on-tertiary-container/30 rounded-full blur-[80px]"></div>
              
              <div className="mb-8 relative z-10">
                <h3 className="font-headline text-2xl font-bold text-white mb-2">Pro Scholar</h3>
                <p className="text-white/70 text-sm">Advanced tools for serious academic research and deeper insight.</p>
                <div className="mt-8">
                  <span className="text-6xl font-bold tracking-tighter text-white font-headline">
                    ${isYearly ? "63" : "79"}
                  </span>
                  <span className="text-white/60 text-sm font-medium">/month</span>
                </div>
              </div>
              
              <ul className="space-y-5 mb-12 relative z-10">
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Unlimited Active Courses
                </li>
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Predictive Learning Analytics
                </li>
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Priority Support Response
                </li>
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Personalized Mentor Sessions
                </li>
              </ul>
              
              <button className="relative z-10 w-full bg-white text-primary py-4 rounded-xl font-headline font-extrabold text-sm hover:bg-secondary-container transition-all active:scale-95 shadow-xl">
                Level Up Now
              </button>
            </div>
          </GSAPReveal>

          {/* Enterprise Tier */}
          <GSAPReveal animation="scale" delay={0.9} className="h-full">
            <div className="h-full flex flex-col bg-surface-container-lowest p-10 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8 flex-1">
                <h3 className="font-headline text-xl font-bold text-primary mb-2">Enterprise</h3>
                <p className="text-on-surface-variant text-sm">Systemic integration for institutions and research teams.</p>
                <div className="mt-8">
                  <span className="text-5xl font-bold tracking-tighter text-primary font-headline">
                    ${isYearly ? "199" : "249"}
                  </span>
                  <span className="text-on-surface-variant text-sm font-medium">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Custom SSO & Security
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Institution-wide Dashboard
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Dedicated Account Lead
                </li>
              </ul>
              <button className="w-full bg-primary-container text-on-primary py-4 rounded-xl font-headline font-bold text-sm hover:bg-secondary transition-colors active:scale-95">
                Contact Sales
              </button>
            </div>
          </GSAPReveal>
          
        </div>

        {/* Asymmetric Trust Section */}
        <div className="mt-40 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <GSAPReveal animation="slideLeft" delay={0.2} className="w-full md:w-1/2">
            <img
              alt="Student studying"
              className="w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNGk6_GWoJnMmVn6bs363g8XnFf5XdtHgpcrrMkjpbaByPG0YrZJk1DvXLkFLNt5GscFCL0hm-Q1SXva1Ai2Yb0wynmDsY88nBcXk1zP33ozz_RWTzAEd9THGvMRLoD8_708jYUsZEZhjieRx7ajwRtEZOGIXiot0DBmLt5sy2V21pRGZkOZJCN5D-M8dEOS4lDhPxka-dGaS-S7bi54x6NpNh4RZd0myLPnBs8BK6fu7wVapwcOIx_hFSr-qMxalS6hP2yY5brj0"
            />
          </GSAPReveal>
          
          <div className="w-full md:w-1/2 space-y-12">
            <GSAPReveal animation="fadeUp" delay={0.3}>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1]">
                Why the world's top curators choose our platform.
              </h2>
            </GSAPReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <GSAPReveal animation="fadeUp" delay={0.4}>
                <div className="space-y-3 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-tertiary-container transition-colors duration-500">
                    <span className="material-symbols-outlined text-on-tertiary-container text-2xl group-hover:text-white transition-colors duration-500">
                      auto_awesome
                    </span>
                  </div>
                  <h4 className="font-bold text-primary text-xl">Intelligent Curation</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Our AI suggests resources based on your actual research path, not generic trends.
                  </p>
                </div>
              </GSAPReveal>

              <GSAPReveal animation="fadeUp" delay={0.5}>
                <div className="space-y-3 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center group-hover:bg-tertiary-container transition-colors duration-500">
                    <span className="material-symbols-outlined text-on-tertiary-container text-2xl group-hover:text-white transition-colors duration-500">
                      architecture
                    </span>
                  </div>
                  <h4 className="font-bold text-primary text-xl">Modular Design</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Structure your learning workspace exactly how your mind naturally organizes info.
                  </p>
                </div>
              </GSAPReveal>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
