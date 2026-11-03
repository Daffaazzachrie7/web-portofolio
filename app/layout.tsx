import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Daffa Mochammad Azzachrie | Portfolio",
  description:
    "Portofolio pribadi Daffa Mochammad Azzachrie - Data Analyst | Software Development | UI/UX & Mobile Engineering.",
  keywords: [
    "Daffa Mochammad Azzachrie",
    "Portfolio",
    "Data Analyst",
    "Software Development",
    "Mobile Engineering",
    "Kotlin",
    "Python",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Daffa Mochammad Azzachrie" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full">
      <body className="h-full antialiased text-white selection:bg-[#5798D8] selection:text-white">
        {children}
      </body>
    </html>
  );
}
