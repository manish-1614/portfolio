import { getEducation } from "@/lib/db/queries/education";
import { Education } from "@/components/sections/Education";

export default async function EducationPage() {
    const education = await getEducation();
    return (
        <main className="flex flex-col">
            <Education education={education} />
        </main>
    );
}
