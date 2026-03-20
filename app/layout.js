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
title: "LeJeune Glass | Custom Frameless Glass Atlanta",
description: "Premium frameless glass shower enclosures, stair railings, wine rooms, and architectural glass installations across Metro Atlanta.",
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
