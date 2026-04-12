"use client";

import React from "react";
import { GSAPReveal } from "@/components/animations/GSAPReveal";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen">
      {/* Hero Section: Intentional Asymmetry */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 space-y-8">
          <GSAPReveal animation="slideRight" delay={0.1}>
            <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-headline font-extrabold tracking-tighter text-primary leading-[1.05]">
              The Digital <br />
              <span className="text-secondary italic">Curator.</span>
            </h1>
          </GSAPReveal>
          
          <GSAPReveal animation="fadeUp" delay={0.3}>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-lg font-light">
              We believe education should be a collection of masterpieces, not a conveyor belt of content. Our methodology transforms digital learning into a high-end architectural experience.
            </p>
          </GSAPReveal>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          <GSAPReveal animation="scale" delay={0.4}>
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                alt="Modern minimalist architectural studio"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_y-d6dH2kLS7nH6X4yJ8FD_YzDJqKoOhfGM_FZ259_jiOJvlFFCtT9BLv9I0awI1EIcmntc55MLzsmfUjIEcgc3s-9dEQfS-M5YEOlSiYsd3cxrKJwEoZutUjT273TpowS2fT9dkpHbNQcXGILyJg4L27J11SLiGp8VDPIG1JGwXZQhO0DjGISKQm0HoKka3THrm-8o-BVFUKN-GVba_8BsRI4L5q_HhrIOjY8p3FYknWNcdTd3rToLnt5hBQGqnplKYbsLEeH4"
              />
            </div>
            {/* Decorative abstract shape */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-surface-container-highest rounded-3xl -z-10 transform -rotate-6"></div>
          </GSAPReveal>
        </div>
      </section>

      {/* Mission & Vision: Tonal Layering */}
      <section className="bg-surface-container py-32 px-6 lg:px-8 mt-12 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-fixed/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary-fixed/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          <GSAPReveal animation="fadeUp" delay={0.2} className="h-full">
            <div className="h-full bg-surface-container-lowest p-12 lg:p-16 rounded-[2.5rem] shadow-sm space-y-8 flex flex-col border border-outline-variant/10">
              <div className="w-14 h-14 bg-primary-container rounded-2xl flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-primary tracking-tight">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                To redefine the digital learning landscape by creating a sanctuary of knowledge where quality precedes quantity. We envision a world where education is curated as meticulously as a fine art gallery.
              </p>
            </div>
          </GSAPReveal>
          
          <GSAPReveal animation="fadeUp" delay={0.3} className="h-full">
            <div className="h-full bg-surface-container-lowest p-12 lg:p-16 rounded-[2.5rem] shadow-sm space-y-8 flex flex-col border border-outline-variant/10">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined text-2xl">auto_stories</span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-primary tracking-tight">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                To empower researchers and lifelong learners through an "Academic Atelier" framework that provides cognitive clarity, structural elegance, and premium educational resources.
              </p>
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Methodology: Bento Grid */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-32">
        <div className="text-center mb-20 space-y-4">
          <GSAPReveal animation="fadeUp" delay={0.1}>
            <span className="text-xs uppercase tracking-[0.3em] font-label font-bold text-secondary">The Approach</span>
          </GSAPReveal>
          <GSAPReveal animation="fadeUp" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
              The Curator Methodology
            </h2>
          </GSAPReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:min-h-[600px] auto-rows-fr">
          {/* Cell 1 */}
          <GSAPReveal animation="scale" delay={0.1} className="md:col-span-8">
            <div className="h-full bg-surface-container-low rounded-[2rem] p-10 lg:p-14 flex flex-col justify-end relative overflow-hidden group border border-outline-variant/30">
              {/* Decorative graphic */}
              <div className="absolute top-0 right-0 p-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                <span className="material-symbols-outlined text-[100px] text-surface-container-highest opacity-70">layers</span>
              </div>
              <div className="relative z-10 space-y-4">
                <h4 className="text-3xl font-headline font-bold text-primary">Structural Serenity</h4>
                <p className="max-w-md text-on-surface-variant text-lg">
                  We utilize the Layering Principle to organize information, reducing cognitive load and fostering deep focus.
                </p>
              </div>
            </div>
          </GSAPReveal>

          {/* Cell 2 */}
          <GSAPReveal animation="scale" delay={0.2} className="md:col-span-4">
            <div className="h-full bg-primary-container text-on-primary rounded-[2rem] p-10 lg:p-14 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-500"></div>
              <span className="material-symbols-outlined text-5xl relative z-10 group-hover:-translate-y-2 transition-transform duration-500">architecture</span>
              <div className="relative z-10 mt-12">
                <h4 className="text-2xl font-headline font-bold mb-4">Precision Design</h4>
                <p className="text-on-primary/80">
                  Every pixel serves a pedagogical purpose. No noise, just knowledge.
                </p>
              </div>
            </div>
          </GSAPReveal>

          {/* Cell 3 */}
          <GSAPReveal animation="scale" delay={0.3} className="md:col-span-4">
            <div className="h-full bg-[#FFB703]/10 rounded-[2rem] p-10 lg:p-14 flex flex-col items-center justify-center text-center group border border-[#FFB703]/20">
              <span className="material-symbols-outlined text-6xl text-[#FFB703] mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <h4 className="text-2xl font-headline font-bold text-primary">Premium Pedagogy</h4>
              <p className="text-sm mt-3 text-on-surface-variant">
                Vetted by Ivy League faculty and design industry leaders.
              </p>
            </div>
          </GSAPReveal>

          {/* Cell 4 */}
          <GSAPReveal animation="scale" delay={0.4} className="md:col-span-8">
            <div className="h-full bg-surface-container-highest rounded-[2rem] p-10 lg:p-14 flex flex-col sm:flex-row items-center gap-8 justify-between border border-outline-variant/20 group">
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-3xl font-headline font-bold text-primary">The Humanist Touch</h4>
                <p className="text-on-surface-variant mt-4 text-lg">
                  Integrating organic earthy tones to ground high-tech learning experiences.
                </p>
              </div>
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-500 shrink-0">
                <span className="material-symbols-outlined text-5xl text-secondary group-hover:scale-110 transition-transform duration-500">palette</span>
              </div>
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Faculty Section: Premium Team Cards */}
      <section className="bg-surface py-32 px-6 lg:px-8 border-t border-outline-variant/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <GSAPReveal animation="fadeUp" delay={0.1}>
                <h2 className="text-5xl md:text-6xl font-headline font-bold text-primary tracking-tighter mb-6">
                  Our Faculty.
                </h2>
              </GSAPReveal>
              <GSAPReveal animation="fadeUp" delay={0.2}>
                <p className="text-lg md:text-xl text-on-surface-variant font-light">
                  Meet the curators behind your academic transformation. A collective of researchers, designers, and innovators.
                </p>
              </GSAPReveal>
            </div>
            <GSAPReveal animation="fadeUp" delay={0.3}>
              <button className="group flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:text-secondary transition-colors">
                View Full Directory
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </button>
            </GSAPReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Faculty Card 1 */}
            <GSAPReveal animation="fadeUp" delay={0.2}>
              <div className="space-y-6 group cursor-pointer">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-surface-container relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt="Dr. Elena Voss"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV638-DPyDdqeAb9zurouFKydF6RaA2kHWPnKKJ9_KPe5dkYy6XxL4TCPbbaYH24ctBMkzUkkiBgtnpHofgeepHvP5TpVxemN9deAIMw6njsmujO3KLg7eb14oiyk_6jaiwMllj9qVp9NM_4mg7MYupcABDo32K2w-4r_NZEKIndNtZPb0ctWHs8eJupropA6Pa2PCE_pHZaAVRmH8nLeWivvS1JB_oOVb638GkZBI9zbvIQyW_QRqM0-V35fFWeJZNoxgAg_z3HA"
                  />
                </div>
                <div>
                  <span className="text-xs font-label font-bold text-secondary tracking-widest uppercase">Lead Curator</span>
                  <h4 className="text-2xl font-headline font-bold text-primary mt-2">Dr. Elena Voss</h4>
                  <p className="text-on-surface-variant mt-2 italic text-sm">PhD in Cognitive Architecture, MIT</p>
                </div>
              </div>
            </GSAPReveal>

            {/* Faculty Card 2 */}
            <GSAPReveal animation="fadeUp" delay={0.4}>
              <div className="space-y-6 group cursor-pointer md:mt-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-surface-container relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt="Julian Thorne"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlXP6_1oLo5HJLBtVUXnkPNLiGzEDGv-UjOCnt_Bh1tHQEIu6xZVAw7W9hBLCi6ndaLxx-KL9I5FIPR_-k9viFxkHBFErDG3rxUOwxvtN8geaYx2lQebsQFjubdGgPt6ocq3PSlizdMwEUa-WwL0FDo3gVtA_F1PqeZQRF7-6D23OLEk-X1ujniMUe5PZConlT4IBSdnHkHzVRemRWE59FWWB_dvT4qEf4yz9yYdkL1fWIaHUGzmXlYsuhCV0bMXhAJI_OWKbB_yI"
                  />
                </div>
                <div>
                  <span className="text-xs font-label font-bold text-secondary tracking-widest uppercase">Methodology Director</span>
                  <h4 className="text-2xl font-headline font-bold text-primary mt-2">Julian Thorne</h4>
                  <p className="text-on-surface-variant mt-2 italic text-sm">Head of Research, London Design Studio</p>
                </div>
              </div>
            </GSAPReveal>

            {/* Faculty Card 3 */}
            <GSAPReveal animation="fadeUp" delay={0.6}>
              <div className="space-y-6 group cursor-pointer md:mt-24">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-surface-container relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt="Maya Khol"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLk-SeW4O5-5Xb-IJcwo_7aWluld-fl91my6yYTCFmm9Gc4HsgGWtFlij9bBRWD72hZx_SaeDwwet2KAX8hx1Q983tyvTD_ZwcPxnjW5kLrv51ESQ1CsF_5TeG99ray4GvS0ENON_7j3NSzElDTCQL07HyB5RuHf-RdpnVNq_D31cRvz1NuwACuQ1IgWBBBYODQABSsDvTU0LHmgn8VK9wYiDRyUhtZv-YmscclwGfUDAPeQzg7MZvX_WGgqOqJLj881Fy0zWAex0"
                  />
                </div>
                <div>
                  <span className="text-xs font-label font-bold text-secondary tracking-widest uppercase">Experience Design</span>
                  <h4 className="text-2xl font-headline font-bold text-primary mt-2">Maya Khol</h4>
                  <p className="text-on-surface-variant mt-2 italic text-sm">Former UX Lead, Global Edu Group</p>
                </div>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-32 relative">
        <GSAPReveal animation="scale" delay={0.2}>
          <div className="bg-primary-container rounded-[2.5rem] p-16 md:p-24 lg:p-32 text-center text-on-primary relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight">
                Curate your future.
              </h2>
              <p className="max-w-2xl mx-auto text-on-primary-container text-lg md:text-xl">
                Join 15,000+ academics who have elevated their learning workspace with The Curator.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                <button className="px-8 py-5 bg-on-primary text-primary-container font-headline font-extrabold rounded-xl hover:bg-secondary hover:text-on-primary shadow-xl hover:-translate-y-1 transition-all duration-300">
                  Start Your Journey
                </button>
                <button className="px-8 py-5 bg-transparent border border-outline-variant/30 text-on-primary font-headline font-bold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300">
                  View Methodology
                </button>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2EC4B6]/10 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none"></div>
          </div>
        </GSAPReveal>
      </section>
    </main>
  );
}
