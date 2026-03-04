import { getLinks } from "@/lib/db/queries/links";
import { getExperience } from "@/lib/db/queries/experience";
import { getSkills } from "@/lib/db/queries/skills";
import { getEducation } from "@/lib/db/queries/education";
import { getCertificates, getBadges, getBlogs, getCommunity } from "@/lib/db/queries/achievements";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TechIcon } from "@/components/ui/TechIcon";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Accomplishments } from "@/components/sections/Accomplishments";
import { Blog } from "@/components/sections/Blog";
import { Community } from "@/components/sections/Community";
import { Contact } from "@/components/sections/Contact";

export default async function Home() {
  const [
    links,
    experiences,
    { rated, chips, icons },
    education,
    { certs, accs },
    { affiliated, list },
    blogs,
    { deeds, recognition }
  ] = await Promise.all([
    getLinks(),
    getExperience(),
    getSkills(),
    getEducation(),
    getCertificates(),
    getBadges(),
    getBlogs(),
    getCommunity()
  ]);

  return (
    <main className="flex flex-col">
      <Hero />

      <Experience experiences={experiences} />

      <Skills rated={rated} chips={chips} icons={icons} />

      <Education education={education} />

      <Accomplishments certs={certs} accs={accs} affiliated={affiliated} list={list} />

      <Blog blogs={blogs} />

      <Community deeds={deeds} recognition={recognition} />

      <Contact links={links} />
    </main>
  );
}
