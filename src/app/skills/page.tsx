import { getSkills } from "@/lib/db/queries/skills";
import { Skills } from "@/components/sections/Skills";

export default async function SkillsPage() {
    const { rated, chips, icons } = await getSkills();
    return (
        <main className="flex flex-col">
            <Skills rated={rated} chips={chips} icons={icons} />
        </main>
    );
}
