import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Professional Portfolio | Web Developer",
  description: "A modern portfolio website showcasing my work, skills, and expertise in web development",
  keywords: ["portfolio", "web development", "frontend", "backend", "react", "next.js"],
  authors: [{ name: "Your Name", url: "https://yourportfolio.com" }],
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dyfthf6kw/image/upload/v1716019538/codehelpDir/MP_initials_ai1k0p.ico",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/dyfthf6kw/image/upload/v1716019538/codehelpDir/MP_initials_ai1k0p.ico",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "https://res.cloudinary.com/dyfthf6kw/image/upload/v1716019538/codehelpDir/MP_initials_ai1k0p.ico",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${ptSans.variable} antialiased relative max-w-[1920px] mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="texture" />
          <div className="mx-auto">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}