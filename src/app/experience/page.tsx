import { getExperience } from "@/lib/db/queries/experience";
import { Experience } from "@/components/sections/Experience";

export default async function ExperiencePage() {
    const experiences = await getExperience();
    return (
        <main className="flex flex-col">
            <Experience experiences={experiences} />
        </main>
    );
}
