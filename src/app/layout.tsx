import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Vania Billiard · Meja Billiard Premium & Custom | Workshop Ambarawa",
    template: "%s | Vania Billiard",
  },
  description:
    "Spesialis meja billiard lokal, custom order, pengiriman nasional, dan aksesoris billiard lengkap. Workshop di Ambarawa. Konsultasi ukuran ruangan via WhatsApp.",
  keywords: [
    "meja billiard",
    "billiard table",
    "custom billiard",
    "meja billiard jogja",
    "meja billiard jawa tengah",
    "meja billiard ambarawa",
    "aksesoris billiard",
    "stick billiard",
    "kain laken",
    "billiard Indonesia",
  ],
  authors: [{ name: "Vania Billiard" }],
  creator: "Vania Billiard",
  metadataBase: new URL("https://vaniabilliard.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://vaniabilliard.com",
    siteName: "Vania Billiard",
    title: "Vania Billiard · Meja Billiard Premium & Custom",
    description:
      "Spesialis meja billiard lokal, custom request, pengiriman nasional, dan aksesoris billiard lengkap.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vania Billiard · Workshop Meja Billiard Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vania Billiard · Meja Billiard Premium & Custom",
    description: "Spesialis meja billiard lokal, custom request, pengiriman nasional.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
