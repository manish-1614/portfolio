import { CompileHero } from "@/components/hero/CompileHero";
import { CaseStudiesSection } from "@/components/narrative/CaseStudiesSection";
import { ProductionSystemsSection } from "@/components/narrative/ProductionSystemsSection";
import { AlsoBuiltSection } from "@/components/narrative/AlsoBuiltSection";
import { TechnicalCraftSection } from "@/components/narrative/TechnicalCraftSection";
import { WritingSection } from "@/components/narrative/WritingSection";
import { ContactSection } from "@/components/narrative/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950">
      <CompileHero />
      <CaseStudiesSection />
      <ProductionSystemsSection />
      <AlsoBuiltSection />
      <TechnicalCraftSection />
      <WritingSection />
      <ContactSection />
    </main>
  );
}
