import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | aswnss",
    default: "aswnss",
  },
  description:
    "Software developer and co-founder of Soft Served Web. Building innovative solutions with Next.js, React, and modern web technologies.",
  authors: [{ name: "Aswin Lal M", url: "https://www.linkedin.com/in/aswnss" }],
  creator: "Aswin Lal M",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "aswnss",
    url: "/",
    title: "aswnss — Aswin Lal M",
    description:
      "Software developer and co-founder of Soft Served Web. Building innovative solutions with Next.js, React, and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aswnss",
    title: "aswnss — Aswin Lal M",
    description:
      "Software developer and co-founder of Soft Served Web. Building innovative solutions with Next.js, React, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="GTM-KZMXN4HW" />
      </body>
    </html>
  );
}
