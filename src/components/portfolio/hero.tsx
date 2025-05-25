import { Button } from "@/components/ui/button";
import Image from 'next/image';
import profileImage from "../../public/profile-image.jpg"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center py-20 pt-32 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">Portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
            Crafting <span className="text-primary">Digital</span> Experiences
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md">
            I&apos;m a passionate web developer focused on creating beautiful, 
            functional, and user-friendly websites and applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" asChild>
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
            <div className="flex gap-4 mt-6">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="block py-2">
          <Image src={profileImage} alt="profile" width={500} height={500} className="rounded-lg aspect-square"/>
        </div>
      </div>
    </section>
  );
}
