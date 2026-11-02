import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
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
  metadataBase: new URL("https://sirivennelakammariportfolio.netlify.app"),
  title: {
    default: "Kishan Patel — Software Developer",
    template: "%s | Kishan Patel",
  },
  description:
    "Portfolio of Kishan Patel, a software developer focused on full-stack web applications, the MERN stack, and practical software solutions.",
  keywords: [
    "Software Developer",
    "Full-Stack Developer",
    "MERN Stack",
    "Portfolio",
    "Kishan Patel",
    "Python",
    "Ahmedabad",
  ],
  authors: [{ name: "Kishan Patel" }],
  creator: "Kishan Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sirivennelakammariportfolio.netlify.app",
    siteName: "Kishan Patel Portfolio",
    title: "Kishan Patel — Software Developer",
    description:
      "Portfolio of Kishan Patel, a software developer focused on full-stack web applications and the MERN stack.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kishan Patel — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishan Patel — Software Developer",
    description:
      "Portfolio of Kishan Patel, a software developer focused on full-stack web applications and the MERN stack.",
    images: ["/og-image.png"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
