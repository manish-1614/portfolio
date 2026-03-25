import { getSkills } from "@/lib/db/queries/skills";
import { getCertificates, getBadges, getCommunity } from "@/lib/db/queries/achievements";
import { Skills } from "@/components/sections/Skills";
import { Accomplishments } from "@/components/sections/Accomplishments";
import { Community } from "@/components/sections/Community";

export default async function KnowledgePage() {
    let rated: any[] = [], chips: any[] = [], icons: any[] = [];
    let certs: any[] = [], accs: any[] = [];
    let badgeAffiliations: any[] = [], badgeList: any[] = [];
    let deeds: any[] = [], recognition: any[] = [];

    try {
        const [
            skillsData,
            certsData,
            badgesData,
            communityData
        ] = await Promise.all([
            getSkills(),
            getCertificates(),
            getBadges(),
            getCommunity()
        ]);

        rated = skillsData.rated || [];
        chips = skillsData.chips || [];
        icons = skillsData.icons || [];
        certs = certsData.certs || [];
        accs = certsData.accs || [];
        badgeAffiliations = badgesData.affiliated || [];
        badgeList = badgesData.list || [];
        deeds = communityData.deeds || [];
        recognition = communityData.recognition || [];
    } catch (error) {
        console.error('Error loading expertise page data:', error);
        // Page continues with empty arrays as defaults
    }


    return (
        <main className="flex flex-col">
            <div className="py-12 bg-slate-50 dark:bg-slate-900/20 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Knowledge & Skills</h1>
                    <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl">
                        Technical skills, professional certifications, and community contributions.
                    </p>
                </div>
            </div>

            <Skills rated={rated} chips={chips} icons={icons} />
            <Accomplishments certs={certs} accs={accs} affiliated={badgeAffiliations} list={badgeList} />
            <Community deeds={deeds} recognition={recognition} />
        </main>
    );
}
