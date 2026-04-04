import LuvimesHero from "@/components/luvimes/Hero";
import ProjectCard from "@/components/luvimes/ProjectCard";

export default function LuvimesHome() {
  const luagroUrl =
    process.env.NEXT_PUBLIC_LUAGRO_URL || "https://luagro.luvimes.com";

  return (
    <>
      <LuvimesHero />

      {/* Projects Section */}
      <section id="projects" className="bg-[#eef4ea] py-20">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-[#3a5a34] mb-12 text-center">
            Our Projects
          </h2>
          <div className="max-w-2xl mx-auto">
            <ProjectCard
              name="Luagro"
              description="Farm-to-table fresh produce delivery platform. Bridging the gap between local farmers and your table with 60-minute delivery."
              href={luagroUrl}
              logoSrc="/images/luaro 1.png"
              status="live"
            />
          </div>
        </div>
      </section>

      {/* About Blurb */}
      <section className="py-20">
        <div className="section-container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#3a5a34]">About Luvimes</h2>
          <p className="text-lg text-[#1a1a1a]/60 leading-relaxed">
            Luvimes is a technology company building digital products that make a
            real difference. We believe in using technology to connect people,
            deliver value, and empower communities. Our first project, Luagro,
            is transforming how people access fresh, sustainably grown food.
          </p>
        </div>
      </section>
    </>
  );
}
