import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-body antialiased`}
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
