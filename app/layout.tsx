import type React from "react";
import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Swift GvN - Portfolio | Given Kaasonde",
  description:
    "Modern portfolio of Swift GvN (Given Kaasonde) - Self-taught Frontend Developer specializing in JavaScript, TypeScript, HTML, CSS, Tailwind CSS, and Next.js. Currently expanding into fullstack development with Python.",
  keywords:
    "Swift GvN, Given Kaasonde, Frontend Developer, JavaScript, TypeScript, Next.js, React, Tailwind CSS, Web Development, Portfolio",
  authors: [{ name: "Given Kaasonde", url: "https://swiftgvn.dev" }],
  creator: "Swift GvN",
  openGraph: {
    title: "Swift GvN - Frontend Developer Portfolio",
    description: "Self-taught Frontend Developer specializing in modern web technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift GvN - Frontend Developer Portfolio",
    description: "Self-taught Frontend Developer specializing in modern web technologies",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Track SPA route changes
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-P90LDJP987", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <html lang="en" className={`${merriweather.variable} ${openSans.variable} antialiased`}>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-P90LDJP987"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P90LDJP987');
          `}
        </Script>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
