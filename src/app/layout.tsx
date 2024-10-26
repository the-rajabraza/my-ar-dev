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
  description: "AR Developers Website",
  openGraph: {
    title: "AR Developers",
    description: "AR Developers Website",
    url: "https://ardevelopers.vercel.app", // Replace with your page URL
    images: [
      {
        url: "https://github.com/the-rajabraza/my-ar-dev/blob/main/socialcard.png", // Replace with the URL of your image
        width: 1200, // Optional
        height: 630, // Optional
        alt: "AR Developers Image", // Optional
      },
    ],
    siteName: "AR Developers",
  },
  twitter: {
    card: "summary_large_image",
    title: "AR Developers",
    description: "AR Developers Website",
    images: ["https://github.com/the-rajabraza/my-ar-dev/blob/main/socialcard.png"], // Replace with the URL of your image
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
