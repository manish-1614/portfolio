"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

// Import images statically to ensure they load
import project1 from "../../public/project1.jpg";
import project2 from "../../public/project2.jpg";
import project3 from "../../public/project3.jpg";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with Next.js and Stripe",
    image: project1,
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio site using Matsu theme and shadcn/ui",
    image: project2,
    tags: ["Next.js", "shadcn/ui", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: project3,
    tags: ["React", "Firebase", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 container">
      <div className="flex flex-col gap-2 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold">
          Recent <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Explore my latest work showcasing my skills and expertise in web development
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden border-border bg-card">            <CardHeader className="p-0">
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
            </CardHeader>
            <CardContent className="pt-6 pb-2">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <div className="flex gap-2 flex-wrap mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">              <Button variant="ghost" size="sm" asChild>
                <Link href={project.githubUrl} target="_blank">
                  <GithubIcon className="mr-2 h-4 w-4" /> Code
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={project.liveUrl} target="_blank">
                  Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <Button size="lg" asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </section>
  );
}
