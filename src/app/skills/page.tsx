import { Header } from "@/components/portfolio/header";
import { Footer } from "@/components/portfolio/footer";
import { Skills } from "@/components/portfolio/skills";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills | Professional Portfolio",
  description: "Explore my technical skills and expertise in web development, frontend and backend technologies",
};

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 pb-20 w-full mx-auto">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A comprehensive overview of my technical expertise and proficiency across various technologies and tools.
          </p>

          <Skills />          <div className="mt-20 mx-auto w-full md:w-3/4 lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">
              Development <span className="text-primary">Process</span>
            </h2>

            <div className="grid grid-cols-1 gap-8">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-6">Frontend Development</h3>
                  <div className="space-y-6">
                    {[
                      { label: "Responsive Design", value: 95 },
                      { label: "UI/UX Implementation", value: 90 },
                      { label: "Performance Optimization", value: 85 },
                      { label: "Accessibility (a11y)", value: 80 },
                      { label: "Animation & Interactions", value: 85 }
                    ].map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span>{skill.label}</span>
                          <span className="text-primary">{skill.value}%</span>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div 
                            className="bg-primary h-full absolute top-0 left-0"
                            style={{ width: `${skill.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-6">Backend Development</h3>
                  <div className="space-y-6">
                    {[
                      { label: "API Development", value: 85 },
                      { label: "Database Design", value: 80 },
                      { label: "Authentication & Authorization", value: 90 },
                      { label: "Server Configuration", value: 75 },
                      { label: "API Testing & Documentation", value: 85 }
                    ].map((skill, index) => (
                      <div key={index}>                        <div className="flex justify-between mb-2">
                          <span>{skill.label}</span>
                          <span className="text-primary">{skill.value}%</span>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div 
                            className="bg-primary h-full absolute top-0 left-0"
                            style={{ width: `${skill.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 mt-16">
              Soft <span className="text-primary">Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Project Management",
                "Communication",
                "Time Management",
                "Adaptability",
                "Continuous Learning",
                "Attention to Detail",
                "User-Centered Thinking"
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-md">
                  <div className="p-1 bg-primary/10 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
