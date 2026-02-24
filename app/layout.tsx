import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | aswnss",
    default: "aswnss",
  },
  description:
    "Software developer and co-founder of Soft Served Web. Building innovative solutions with Next.js, React, and modern web technologies.",
  authors: [{ name: "Aswin Lal M", url: "https://www.linkedin.com/in/aswnss" }],
  creator: "Aswin Lal M",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
