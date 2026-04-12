import React from "react";
import { Hero3DCanvas } from "@/components/animations/Hero3DCanvas";
import { GSAPReveal } from "@/components/animations/GSAPReveal";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center min-h-[95vh] py-32 border-b border-outline-variant/20">
        
        {/* Background 3D Canvas layer - Full Screen Coverage */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80 mix-blend-multiply">
          <Hero3DCanvas />
        </div>
        
        {/* Subtle glowing center orb to ensure text legibility */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[120px] opacity-70 pointer-events-none z-0"></div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 flex flex-col items-center text-center mt-12">
          
          <GSAPReveal animation="fadeUp" delay={0.1} duration={1}>
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-outline-variant/50 bg-white/60 backdrop-blur-md shadow-sm">
              <span className="text-xs font-label font-bold text-secondary uppercase tracking-[0.2em]">Bridging Fees, Slippage & Rewards</span>
            </div>
          </GSAPReveal>

          <GSAPReveal animation="fadeUp" delay={0.25} duration={1.2}>
            <h1 className="font-headline font-extrabold text-[4.5rem] lg:text-[7rem] leading-[1.05] tracking-tight mb-8 drop-shadow-sm">
              <span className="text-primary block mb-2">We're building</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-tertiary block pb-2">
                Yield Farming 2.0
              </span>
            </h1>
          </GSAPReveal>
          
          <GSAPReveal animation="fadeUp" delay={0.4} duration={1.2}>
            <p className="text-lg md:text-2xl text-on-surface-variant font-body leading-relaxed mb-12 max-w-[700px] mx-auto">
              NOYA is an Omnichain Yield Aggregator that uses AI to predict and optimize yields, driving unparalleled academic efficiency.
            </p>
          </GSAPReveal>

          <GSAPReveal animation="fadeUp" delay={0.55} duration={1}>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/whitelist"
                className="group relative inline-flex items-center justify-center px-10 py-5 font-headline font-bold text-base text-on-primary bg-primary-container transition-all overflow-hidden rounded-full shadow-xl shadow-primary/10 hover:-translate-y-1 hover:bg-secondary"
              >
                Get Whitelist
              </Link>
              <button className="group flex items-center gap-4 text-base font-headline font-medium text-primary hover:text-secondary transition-colors">
                <div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/10 group-hover:border-secondary transition-all shadow-sm bg-white/50 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
                Watch video
              </button>
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Sponsor Marquee */}
      <section className="py-12 bg-surface-container-low overflow-hidden">
        <div className="flex flex-col items-center gap-8">
          <p className="text-xs font-label font-bold text-outline uppercase tracking-[0.2em]">Partnering with global institutions</p>
          <div className="flex flex-nowrap gap-16 md:gap-32 items-center opacity-40 grayscale">
            <span className="font-headline font-extrabold text-2xl tracking-tighter">DESIGN ACADEMY</span>
            <span className="font-headline font-extrabold text-2xl tracking-tighter">METRO UNIVERSITY</span>
            <span className="font-headline font-extrabold text-2xl tracking-tighter">STUDIO NINE</span>
            <span className="font-headline font-extrabold text-2xl tracking-tighter">ARCH LABS</span>
            <span className="font-headline font-extrabold text-2xl tracking-tighter">ELITE CRAFT</span>
          </div>
        </div>
      </section>

      {/* Category Bento */}
      <section className="px-8 py-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline font-extrabold text-4xl text-primary mb-4">Curated Categories</h2>
            <p className="text-on-surface-variant">Focusing on high-impact disciplines tailored for the future-focused professional.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Category 1 */}
          <div className="md:col-span-2 group bg-surface-container p-10 rounded-[2rem] hover:bg-surface-container-high transition-all duration-500 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
            <div className="z-10">
              <div className="w-14 h-14 bg-on-tertiary-container/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              </div>
              <h3 className="font-headline font-bold text-2xl text-primary mb-2">Architectural Systems</h3>
              <p className="text-on-surface-variant max-w-xs">Master the foundation of digital and physical structural design.</p>
            </div>
            <span className="material-symbols-outlined text-8xl absolute -bottom-4 -right-4 opacity-5 group-hover:scale-110 transition-transform">architecture</span>
          </div>
          
          {/* Category 2 */}
          <div className="group bg-surface-container p-10 rounded-[2rem] hover:bg-surface-container-high transition-all duration-500 min-h-[320px]">
            <div className="w-14 h-14 bg-on-tertiary-container/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
            </div>
            <h3 className="font-headline font-bold text-xl text-primary mb-2">Visual Arts</h3>
            <p className="text-sm text-on-surface-variant">Advanced theory of color, light, and motion.</p>
          </div>
          
          {/* Category 3 */}
          <div className="group bg-surface-container p-10 rounded-[2rem] hover:bg-surface-container-high transition-all duration-500 min-h-[320px]">
            <div className="w-14 h-14 bg-on-tertiary-container/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            </div>
            <h3 className="font-headline font-bold text-xl text-primary mb-2">Technological Logic</h3>
            <p className="text-sm text-on-surface-variant">Exploring the bridge between code and aesthetic.</p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="px-8 py-24 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline font-extrabold text-4xl text-primary mb-4">Elite Curriculum</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Selected by experts, built for masters. No fillers, just transformative knowledge.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-outline-variant/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Design workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWY-BXSr14arcQNYjGhWDU11dNN5c3YsEDuSdrd1aw1tVENwGTYTJ62qwlOPqcZjnpOLLS-GbaDjBtSGMTdhZr1a4nneKG9PaKtqZ1hiRh5E80l-A6phjgG4xv3DR1mC-NYWuDKkG-1UK4r0COscnG3PONMG8JD7L7wJ3k6pl_CS0UVjpUEcM8YijR6F4hJHRKNi2cJc2hKM4CDPw_OZ8NxO3hFET2om7SVc3I9BdrJOgeto7ES1DyydhDTLEOEnwzmtZ835EVlMk" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-surface-container-highest text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full">Foundation</span>
                  <div className="flex items-center text-[#FFB703]">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold ml-1 text-on-surface">4.9</span>
                  </div>
                </div>
                <h3 className="font-headline font-bold text-2xl text-primary mb-2">Spatial Design Mastery</h3>
                <p className="text-on-surface-variant text-sm mb-6">By Dr. Alistair Vance</p>
                <div className="flex justify-between items-center">
                  <p className="font-headline font-extrabold text-2xl text-primary">$499</p>
                  <button className="bg-primary-container text-on-primary px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-secondary transition-colors">Enroll Now</button>
                </div>
              </div>
            </div>
            
            {/* Course Card 2 */}
            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-outline-variant/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Architectural model" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP5W8TpjH7DN72dsWDTPC4_f-ozVJPFUjMTc4ThS1hUt5m0mEsPdDEHwbuwRIJvqYecagI_k3qzhp8spk-mqBaNcCCMwCJA3RTs41uo7TbEjSjV374ngr3CWd5qj8SMlzRizuYScgxFC0dup05qfZiyZmLPgEjA9XyczG4-UxOPXc6pG5DnwqedXPIn6DQ0NW96fLpC9e6JXKD5jJH4pKSK00LvRoMTUqa6Zbnz4Gms9PzpRryM9dHARv-W1WcCIw_Ypvc3lfAPNA" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-surface-container-highest text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full">Advanced</span>
                  <div className="flex items-center text-[#FFB703]">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold ml-1 text-on-surface">5.0</span>
                  </div>
                </div>
                <h3 className="font-headline font-bold text-2xl text-primary mb-2">Modernism in UX</h3>
                <p className="text-on-surface-variant text-sm mb-6">By Elena Rossi</p>
                <div className="flex justify-between items-center">
                  <p className="font-headline font-extrabold text-2xl text-primary">$720</p>
                  <button className="bg-primary-container text-on-primary px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-secondary transition-colors">Enroll Now</button>
                </div>
              </div>
            </div>
            
            {/* Course Card 3 */}
            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-outline-variant/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Glass prism" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRUueFNP7DyVF33nCJgYSBmEtq4qWhhYHgR4cd6rY1gax4VIdOKBIBDgtULGXtHdTGBvxmLWMJYJpR_LYhLGDACZqIB_4eQ3NZIQSfKGswPMmPpdiFvWEQopazGLAT39VT_0vsDwhtbCXMAO2hmy-9-rG_kmlF4GsbG7eHS0wenqsfP339t6ubFef43dLfu1J4SBUWtySiT_8w0gQgKmdl29RGMpHQdBQ3xLBu2W0rZChiC65whlqiNfGf2EEAljK2C_z95lMRvGg" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-surface-container-highest text-secondary text-[10px] font-bold uppercase tracking-widest rounded-full">Mastery</span>
                  <div className="flex items-center text-[#FFB703]">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold ml-1 text-on-surface">4.8</span>
                  </div>
                </div>
                <h3 className="font-headline font-bold text-2xl text-primary mb-2">Generative Aesthetics</h3>
                <p className="text-on-surface-variant text-sm mb-6">By Prof. Marcus Chen</p>
                <div className="flex justify-between items-center">
                  <p className="font-headline font-extrabold text-2xl text-primary">$550</p>
                  <button className="bg-primary-container text-on-primary px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-secondary transition-colors">Enroll Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-8 py-24">
        <div className="max-w-[1200px] mx-auto bg-surface-container p-12 lg:p-24 rounded-[3rem] text-center relative overflow-hidden border border-outline-variant/20 shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-fixed opacity-10 rounded-full -mr-32 -mt-32 blur-[60px]" />
          <div className="relative z-10">
            <h2 className="font-headline font-extrabold text-3xl lg:text-5xl text-primary mb-6">Weekly Curations</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mb-10">Subscribe to receive exclusive case studies, design breakdowns, and academic resources directly in your inbox.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                className="flex-1 bg-surface-container-lowest border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-secondary text-on-surface placeholder:text-on-surface-variant/50" 
                placeholder="Your academic email" 
                type="email" 
              />
              <button 
                type="button" 
                className="bg-primary-container text-on-primary px-8 py-4 rounded-xl font-headline font-bold hover:bg-secondary transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-24 max-w-[900px] mx-auto">
        <h2 className="font-headline font-extrabold text-4xl text-primary mb-12 text-center">Frequently Asked</h2>
        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className="bg-surface-container rounded-2xl p-6 md:p-8">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-headline font-bold text-lg text-primary">Are the courses accredited?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary">expand_more</span>
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Our curriculum is designed in partnership with leading global institutions. While we provide Certificates of Completion recognized by top studios, traditional university accreditation varies by region.
              </p>
            </details>
          </div>
          
          {/* FAQ Item 2 */}
          <div className="bg-surface-container rounded-2xl p-6 md:p-8">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-headline font-bold text-lg text-primary">Can I access content offline?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-secondary">expand_more</span>
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Yes, all students on the Premium tier can download resource packs and mobile-optimized video lessons for offline study within the platform's app.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
