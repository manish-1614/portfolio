"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const frontendSkills = [
	{ name: "React", level: 90 },
	{ name: "Next.js", level: 85 },
	{ name: "TypeScript", level: 80 },
	{ name: "Tailwind CSS", level: 95 },
	{ name: "Framer Motion", level: 75 },
];

const backendSkills = [
	{ name: "Node.js", level: 85 },
	{ name: "Express", level: 80 },
	{ name: "MongoDB", level: 75 },
	{ name: "PostgreSQL", level: 70 },
	{ name: "Firebase", level: 85 },
];

const toolsSkills = [
	{ name: "Git", level: 90 },
	{ name: "Docker", level: 65 },
	{ name: "Figma", level: 75 },
	{ name: "VS Code", level: 95 },
	{ name: "AWS", level: 60 },
];

export function Skills() {
	return (
		<section id="skills" className="py-20 container">
			<div className="flex flex-col gap-2 mb-12 text-center">
				<h2 className="text-3xl md:text-4xl font-serif font-bold">
					My <span className="text-primary">Skills</span>
				</h2>
				<p className="text-muted-foreground max-w-lg mx-auto">
					A comprehensive overview of my technical expertise and proficiency
				</p>
			</div>

			<div className="mx-auto w-full md:w-3/4 lg:w-1/2">
				<Card className="border-border bg-card">
					<Tabs defaultValue="frontend" className="w-full">
						<TabsList className="grid w-full grid-cols-3 bg-muted">
							<TabsTrigger value="frontend">Frontend</TabsTrigger>
							<TabsTrigger value="backend">Backend</TabsTrigger>
							<TabsTrigger value="tools">Tools</TabsTrigger>
						</TabsList>

						<CardContent className="pt-6">
							<TabsContent value="frontend">
								<SkillChart data={frontendSkills} />
							</TabsContent>
							<TabsContent value="backend">
								<SkillChart data={backendSkills} />
							</TabsContent>
							<TabsContent value="tools">
								<SkillChart data={toolsSkills} />
							</TabsContent>
						</CardContent>
					</Tabs>
				</Card>
			</div>
		</section>
	);
}

interface Skill {
	name: string;
	level: number;
}

function SkillChart({ data }: { data: Skill[] }) {
	// Get color for the skill bar based on index
	const getColor = (index: number): string => {
		const colors = [
			"bg-[oklch(0.66_0.19_41.6)]",
			"bg-[oklch(0.68_0.16_184.9)]",
			"bg-[oklch(0.48_0.09_210.9)]",
			"bg-[oklch(0.85_0.19_85.4)]",
			"bg-[oklch(0.74_0.19_66.3)]",
		];
		return colors[index % colors.length];
	};

	return (
		<div className="w-full space-y-6 py-4">
			{data.map((skill, index) => (
				<div key={skill.name} className="space-y-2">
					<div className="flex justify-between items-center">
						<span className="font-medium">{skill.name}</span>
						<span className="text-sm text-primary">{skill.level}%</span>
					</div>

					{/* Static Progress Bar */}
					<div className="w-full h-2 bg-muted rounded-full overflow-hidden">
						<div
							className={`h-full rounded-full ${getColor(index)}`}
							style={{ width: `${skill.level}%` }}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
