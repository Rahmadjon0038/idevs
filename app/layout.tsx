import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://murodillayev.uz"),
  title: {
    default: "Hojiakbar Murodillayev | MERN Stack & Mobile Developer",
    template: "%s | Hojiakbar Murodillayev",
  },
  description:
    "Hojiakbar Murodillayev — 4+ yillik tajribaga ega MERN Stack va Mobile Developer. Web va mobil ilovalarni JavaScript ekotizimi asosida ishlab chiqaman.",
  keywords: [
    "MERN Stack Developer",
    "Mobile Developer",
    "React Developer",
    "React Native Developer",
    "Node.js Developer",
    "JavaScript Engineer",
    "TypeScript",
    "Web and Mobile Development",
    "Uzbekistan Developer",
    "Freelance Developer",
  ],
  authors: [{ name: "Hojiakbar Murodillayev" }],
  creator: "Hojiakbar Murodillayev",

  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://murodillayev.uz",
    siteName: "Hojiakbar Murodillayev — MERN & Mobile Developer",
    title: "Hojiakbar Murodillayev | MERN Stack & Mobile Developer",
    description:
      "Web va mobil ilovalarni MERN stack asosida ishlab chiqaman. Real loyihalar, freelance tajriba va production-ready yechimlar.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hojiakbar Murodillayev — MERN Stack & Mobile Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hojiakbar Murodillayev | MERN Stack & Mobile Developer",
    description:
      "MERN Stack va React Native asosida web va mobil ilovalar ishlab chiqaman.",
    creator: "@hojiakbar",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
