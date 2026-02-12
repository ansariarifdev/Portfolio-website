import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arif Ansari | Full-Stack Developer",
  description:
    "Full-stack developer specializing in MERN stack, Next.js, and building scalable, high-performance web applications. Explore my projects, skills, and experience.",
  keywords: [
    "Full-stack developer",
    "MERN stack",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Web development",
  ],
  authors: [{ name: "Arif Ansari" }],
  openGraph: {
    title: "Arif Ansari | Full-Stack Developer",
    description: "Building scalable web applications with modern technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
