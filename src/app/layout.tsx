import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manish Kumar Prajapati | Senior Full Stack Engineer",
  description: "Portfolio of Manish Kumar Prajapati - Senior Full Stack Engineer specializing in Distributed Systems, AI Agents, and Scalable Backend Architecture.",
  keywords: ["Manish Kumar Prajapati", "Full Stack Engineer", "Distributed Systems", "AI Agents", "Java", "C++", "Spring Boot", "React", "Portfolio"],
  authors: [{ name: "Manish Kumar Prajapati" }],
  openGraph: {
    title: "Manish Kumar Prajapati | Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer specializing in Distributed Systems & AI Agents",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Kumar Prajapati | Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer specializing in Distributed Systems & AI Agents",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
