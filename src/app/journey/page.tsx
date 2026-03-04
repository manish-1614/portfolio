import { getExperience } from "@/lib/db/queries/experience";
import { getEducation } from "@/lib/db/queries/education";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";

export default async function JourneyPage() {
    const [experiences, education] = await Promise.all([
        getExperience(),
        getEducation()
    ]);

    return (
        <main className="flex flex-col">
            <div className="py-12 bg-slate-50 dark:bg-slate-900/20 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Professional Journey</h1>
                    <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl">
                        A comprehensive timeline of my career history and academic background.
                    </p>
                </div>
            </div>

            <Experience experiences={experiences} />
            <Education education={education} />
        </main>
    );
}
