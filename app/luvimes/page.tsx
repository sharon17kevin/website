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
          <h2 className="text-3xl font-bold text-[#3a5a34] mb-12 text-center" style={{ fontFamily: "var(--font-display)" }}>
            What we&apos;re working on
          </h2>
          <div className="max-w-2xl mx-auto">
            <ProjectCard
              name="Luagro"
              description="A delivery platform that connects local farmers directly to your kitchen. Order today, get it within the hour."
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
          <h2 className="text-3xl font-bold text-[#3a5a34]" style={{ fontFamily: "var(--font-display)" }}>About Luvimes</h2>
          <p className="text-lg text-[#1a1a1a]/60 leading-relaxed">
            We&apos;re a small team that builds software around problems we see in our
            own community. Luagro started because we wanted better access to
            locally grown food. That&apos;s how we work: find something worth fixing,
            then build the simplest thing that actually helps.
          </p>
        </div>
      </section>
    </>
  );
}
