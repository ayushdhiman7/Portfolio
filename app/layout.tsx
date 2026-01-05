import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description:
    "A modern software engineer portfolio website. Built with Next.js, TypeScript, and Tailwind CSS. Design by Olga (@olgaaverchenko) from Figma Community.",
  keywords: ["software engineer", "web development", "full stack", "software development"],
  authors: [
    { name: "zakariamouhid", url: "https://zakariamouhid.blogspot.com/" },
  ],
  openGraph: {
    title: "Software Engineer Portfolio",
    description: "A modern software engineer portfolio website",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineer Portfolio",
    description: "A modern software engineer portfolio website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
