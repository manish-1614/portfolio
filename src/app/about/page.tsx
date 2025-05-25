import { About } from "@/components/portfolio/about";
import { Header } from "@/components/portfolio/header";
import { Footer } from "@/components/portfolio/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Professional Portfolio",
  description: "Learn about my background, skills, and experience as a web developer",
};

export default function AboutPage() {  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 w-full mx-auto">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12">
            About <span className="text-primary">Me</span>
          </h1>
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
}
