import type React from "react";
import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics"; // import client component

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
    descript

