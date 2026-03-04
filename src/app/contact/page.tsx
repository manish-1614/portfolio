import { getLinks } from "@/lib/db/queries/links";
import { Contact } from "@/components/sections/Contact";

export default async function ContactPage() {
    const links = await getLinks();
    return (
        <main className="flex flex-col">
            <Contact links={links} />
        </main>
    );
}
