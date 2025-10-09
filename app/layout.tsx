import type { Metadata } from "next";
import "./globals.css";

// import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import { localhostUrl } from "@/lib/config";

export const pwDE = localFont({
  src: [
    {
      path: "../public/fonts/PlaywriteDEGrundGuides-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PlaywriteDEGrundGuides-Regular.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pw",
  display: "swap",
});

export const plexSans = localFont({
  src: [
    {
      path: "../public/fonts/sans/IBMPlexSans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sans/IBMPlexSans.ttf",
      weight: "500",
      style: "normal",
    },

    {
      path: "../public/fonts/sans/IBMPlexSans.ttf",
      weight: "600",
      style: "normal",
    },

    {
      path: "../public/fonts/sans/IBMPlexSans.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

// const plexSans = IBM_Plex_Sans({
//   variable: "--font-sans",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// const plexMono = IBM_Plex_Mono({
//   variable: "--font-mono",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

export const metadata: Metadata = {
  metadataBase: new URL(localhostUrl ?? ""),
  title: {
    default: "PureLife Water",
    template: "%s | PureLife Water",
  },
  description:
    "PureLife Water delivers crisp, clean hydration—purified for consistent quality and a refreshing taste that fits everyday life.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "PureLife Water",
    title: "PureLife Water",
    description: "Purified, great-tasting hydration.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${pwDE.variable}`}>
        {children}
      </body>
    </html>
  );
}
