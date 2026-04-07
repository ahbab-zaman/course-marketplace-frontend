import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Course Marketplace — Learn from the Best",
    template: "%s | Course Marketplace",
  },
  description:
    "Discover thousands of expert-led courses. Learn new skills, advance your career, and explore your passions with our premium online learning platform.",
  keywords: [
    "online courses",
    "e-learning",
    "education",
    "programming",
    "design",
    "business",
  ],
  authors: [{ name: "Course Marketplace" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Course Marketplace",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
            <Toaster
              position="top-right"
              richColors
              closeButton
              theme="system"
            />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
