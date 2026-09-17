import type React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { headers } from "next/headers";
import "./globals.css";
import { MetaPixel } from "@/components/meta-pixel";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { defaultLocale, isLocale } from "@/lib/i18n";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-locale");
  const locale = isLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className={`font-sans antialiased`}>
        <MetaPixel />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
