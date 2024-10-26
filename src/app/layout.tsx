import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AR Developers",
  description: "AR Test",
  openGraph: {
    title: "AR Developers",
    description: "AR Test",
    url: "https://ardevelopers.vercel.app", // Updated URL
    siteName: "AR Developers",
    images: [
      {
        url: "https://raw.githubusercontent.com/the-rajabraza/id_card_generator/main/socialcard.png", // Direct link to image
        width: 1200,
        height: 630,
        alt: "AR Developers Social Card",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // or "summary"
    title: "AR Developers",
    description: "AR Test",
    images: [
      {
        url: "https://raw.githubusercontent.com/the-rajabraza/id_card_generator/main/socialcard.png", // Direct link to image
        alt: "AR Developers Social Card",
      },
    ],
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
