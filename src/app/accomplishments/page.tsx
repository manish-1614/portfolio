import { getCertificates, getBadges } from "@/lib/db/queries/achievements";
import { Accomplishments } from "@/components/sections/Accomplishments";

export default async function AccomplishmentsPage() {
    const [{ certs, accs }, { affiliated, list }] = await Promise.all([
        getCertificates(),
        getBadges()
    ]);

    return (
        <main className="flex flex-col">
            <Accomplishments
                certs={certs}
                accs={accs}
                affiliated={affiliated}
                list={list}
            />
        </main>
    );
}
