export default function LuvimesAboutPage() {
  return (
    <div className="bg-[#f8faf6] min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-[#3a5a34] leading-tight">
            About <span className="text-[#5a8a52]">Luvimes</span>
          </h1>
          <p className="text-xl text-[#1a1a1a]/60 leading-relaxed">
            We are a technology company on a mission to build digital products
            that solve real problems and create lasting impact.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="section-container max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-sm border border-[#eef4ea] space-y-8">
            <h2 className="text-3xl font-bold text-[#3a5a34]">Our Mission</h2>
            <p className="text-lg text-[#1a1a1a]/60 leading-relaxed">
              At Luvimes, we believe technology should serve people — not the
              other way around. We build products that connect communities,
              streamline everyday tasks, and unlock new possibilities for the
              people who use them.
            </p>
            <p className="text-lg text-[#1a1a1a]/60 leading-relaxed">
              Our first project, Luagro, is a farm-to-table delivery platform
              that bridges the gap between local farmers and households. It
              reflects our core belief: that the best technology solves problems
              people actually have.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3a5a34] mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eef4ea] space-y-4">
              <h3 className="text-xl font-bold text-[#3a5a34]">
                Impact First
              </h3>
              <p className="text-[#1a1a1a]/60">
                Every product we build starts with a real problem. We measure
                success by the difference we make, not just the code we ship.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eef4ea] space-y-4">
              <h3 className="text-xl font-bold text-[#3a5a34]">
                Quality Over Speed
              </h3>
              <p className="text-[#1a1a1a]/60">
                We take the time to build things right. Reliable, well-crafted
                software that people can depend on every day.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eef4ea] space-y-4">
              <h3 className="text-xl font-bold text-[#3a5a34]">
                Community Driven
              </h3>
              <p className="text-[#1a1a1a]/60">
                We build for and with the communities we serve. Their feedback
                shapes our roadmap and keeps us grounded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 pb-24">
        <div className="section-container max-w-3xl mx-auto">
          <div className="bg-[#3a5a34] rounded-3xl p-12 md:p-16 text-center text-white space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold relative z-10">
              Interested in what we do?
            </h2>
            <p className="text-white/60 text-lg relative z-10">
              We&apos;re always looking for partners, collaborators, and people
              who share our vision.
            </p>
            <button className="relative z-10 bg-[#97C93C] text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
