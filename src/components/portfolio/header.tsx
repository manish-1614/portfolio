"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { Homemade_Apple } from "next/font/google";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

const homemadeapple = Homemade_Apple({
  variable: "--font-homemadeapple",
  subsets: ["latin"],
  weight: "400",
});

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex justify-between items-center py-4">
        <div className="mx-4">
          <Link href="/" className={`mx-4 text-2xl ${homemadeapple.variable}`}>
            Manish Prajapati
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/70 hover:text-primary transition duration-200"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button>Get In Touch</Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/70 hover:text-primary transition duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 py-2">
                <span className="text-foreground/70">Theme</span>
                <ThemeToggle />
              </div>
              <Button className="mt-4" onClick={() => setIsOpen(false)}>
                Get In Touch
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
