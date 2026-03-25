import { getBlogs } from "@/lib/db/queries/achievements";
import { Blog } from "@/components/sections/Blog";
import { LiveWebsites } from "@/components/sections/LiveWebsites";

export default async function BlogPage() {
    const blogs = await getBlogs();
    return (
        <main className="flex flex-col">
            <LiveWebsites />
            <Blog blogs={blogs} />
        </main>
    );
}
