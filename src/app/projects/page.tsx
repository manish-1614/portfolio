import { Header } from "@/components/portfolio/header";
import { Footer } from "@/components/portfolio/footer";
import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

// Import images statically to ensure they load
import project1 from "../../public/project1.jpg";
import project2 from "../../public/project2.jpg";
import project3 from "../../public/project3.jpg";
// import project4 from "../../public/project4.jpg";
// import project5 from "../../public/project5.jpg";
// import project6 from "../../public/project6.jpg";

export const metadata: Metadata = {
  title: "Projects | Professional Portfolio",
  description: "Browse through my portfolio of web development projects and applications",
};

// Extended project data for the dedicated projects page
const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with Next.js and Stripe. This project includes product listings, shopping cart, checkout process, and payment integration with Stripe.",
    image: project1,
    tags: ["Next.js", "Stripe", "Tailwind CSS", "MongoDB", "Authentication"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio site using Matsu theme and shadcn/ui. Features include dark mode, responsive design, and animated components using Framer Motion.",
    image: project2,
    tags: ["Next.js", "shadcn/ui", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress with real-time notifications.",
    image: project3,
    tags: ["React", "Firebase", "TypeScript", "Material UI", "Redux"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  // },
  // {
  //   title: "Weather Dashboard",
  //   description: "A weather application that shows current conditions and forecasts for any location. Features include interactive maps, hourly forecasts, and historical data.",
  //   image: project4,
  //   tags: ["Vue.js", "OpenWeatherMap API", "Chart.js", "Vuetify"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  // },
  // {
  //   title: "Recipe Sharing Platform",
  //   description: "A community-driven platform for sharing and discovering recipes. Includes features for rating, commenting, and saving favorite recipes.",
  //   image: project5,
  //   tags: ["Node.js", "Express", "MongoDB", "React", "AWS S3"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  // },
  // {
  //   title: "Fitness Tracker",
  //   description: "A mobile-first application for tracking workouts and fitness progress. Includes exercise library, workout planning, and progress visualization.",
  //   image: project6,
  //   tags: ["React Native", "GraphQL", "Apollo", "TypeScript"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 pb-20 w-full mx-auto">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Explore my portfolio of web development projects showcasing my skills in front-end and back-end development, UI/UX design, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Card key={index} className="overflow-hidden border-border bg-card">
                <CardContent className="p-0">
                  <div className="relative w-full h-52">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={index < 3}
                      onError={(e) => {
                        // Fallback to a colored div if image fails to load
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.classList.add('bg-muted', 'flex', 'items-center', 'justify-center');
                          const textElement = document.createElement('span');
                          textElement.className = 'text-muted-foreground';
                          textElement.textContent = project.title;
                          parent.appendChild(textElement);
                        }
                      }}
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex gap-2 flex-wrap mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <GithubIcon className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.liveUrl} target="_blank">
                          Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
