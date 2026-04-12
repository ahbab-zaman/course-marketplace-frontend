"use client";

import React, { useState } from "react";
import { GSAPReveal } from "@/components/animations/GSAPReveal";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CourseDetailsPage() {
  const { id } = useParams();
  
  // State for the curriculum accordion
  const [openModule, setOpenModule] = useState<number | null>(1);

  const toggleModule = (moduleIndex: number) => {
    setOpenModule(openModule === moduleIndex ? null : moduleIndex);
  };

  return (
    <main className="max-w-[1440px] mx-auto px-6 lg:px-8 pt-32 pb-24">
      {/* Breadcrumb & Title Section */}
      <div className="mb-12">
        <GSAPReveal animation="fadeUp" delay={0.1}>
          <div className="flex items-center gap-2 text-label text-secondary text-xs uppercase tracking-widest mb-4">
            <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-on-surface font-semibold">The Architecture of Minimalism</span>
          </div>
        </GSAPReveal>

        <GSAPReveal animation="fadeUp" delay={0.2}>
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary tracking-tighter leading-[1.1] mb-6 max-w-4xl">
            Advanced Spatial Composition in Modern Editorial Design
          </h1>
        </GSAPReveal>

        <GSAPReveal animation="fadeUp" delay={0.3}>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Prof. Julian Vane"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByCSURXdSa6xLuhdPOdonoYdshnx2kzqZ6Qerb-I0Jxayh_w5W28WG77Lbd2iqaWldK3fEWKpBDqJKWHgMIGI8rQDC3ryWWvKavu86xDfdONcm9ShdOcXZ7s7fjms8FuDboQZ0btF3lKVXt0e6txTmggdjaR6faCxGmHiOQRrONCmQRz4-A1C7GkR0t-cP-5A9SeHaqCM7VfgN5RVFAQjN4L7uFxtXWLmZDyawWZyomdmhMdfVjKW1mX21fsWJZbia_k_H3zqzbOw"
                />
              </div>
              <span className="font-headline font-semibold text-sm">Prof. Julian Vane</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-secondary">
              <span className="material-symbols-outlined text-[#FFB703]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="font-bold text-on-surface">4.9</span>
              <span>(2,450 students)</span>
            </div>
            <div className="bg-tertiary/5 px-3 py-1 rounded-full text-[10px] font-bold text-tertiary uppercase tracking-tighter shadow-sm border border-tertiary/10">
              Bestseller
            </div>
          </div>
        </GSAPReveal>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative">
        {/* Left Content: Preview & Details */}
        <div className="flex-1 space-y-16 lg:max-w-[calc(100%-448px)]">
          {/* Video Preview */}
          <GSAPReveal animation="scale" delay={0.4}>
            <div className="relative group aspect-video rounded-3xl overflow-hidden bg-primary shadow-xl cursor-pointer">
              <img
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                alt="Minimalist architecture interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK_GskqT-ifP0xx5MmS6Wf5AoB6xxGsaTboy3fsCxzzc2k4JwNQzLLlN6wCRp0H7c9tosOomTnS6OpNbYwj5TKpG_bW1FtWZvwbF_OM-qD4UIf_263XlFKQrOXzpfnZU8OW4ZcNsjW8HHNxWjS3ZZJ1Y2pLKhhR4b0VwiESuu5RZt2F5TEZDGu3lX3T9rZCxkrKPUXSdvv5hvJuyLyDmX0dAXUc9-4oDhH08lZdOJAii4RJzLXrVEGSXGFn5WkVgF6-x_iYsp0Ybw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-primary text-4xl ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="text-white">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Previewing Module 01</p>
                  <h3 className="font-headline font-bold text-xl drop-shadow-md">The Psychology of Empty Space</h3>
                </div>
                <span className="text-white/80 bg-black/20 px-2 py-1 rounded backdrop-blur-sm text-sm font-label drop-shadow-md">04:32</span>
              </div>
            </div>
          </GSAPReveal>

          {/* Description */}
          <GSAPReveal animation="fadeUp" delay={0.2}>
            <section>
              <h2 className="font-headline font-bold text-2xl text-primary mb-6">About this Course</h2>
              <div className="prose prose-stone max-w-none text-secondary leading-relaxed space-y-4">
                <p className="text-lg text-on-surface-variant">
                  This isn't just a design course; it's an exploration of silence.
                  We study how to command attention by removing the unnecessary,
                  focusing on the refined tension between typography and void.
                </p>
                <p>
                  Through twelve intensive modules, you will learn the "Digital Curator" methodology—a system designed to elevate user interfaces into digital masterpieces. We move beyond standard grid systems into the realm of intentional asymmetry and tonal depth.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                  <span className="material-symbols-outlined text-tertiary mb-3 text-3xl">speed</span>
                  <h4 className="font-bold text-sm text-primary mb-1">Self-Paced</h4>
                  <p className="text-xs text-secondary">24 hours of content</p>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                  <span className="material-symbols-outlined text-tertiary mb-3 text-3xl">workspace_premium</span>
                  <h4 className="font-bold text-sm text-primary mb-1">Certificate</h4>
                  <p className="text-xs text-secondary">Verified by The Curator</p>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                  <span className="material-symbols-outlined text-tertiary mb-3 text-3xl">devices</span>
                  <h4 className="font-bold text-sm text-primary mb-1">Multi-Device</h4>
                  <p className="text-xs text-secondary">Offline access available</p>
                </div>
              </div>
            </section>
          </GSAPReveal>

          {/* Curriculum (Accordion Style) */}
          <GSAPReveal animation="fadeUp" delay={0.3}>
            <section>
              <h2 className="font-headline font-bold text-2xl text-primary mb-8">Course Curriculum</h2>
              <div className="space-y-4">
                {/* Module 1 */}
                <div className={`rounded-3xl overflow-hidden bg-surface-container-lowest border ${openModule === 1 ? 'border-primary/20 shadow-md' : 'border-outline-variant/20 hover:border-outline-variant/40'} transition-all duration-300`}>
                  <div 
                    className="px-8 py-6 flex items-center justify-between cursor-pointer select-none"
                    onClick={() => toggleModule(1)}
                  >
                    <div className="flex items-center gap-6">
                      <span className={`font-headline font-black text-3xl ${openModule === 1 ? 'text-primary/20' : 'text-outline-variant/40'} transition-colors`}>01</span>
                      <div>
                        <h3 className={`font-bold ${openModule === 1 ? 'text-primary' : 'text-secondary'} transition-colors`}>Foundations of Minimalist Hierarchy</h3>
                        <p className="text-xs text-secondary font-medium mt-1">4 Lessons • 52m</p>
                      </div>
                    </div>
                    <span className={`material-symbols-outlined text-secondary transition-transform duration-300 ${openModule === 1 ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openModule === 1 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-8 space-y-2">
                      <div className="flex items-center justify-between py-3 border-t border-outline-variant/5 group cursor-pointer">
                        <div className="flex items-center gap-4">
                          <span className="material-symbols-outlined text-xl text-tertiary group-hover:scale-110 transition-transform">play_circle</span>
                          <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">The Anatomy of the Grid</span>
                        </div>
                        <span className="text-xs font-bold text-white bg-tertiary px-2 py-1 rounded shadow-sm">Preview</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-t border-outline-variant/5 group cursor-pointer">
                        <div className="flex items-center gap-4 opacity-70">
                          <span className="material-symbols-outlined text-xl text-outline-variant">lock</span>
                          <span className="text-sm font-medium text-on-surface-variant">Type Pairing for Academic Authority</span>
                        </div>
                        <span className="text-xs font-medium text-secondary">15:00</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-t border-outline-variant/5 group cursor-pointer">
                        <div className="flex items-center gap-4 opacity-70">
                          <span className="material-symbols-outlined text-xl text-outline-variant">lock</span>
                          <span className="text-sm font-medium text-on-surface-variant">Whitespace as a Structural Element</span>
                        </div>
                        <span className="text-xs font-medium text-secondary">18:20</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 2 */}
                <div className={`rounded-3xl overflow-hidden bg-surface-container-lowest border ${openModule === 2 ? 'border-primary/20 shadow-md' : 'border-outline-variant/20 hover:border-outline-variant/40'} transition-all duration-300`}>
                  <div 
                    className="px-8 py-6 flex items-center justify-between cursor-pointer select-none"
                    onClick={() => toggleModule(2)}
                  >
                    <div className="flex items-center gap-6">
                      <span className={`font-headline font-black text-3xl ${openModule === 2 ? 'text-primary/20' : 'text-outline-variant/40'} transition-colors`}>02</span>
                      <div>
                        <h3 className={`font-bold ${openModule === 2 ? 'text-primary' : 'text-secondary'} transition-colors`}>Advanced Color Theory & Tonal Depth</h3>
                        <p className="text-xs text-secondary font-medium mt-1">6 Lessons • 1h 45m</p>
                      </div>
                    </div>
                    <span className={`material-symbols-outlined text-secondary transition-transform duration-300 ${openModule === 2 ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openModule === 2 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-8 space-y-2">
                      <div className="flex items-center justify-between py-3 border-t border-outline-variant/5">
                        <div className="flex items-center gap-4 opacity-70">
                          <span className="material-symbols-outlined text-xl text-outline-variant">lock</span>
                          <span className="text-sm font-medium text-on-surface-variant">Neutral Palettes in Digital Spaces</span>
                        </div>
                        <span className="text-xs font-medium text-secondary">22:00</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-t border-outline-variant/5">
                        <div className="flex items-center gap-4 opacity-70">
                          <span className="material-symbols-outlined text-xl text-outline-variant">lock</span>
                          <span className="text-sm font-medium text-on-surface-variant">Designing for Dark Mode with Elegance</span>
                        </div>
                        <span className="text-xs font-medium text-secondary">19:40</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Module 3 */}
                <div className={`rounded-3xl overflow-hidden bg-surface-container-lowest border ${openModule === 3 ? 'border-primary/20 shadow-md' : 'border-outline-variant/20 hover:border-outline-variant/40'} transition-all duration-300`}>
                  <div 
                    className="px-8 py-6 flex items-center justify-between cursor-pointer select-none"
                    onClick={() => toggleModule(3)}
                  >
                    <div className="flex items-center gap-6">
                      <span className={`font-headline font-black text-3xl ${openModule === 3 ? 'text-primary/20' : 'text-outline-variant/40'} transition-colors`}>03</span>
                      <div>
                        <h3 className={`font-bold ${openModule === 3 ? 'text-primary' : 'text-secondary'} transition-colors`}>The Art of the Asymmetric Layout</h3>
                        <p className="text-xs text-secondary font-medium mt-1">5 Lessons • 1h 10m</p>
                      </div>
                    </div>
                    <span className={`material-symbols-outlined text-secondary transition-transform duration-300 ${openModule === 3 ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </GSAPReveal>
        </div>

        {/* Right Content: Sticky Enrollment Card */}
        <aside className="w-full lg:w-[400px] shrink-0">
          <div className="sticky top-28 lg:top-32 z-10">
            <GSAPReveal animation="slideLeft" delay={0.5}>
              <div className="bg-surface-container-lowest rounded-3xl shadow-2xl p-8 border border-outline-variant/10 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                
                <div className="mb-8 relative z-10">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl xs:text-5xl font-headline font-extrabold text-primary tracking-tight">$149.00</span>
                    <span className="text-secondary line-through text-sm font-bold">$299.00</span>
                  </div>
                  <p className="text-[11px] font-bold text-white bg-[#D62828] inline-block px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                    Limited time: 50% Early Bird discount
                  </p>
                </div>
                
                <div className="space-y-4 mb-10 relative z-10">
                  <button className="w-full py-4 rounded-xl bg-primary-container text-on-primary font-headline font-bold text-base hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-sm">
                    Enroll Now
                  </button>
                  <button className="w-full py-4 rounded-xl border border-outline-variant/60 text-primary font-headline font-bold text-base hover:bg-surface-container hover:border-outline-variant transition-all hover:shadow-sm">
                    Add to Wishlist
                  </button>
                </div>
                
                <div className="space-y-5 mb-10 relative z-10 border-t border-outline-variant/10 pt-8">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                    Included in this course
                  </h4>
                  <ul className="space-y-3.5">
                    <li className="flex items-center gap-3 text-sm text-on-surface font-medium">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      24/7 Lifetime access
                    </li>
                    <li className="flex items-center gap-3 text-sm text-on-surface font-medium">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      Exclusive Figma resource pack
                    </li>
                    <li className="flex items-center gap-3 text-sm text-on-surface font-medium">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      Private Slack community
                    </li>
                    <li className="flex items-center gap-3 text-sm text-on-surface font-medium">
                      <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                      1-on-1 Portfolio review
                    </li>
                  </ul>
                </div>
                
                {/* Instructor Bio Mini */}
                <div className="pt-8 border-t border-outline-variant/10 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden border-2 border-white shadow-sm shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        alt="Julian Vane"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBnMBMN20bb19wJ2j57CsWp6TZDJKzYtbCnlke8S9wgRPRZ9C7Bagiq2zOKRNKx-Zb-_R6kVQrV-GfHeBgbFAmDaBb7ZnDQGZ_k9_UvMkFhzJFmUGg_y9piUsjCUYFVo6s9OlCQVb5nVa7FQBTHMqJb5G-jU4fkPBuRnJz90QLUekrrwMIjMjocrQrraHEp0iY0f7QezDOUmB7UgmnRYwZSVBp5BUPHL3M3pHb6uPiWJ9fPi2LUuZ5Ffon3mh_Lp9ODz_cuQSNq-0"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm font-headline">Julian Vane</p>
                      <p className="text-xs text-secondary font-medium mt-0.5">Design Director at Atelier</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-secondary italic border-l-2 border-primary/20 pl-3">
                    "Design is the silent ambassador of your brand. I help you master the silence."
                  </p>
                </div>
              </div>
              
              {/* Trust Badge */}
              <div className="mt-8 flex items-center justify-center gap-3 text-secondary/60">
                <span className="material-symbols-outlined text-lg">security</span>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary">
                  Secure Checkout Powered by The Curator
                </p>
              </div>
            </GSAPReveal>
          </div>
        </aside>
      </div>

      {/* Related Courses */}
      <GSAPReveal animation="fadeUp" delay={0.2}>
        <section className="mt-32 border-t border-outline-variant/10 pt-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div>
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-3">
                Expand Your Curriculum
              </h2>
              <p className="text-secondary font-medium">
                Recommended for students of Architectural Minimalism
              </p>
            </div>
            <Link href="/courses" className="text-sm font-bold text-primary border-b-2 border-primary/20 pb-1 hover:border-primary transition-colors uppercase tracking-wider">
              View All Courses
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <Link href="/courses/1" className="block w-full h-full">
              <div className="h-full group bg-surface-container-lowest rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-outline-variant/10 hover:shadow-xl hover:border-primary/10 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt="The Brutalist Legacy in Modern UI"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWggZMG0eACU-o-Tdk5P8gsBzXvt4lYAwcYMEW602aHMCxmWi0zZTYt0BnqHYjeN8SerCOztYTSCYktwJRT4hc1UtZX4AGTk8Bb58tSYHI-F8PVjo9UwXbivydsaaKsn3cl_lX4shbR9KCT-gen2sYjZt1I7c_y3KvXohSCrAB588hBBqP7gnbJIFn5slh0PS9UDvJyqUJ8n_qi2TDPn1p0Tl9gqqRRgDpAdMjKg1ZZuzib7bwda51XDuyqu_7C-8n0PZL3cDwfyg"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm text-[10px] font-bold text-primary uppercase tracking-wider">
                    Theory
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 relative bg-surface-container-lowest z-10">
                  <h3 className="font-headline font-bold text-xl text-primary leading-tight mb-4 flex-1 group-hover:text-secondary transition-colors">
                    The Brutalist Legacy in Modern UI
                  </h3>
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                    <span className="text-lg font-extrabold text-primary font-headline">$89.00</span>
                    <div className="flex items-center gap-1.5 bg-surface-container px-2 py-1 rounded-md">
                      <span className="material-symbols-outlined text-sm text-[#FFB703]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold text-primary">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Course Card 2 */}
            <Link href="/courses/2" className="block w-full h-full">
              <div className="h-full group bg-surface-container-lowest rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-outline-variant/10 hover:shadow-xl hover:border-primary/10 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt="Creative Direction for High-End Platforms"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZDULc2vqDxMBKnfeFxSqj2QkjsyF5uvbKj-1c0MClHry5qOqoVT_PdH33Bc5p_PvgOD3gEVJ0xmmPT94d9DDuiZiK-mBLBeS3GSmpUrIL2R2MdCeaDuqEuh-vp1gUMoL2InjEbdBzyIbLSpX47_OzG-OeCVcnfq0Dbf04-DOmrFJcevPaPVZisEDyD3zrxl7toaPrelVSz4I-WGW0cqv-nQ6eJKJHlhGaPJ_hEt_3ewvVmf8evZ6cDANjI1dWlECD1AH1vuADVgU"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm text-[10px] font-bold text-primary uppercase tracking-wider">
                    Business
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 relative bg-surface-container-lowest z-10">
                  <h3 className="font-headline font-bold text-xl text-primary leading-tight mb-4 flex-1 group-hover:text-secondary transition-colors">
                    Creative Direction for High-End Platforms
                  </h3>
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                    <span className="text-lg font-extrabold text-primary font-headline">$129.00</span>
                    <div className="flex items-center gap-1.5 bg-surface-container px-2 py-1 rounded-md">
                      <span className="material-symbols-outlined text-sm text-[#FFB703]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold text-primary">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Course Card 3 */}
            <Link href="/courses/3" className="block w-full h-full hidden lg:block">
              <div className="h-full group bg-surface-container-lowest rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-outline-variant/10 hover:shadow-xl hover:border-primary/10 flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt="Fluid Motion: Enhancing the Tonal Experience"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACByAImhYNe69xHTx_uD9u9zk_3H64PMWWEwncga3pNw0f21IgUOV4FYBt44q5KcXxFFdxMH3tTzsLNGpynp7iPtiUezUnmhnxrMiVrV7Xg6GEAe159Ic3XRIPqUzmQ61RlsiPYL6gvwo5g_AjsO1ZVgG94vQzTvU8soy48uzJKbBxu2RmX3-kXbuASb3dq3aFqc8hub2T6G9XzPwo0NvB_2cMpbCTqEbtBKKDrtdk9swMbrFGh3CIYn0EiPBciviosUzTKvTo9LU"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm text-[10px] font-bold text-primary uppercase tracking-wider">
                    Motion
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 relative bg-surface-container-lowest z-10">
                  <h3 className="font-headline font-bold text-xl text-primary leading-tight mb-4 flex-1 group-hover:text-secondary transition-colors">
                    Fluid Motion: Enhancing the Tonal Experience
                  </h3>
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                    <span className="text-lg font-extrabold text-primary font-headline">$199.00</span>
                    <div className="flex items-center gap-1.5 bg-surface-container px-2 py-1 rounded-md">
                      <span className="material-symbols-outlined text-sm text-[#FFB703]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-xs font-bold text-primary">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </GSAPReveal>
    </main>
  );
}
