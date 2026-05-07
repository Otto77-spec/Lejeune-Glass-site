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
  title: {
    default: "Custom Frameless Glass Showers & Railings Atlanta | LeJeune Glass",
    template: "%s | LeJeune Glass",
  },
  description:
    "Atlanta's premier frameless glass installer. Custom shower enclosures, glass railings, wine rooms & more across Metro Atlanta. Veteran-owned. Free estimate.",
  metadataBase: new URL("https://www.lejeuneshowerglass.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Custom Frameless Glass Showers & Railings Atlanta | LeJeune Glass",
    description:
      "Atlanta's premier frameless glass installer. Custom shower enclosures, glass railings, wine rooms & more. Veteran-owned. Free estimate.",
    url: "https://www.lejeuneshowerglass.com",
    siteName: "LeJeune Glass",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Custom frameless glass shower installation by LeJeune Glass, Metro Atlanta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Frameless Glass Showers & Railings Atlanta | LeJeune Glass",
    description:
      "Atlanta's premier frameless glass installer. Veteran-owned. Free estimate.",
    images: ["/images/og-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
