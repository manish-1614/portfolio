import { Header } from "@/components/portfolio/header";
import { Footer } from "@/components/portfolio/footer";
import { Contact } from "@/components/portfolio/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me | Professional Portfolio",
  description: "Get in touch with me to discuss your project requirements or job opportunities",
};

export default function ContactPage() {  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 pb-20 w-full mx-auto">
        <div className="container mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Have a project in mind? Let&aposs discuss how I can help bring your ideas to life. Feel free to reach out using the contact form below or through my social media channels.
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
