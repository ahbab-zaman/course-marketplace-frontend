import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-surface-container py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6 max-w-xs">
          <div className="text-2xl font-black text-[#26170c] font-headline">
            The Curator
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Building the foundation for tomorrow's intellectual leaders through
            intentional digital environments.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h5 className="text-xs font-black uppercase tracking-widest text-primary">
              Platform
            </h5>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/courses">
                  Courses
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/methodology">
                  Methodology
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/community">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-xs font-black uppercase tracking-widest text-primary">
              Company
            </h5>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-xs font-black uppercase tracking-widest text-primary">
              Social
            </h5>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Twitter
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-semibold text-outline tracking-widest uppercase">
        <span>© 2024 The Curator Academy. All Rights Reserved.</span>
        <div className="flex gap-8">
          <Link className="hover:text-primary transition-colors" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="hover:text-primary transition-colors" href="/terms">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
