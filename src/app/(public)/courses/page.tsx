"use client";

import React, { useState } from "react";
import { GSAPReveal } from "@/components/animations/GSAPReveal";
import Link from "next/link";

export default function CoursesListingPage() {
  const [priceRange, setPriceRange] = useState(250);

  const courses = [
    {
      id: "1",
      title: "The Poetics of Space: Modern Architectural Theory",
      category: "FINE ARTS",
      rating: "4.9",
      description: "An exploration of how physical environments shape human consciousness and collective behavior.",
      instructor: "Dr. Julian Thorne",
      price: "$189",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_VeURlkH58SdLUqs7G3cdTT7i-yMH-D0F0EdwGKRmqQAFPEmUjerWnAIrLzzrhky0Xj3xI6hkAKix7tHER1WhkBgqCTQDDTiu8SBJwr7kwyBk1cGXN3KO_zMgs__2s3KrD4CCLvR-o8-gD1itGMJarcpjZv3gYG7g1GSX1BtiV830uTDoPECHXvePCtRrw3D6lRRlpIJpTBBRwr-chtrXVndswP9DcM2k51ALNELcxN3XqC34DLCafKuRpMbxd1j6Cc2Yzplyu48",
      instructorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgyTF_m00lWNvgcB7hSbN51KwEIGrfAmyeeO1_qyJ7TVbIs4EeV7R7MM-1bEY3ktHYhcvXQIXt1ZAJlvfxNGDWzPVxYSTIVPvOuWqIvk0oFNayJVO0Po2qx-ndDIHmbtMzayQttQbWmBM2yeCKgmx4crfuYW0ukYv8G961T8ZNVUB6zsgw4zvzU-R40FFGDeydfIX8mhx3HVHGGaoQbkVJQLu45Tjg0edE_D-TqlYFRrIJPQdnFkwVkxWtpBQg4jOw_kQYQwQ6SQE",
      badge: "New Release",
    },
    {
      id: "2",
      title: "Quantum Ethics: The Future of Computational Logic",
      category: "SCIENCES",
      rating: "4.7",
      description: "Navigating the philosophical implications of subatomic computation and algorithmic morality.",
      instructor: "Prof. Elena Vance",
      price: "$245",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0lYzpOWv6d13El6-6FZNSqcdfegj4u8a7xpwZ63bY37uM5xt_waIwO9s9QkhuncwQygJPs66w6uyS93DpcHkhDy0AWSkImjpeKY9ErWe9oS75hs703YNeefod8JkZ6ygneOAlf5YxuKtXb0sKYCwkC-7I8Kz9_E-4U17nC6gDK0e3vvoir-pGI-v-zwdDf8PY2-0L_tkW7IUBo3hSjJydRycJt0-zWISA1GMZ-n32NufQbB1AxMpih5eOjfyLTO93AMyeY7G0r1k",
      instructorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW1v1_JpZ_RZGDZ5uRxDPXB44oTnd8iPgYmBFBCAwa32b-hkDVOvL0Cm55Yvh5kYrpbDb9pOQlhm8cVAIMhtjnJ2BFE8yvIaWE414JfbXSlWZa0NJicwATVB9lMq4VDJK51BZZmaYp4Nv1ScHFZ2KYry1hSpfHqE2tw-Ki-5rbEi1B8B-DlT-IoL9DuFEJJEt68LRc4uHDW2qw2PeuAKzyHXpxWm2XCNZwy9Mud0xwgVmUAN0NcGAcFlGMjkf2V-WhT5NjVLjzM0E",
    },
    {
      id: "3",
      title: "Visual Rhetoric: Narrative in the Age of AI",
      category: "MEDIA",
      rating: "5.0",
      description: "Mastering the art of storytelling through synthetic media and generative visual systems.",
      instructor: "Marcus Solis",
      price: "$129",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbXUubNFd4zIvxAQHIZLabTMz9ucVMYZggTWqu_Gq3t1E05mE_RCeNF9G5z40lr8ne61-TLPK5LAEH4H-IDW38ueuyf3M1XocmaIX-aj9-qfbiGYuWORijPuw8KzpcPQ9aoxCoVOepBDv3hWB4OOH9itxysRUkK3vz0KeFNgcowRdf7G306dTuMy69JnlSDWkQMjL-M33EHPybM1XVmGTkwIbJlKDXH3iMhqwrEpHLs2yEZMkfDwI7eTuLvCt9F2QckXCgc8l3R8g",
      instructorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBjb6iEh6wNU72tlhE80BNq4apx2s3MH6uuZrGoYa5BM4VvHjYG7jhxQs0zI132pT1IYagUelbFm1z2F2bKJBSGLYKXopHkBMzbCTPGugO2O0j4hAoO07_AGn1d6ihFDTYqwj3Ds-W7NLrvtXecrBRl3AgxE541HZyndxwxXDIo-nt0l5f_iKLo6BDaFL2qMKD-h-Ud08I-B5W_aC7JoBl4k1o3KfX-nQVXrXi5Fn0IX8jtmmRb9UVNjHozcaJ65y9JXHC6jTGQEM",
    },
    {
      id: "4",
      title: "Epistemology in Flux: Post-Truth Discourse",
      category: "PHILOSOPHY",
      rating: "4.8",
      description: "A critical analysis of knowledge construction in the contemporary digital landscape.",
      instructor: "Dr. Sarah K. Lee",
      price: "$155",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeJP4EDpYUJFFut2VClDBLQtdjh2X-7pz0PWg13gaMh9qz47JgGOMC-3dsEtIZ03c5JyRZV0HCEkUHbMhldXQV8SOM1D_ZgmrmLc6Uw_DLSURWP0k_QDjWP97lYeZk3_ojqatTCzG5x5k4bcdimZx51g_I0OXh9wqzIBhVegXHJX-vCYqS8TqE566Le3mb76GFu3BOCdac7t7JQiXFU5KkgqG9yRKjZn1Kcq4QFpwLTWnxTeDVRTfUjSujSNmEOr2abvwkOI0Ba9c",
      instructorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKlGEw-aArgveMqCUxAbqp0W7hcZ4_CtbseUSXDsJW9zgaN7Mefty0LUqwRBMvZBPTlCtLUdXQvF6p9a5R_0a7UjPABwP8zTHc7_oT16E7NcIiV_NIpch_c1XDghNm6TwhvcDEmYcSgBkqV0jW0a3bOrkYWtZZSUXoZkMS9o1dfyZKN51mKT7rdvGDEP94Q5_otuj3vvZ4n4eL-P9ZFQYCi3OWHILnSoSKT3PpdY1ntIPuBrYw3Fo0GXzN7yhzCY5FVNpSTOlEJdA",
    },
    {
      id: "5",
      title: "Creative Coding for the Interactive Web",
      category: "CREATIVE",
      rating: "4.9",
      description: "A deep dive into WebGL, shaders, and creating immersive three dimensional experiences.",
      instructor: "Alan Watts",
      price: "$120",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjoBloEeTcJtbfQw7iEbJaqOSbwqWLfcYEKstZC4suWgQb9mbHmLo5GnpTz8JH7DP6zaq5tCgEy3572s8DOoREduojCjf864RCIYoq-e87xW_bGE_BvE4il_0z9MXvJE0Phn_7fN2ic_mFcogPNMFz9diaiwjRZ7YL5Uipn0T-jCUw1yAhmoFwPrJ2DqazH-4GDY8BRU3Gbw3aq6_dtaLb6P3uhvpp63_9n5lWxupoc6WWMc5l-Kafu0gfc0lagoG8AZ-tcmAeA9k",
      instructorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuByCSURXdSa6xLuhdPOdonoYdshnx2kzqZ6Qerb-I0Jxayh_w5W28WG77Lbd2iqaWldK3fEWKpBDqJKWHgMIGI8rQDC3ryWWvKavu86xDfdONcm9ShdOcXZ7s7fjms8FuDboQZ0btF3lKVXt0e6txTmggdjaR6faCxGmHiOQRrONCmQRz4-A1C7GkR0t-cP-5A9SeHaqCM7VfgN5RVFAQjN4L7uFxtXWLmZDyawWZyomdmhMdfVjKW1mX21fsWJZbia_k_H3zqzbOw",
      badge: "Bestseller",
    }
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen bg-surface relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-surface-container-low to-transparent pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-72 shrink-0 pb-12">
          <div className="sticky top-28 space-y-10">
            <GSAPReveal animation="fadeUp" delay={0.1}>
              <h3 className="font-headline font-bold text-primary text-xl mb-6">Filters</h3>
            </GSAPReveal>

            <div className="space-y-10">
              {/* Categories */}
              <GSAPReveal animation="slideRight" delay={0.2}>
                <section>
                  <label className="text-xs uppercase tracking-widest font-bold text-secondary mb-4 block">Category</label>
                  <div className="space-y-3">
                    {["Social Sciences", "Fine Arts", "Philosophy", "Digital Media"].map((category, idx) => (
                      <label key={category} className="flex items-center gap-3 group cursor-pointer">
                        <input
                          defaultChecked={idx === 0}
                          className="w-5 h-5 rounded border-outline-variant/40 text-primary-container focus:ring-primary-container/20 transition-colors"
                          type="checkbox"
                        />
                        <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">{category}</span>
                      </label>
                    ))}
                  </div>
                </section>
              </GSAPReveal>

              {/* Level */}
              <GSAPReveal animation="slideRight" delay={0.3}>
                <section>
                  <label className="text-xs uppercase tracking-widest font-bold text-secondary mb-4 block">Academic Level</label>
                  <div className="space-y-3">
                    {["Undergraduate", "Mastery", "Research Fellow"].map((level, idx) => (
                      <label key={level} className="flex items-center gap-3 group cursor-pointer">
                        <input
                          className="w-5 h-5 border-outline-variant/40 text-primary-container focus:ring-primary-container/20 transition-colors"
                          name="level"
                          type="radio"
                          defaultChecked={idx === 0}
                        />
                        <span className="text-sm font-medium text-on-surface transition-colors">{level}</span>
                      </label>
                    ))}
                  </div>
                </section>
              </GSAPReveal>

              {/* Price Range */}
              <GSAPReveal animation="slideRight" delay={0.4}>
                <section>
                  <label className="text-xs uppercase tracking-widest font-bold text-secondary mb-4 block">Tuition Range</label>
                  <input
                    className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container"
                    type="range"
                    min="49"
                    max="499"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                  />
                  <div className="flex justify-between mt-3 text-xs font-bold text-on-surface-variant">
                    <span>$49</span>
                    <span className="text-primary-container bg-primary-container/10 px-2 py-0.5 rounded">${priceRange}</span>
                    <span>$499+</span>
                  </div>
                </section>
              </GSAPReveal>
            </div>

            {/* Institutional Access Card */}
            <GSAPReveal animation="scale" delay={0.5}>
              <div className="p-6 bg-primary-container rounded-2xl relative overflow-hidden group shadow-lg">
                <div className="relative z-10">
                  <h4 className="text-on-primary font-headline font-bold text-lg mb-2">Institutional Access</h4>
                  <p className="text-on-primary-container text-xs leading-relaxed mb-5">
                    Request a curriculum demo for your faculty or department.
                  </p>
                  <button className="text-xs font-bold bg-white text-primary px-4 py-2.5 rounded-lg hover:bg-secondary-container transition-colors shadow-sm">
                    Learn More
                  </button>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                  <span className="material-symbols-outlined text-8xl text-white">school</span>
                </div>
              </div>
            </GSAPReveal>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="flex-1 w-full">
          <header className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <GSAPReveal animation="slideRight" delay={0.1}>
              <div>
                <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-3 leading-tight">
                  Academic Catalogs
                </h1>
                <p className="text-secondary font-medium text-lg">
                  Refined curricula for the modern intellectual.
                </p>
              </div>
            </GSAPReveal>
            
            <GSAPReveal animation="slideLeft" delay={0.2}>
              <div className="flex items-center gap-4 bg-surface-container-low border border-outline-variant/20 p-2 rounded-xl shadow-sm">
                <span className="text-xs font-bold text-secondary px-3 uppercase tracking-widest">Sort by:</span>
                <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer outline-none">
                  <option>Curator's Choice</option>
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </GSAPReveal>
          </header>

          {/* Bento Grid Layout for Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, idx) => (
              <GSAPReveal key={course.id} animation="fadeUp" delay={0.2 + (idx * 0.1)}>
                <Link href={`/courses/${course.id}`} className="block h-full">
                  <article className="h-full group bg-surface-container-lowest rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col border border-outline-variant/10 hover:-translate-y-2">
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
                        src={course.image}
                      />
                      {course.badge && (
                        <div className="absolute top-4 left-4 z-20">
                          <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                            {course.badge}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1 relative bg-surface-container-lowest">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-bold text-on-tertiary-container bg-tertiary-fixed-dim/20 px-2.5 py-1 rounded-md tracking-wider">
                          {course.category}
                        </span>
                        <div className="flex items-center gap-1.5 ml-auto">
                          <span className="material-symbols-outlined text-sm text-[#FFB703]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            star
                          </span>
                          <span className="text-xs font-bold text-primary">{course.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-headline font-bold text-xl text-primary leading-tight mb-3 group-hover:text-secondary transition-colors duration-300">
                        {course.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>
                      
                      <div className="mt-auto pt-5 border-t border-outline-variant/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full overflow-hidden bg-surface-container shadow-sm">
                            <img
                              alt={course.instructor}
                              className="w-full h-full object-cover"
                              src={course.instructorImage}
                            />
                          </div>
                          <span className="text-xs font-bold text-secondary">{course.instructor}</span>
                        </div>
                        <span className="text-lg font-headline font-extrabold text-primary">{course.price}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </GSAPReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
