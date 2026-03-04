import { getBlogs } from "@/lib/db/queries/achievements";
import { Blog } from "@/components/sections/Blog";

export default async function BlogPage() {
    const blogs = await getBlogs();
    return (
        <main className="flex flex-col">
            <Blog blogs={blogs} />
        </main>
    );
}
