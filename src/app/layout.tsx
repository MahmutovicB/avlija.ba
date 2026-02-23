import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Avlija.ba — Uređenje i održavanje dvorišta | Sarajevo",
  description:
    "Profesionalno uređenje i održavanje dvorišta u Sarajevu i okolini. Košenje, sezonsko održavanje, uklanjanje stabala i kompletna njega vašeg dvorišta.",
  keywords: [
    "uređenje dvorišta",
    "košenje trave",
    "održavanje dvorišta",
    "uklanjanje stabala",
    "Sarajevo",
    "hortikultura",
    "landscaping",
    "avlija",
  ],
  openGraph: {
    title: "Avlija.ba — Vaša avlija, vaše utočište",
    description:
      "Profesionalno uređenje i održavanje dvorišta u Sarajevu i okolini.",
    locale: "bs_BA",
    type: "website",
    siteName: "Avlija.ba",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
