"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import aboutImage from "../../public/about-image.jpg"
import { ArrowRight, Download, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-20 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src={aboutImage}
            width={500}
            height={600}
            alt="About me image"
            className="rounded-lg shadow-lg aspect-square"
          />
        </div>
        
        <div>
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">About Me</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            A passionate web developer with a creative edge
          </h2>
          
          <p className="text-muted-foreground">
            I specialize in building modern web applications with a focus on performance, 
            accessibility, and user experience. With over 5 years of experience in the industry, 
            I have worked on a variety of projects from small business websites to large-scale 
            enterprise applications.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="education">
              <AccordionTrigger className="flex gap-2">
                <GraduationCap className="h-5 w-5" /> Education
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-8 border-l border-border ml-2.5 space-y-4 py-2">
                  <div>
                    <h4 className="font-medium">BSc in Computer Science</h4>
                    <p className="text-muted-foreground text-sm">University of Technology, 2015-2019</p>
                  </div>
                  <div>
                    <h4 className="font-medium">MSc in Web Development</h4>
                    <p className="text-muted-foreground text-sm">Digital Institute, 2019-2021</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="experience">
              <AccordionTrigger className="flex gap-2">
                <Briefcase className="h-5 w-5" /> Experience
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-8 border-l border-border ml-2.5 space-y-4 py-2">
                  <div>
                    <h4 className="font-medium">Senior Web Developer</h4>
                    <p className="text-muted-foreground text-sm">Tech Solutions Inc, 2022-Present</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Frontend Developer</h4>
                    <p className="text-muted-foreground text-sm">Creative Agency, 2019-2022</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Web Development Intern</h4>
                    <p className="text-muted-foreground text-sm">Startup X, 2018-2019</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" asChild>
              <Link href="/contact">
                Lets Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {[
          { number: "5+", label: "Years Experience" },
          { number: "50+", label: "Projects Completed" },
          { number: "30+", label: "Happy Clients" },
          { number: "4", label: "Awards Won" },
        ].map((stat, index) => (
          <Card key={index} className="border-border bg-card">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <span className="text-4xl font-serif font-bold text-primary">{stat.number}</span>
              <span className="text-muted-foreground mt-2">{stat.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
