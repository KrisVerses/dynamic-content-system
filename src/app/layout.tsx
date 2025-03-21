import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '@/components/Providers'
import Navbar from "@/components/ui/Navbar";
import Footer from '@/components/ui/Footer'

// Initialize Inter font with optimization
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Dynamic Content System",
  description: "Interactive blog built with Next.js and Contentlayer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Providers>
          <div className="flex-1">
            <header className="sticky top-0 z-50">
              <Navbar />
            </header>
            <main className="container mx-auto px-4">
              {children}
            </main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

/*
LAYOUT BEST PRACTICES:

1. Font Optimization:
   - Next.js font optimization
   - Font display swap
   - Subset optimization

2. Performance:
   - Minimal layout components
   - Optimized header with sticky positioning
   - Backdrop blur for depth

3. Accessibility:
   - Language attribute
   - Semantic HTML
   - Proper document structure

4. Responsive Design:
   - Container with auto margins
   - Consistent padding
   - Full viewport height

5. Theme Support:
   - Dark mode compatibility
   - Smooth transitions
   - System preference respect
*/
