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
  title: "Sharanya Gada — Software Engineer",
  description:
    "Software Engineer specializing in distributed systems, Java/Spring Boot, Kafka, AWS, and AI integration. Currently at Southwest Airlines.",
  keywords: ["Sharanya Gada", "Software Engineer", "Java", "Spring Boot", "Kafka", "AWS", "Distributed Systems"],
  authors: [{ name: "Sharanya Gada" }],
  openGraph: {
    title: "Sharanya Gada — Software Engineer",
    description: "Engineering systems that never sleep.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        {children}
      </body>
    </html>
  );
}
