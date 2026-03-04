import { getCommunity } from "@/lib/db/queries/achievements";
import { Community } from "@/components/sections/Community";

export default async function DeedsPage() {
    const { deeds, recognition } = await getCommunity();
    return (
        <main className="flex flex-col">
            <Community deeds={deeds} recognition={recognition} />
        </main>
    );
}
