import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
// import { ThemeToggle } from "@/components/portfolio/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mx-auto w-11/12 max-w-6xl">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
