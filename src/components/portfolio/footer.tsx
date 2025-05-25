import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-muted px-12 py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-serif text-xl font-bold">
              Portfolio
            </Link>
            <p className="text-muted-foreground">
              Creating digital experiences with modern web technologies
            </p>            <div className="flex gap-4 mt-2">
              <Button variant="ghost" size="icon" asChild className="rounded-full h-8 w-8">
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                  <GithubIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full h-8 w-8">
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                  <LinkedinIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full h-8 w-8">
                <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <TwitterIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full h-8 w-8">
                <Link href="mailto:hello@example.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Quick Links</h3>
            <Link href="/" className="text-muted-foreground hover:text-primary transition duration-200">
              Home
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition duration-200">
              About
            </Link>
            <Link href="/projects" className="text-muted-foreground hover:text-primary transition duration-200">
              Projects
            </Link>
            <Link href="/skills" className="text-muted-foreground hover:text-primary transition duration-200">
              Skills
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition duration-200">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-muted-foreground">San Francisco, CA</p>
            <p className="text-muted-foreground">hello@example.com</p>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
