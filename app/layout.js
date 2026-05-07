import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
variable: "--font-cormorant",
subsets: ["latin"],
weight: ["300", "400", "600"],
});

const montserrat = Montserrat({
variable: "--font-montserrat",
subsets: ["latin"],
weight: ["300", "400", "500", "600"],
});

export const metadata = {
title: {
  default: "Custom Frameless Glass Showers & Railings Atlanta | LeJeune Glass",
  template: "%s | LeJeune Glass",
},
description: "Atlanta's premier frameless glass installer. Custom shower enclosures, glass railings, wine rooms & more across Metro Atlanta. Veteran-owned. Free estimate.",
metadataBase: new URL("https://www.lejeuneshowerglass.com"),
alternates: { canonical: "/" },
openGraph: {
  title: "Custom Frameless Glass Showers & Railings Atlanta | LeJeune Glass",
  description: "Atlanta's premier frameless glass installer. Custom shower enclosures, glass railings, wine rooms & more. Veteran-owned. Free estimate.",
  url: "https://www.lejeuneshowerglass.com",
  siteName: "LeJeune Glass",
  type: "website",
  locale: "en_US",
  images: [{ url: "/images/og-hero.jpg", width: 1200, height: 630, alt: "Custom frameless glass shower installation by LeJeune Glass, Metro Atlanta" }],
},
twitter: {
  card: "summary_large_image",
  title: "Custom Frameless Glass Showers & Railings Atlanta | LeJeune Glass",
  description: "Atlanta's premier frameless glass installer. Veteran-owned. Free estimate.",
  images: ["/images/og-hero.jpg"],
},
robots: { index: true, follow: true },
verification: { google: "hmeEJftELW2EgywBTXkQ31XNZM6MWoJ2azpQxG6v6S0" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
return (
<html lang="en">
<body className={`${cormorant.variable} ${montserrat.variable}`}>
{children}
</body>
</html>
);
}
