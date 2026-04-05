export default function LuvimesAboutPage() {
  return (
    <div className="bg-[#f8faf6] min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#3a5a34] leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            About <span className="text-[#5a8a52] italic">Luvimes</span>
          </h1>
          <p className="text-xl text-[#1a1a1a]/60 leading-relaxed">
            A small technology company building software that&apos;s
            actually useful to the people around us.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="section-container max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-sm border border-[#eef4ea] space-y-8">
            <h2 className="text-3xl font-bold text-[#3a5a34]" style={{ fontFamily: "var(--font-display)" }}>Why we exist</h2>
            <p className="text-lg text-[#1a1a1a]/60 leading-relaxed">
              We started Luvimes because we kept running into everyday
              problems that software could solve but nobody had bothered to.
              So we decided to be the ones who bother. We build tools that
              make daily life a little easier for the communities we&apos;re part of.
            </p>
            <p className="text-lg text-[#1a1a1a]/60 leading-relaxed">
              Luagro, our first product, came out of a simple frustration:
              there were great local farms nearby, but no easy way to buy from
              them. Now there is. That&apos;s the kind of thing we want to keep doing.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3a5a34] mb-12 text-center" style={{ fontFamily: "var(--font-display)" }}>
            How we work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eef4ea] space-y-4">
              <h3 className="text-xl font-bold text-[#3a5a34]" style={{ fontFamily: "var(--font-display)" }}>
                Start with the problem
              </h3>
              <p className="text-[#1a1a1a]/60">
                We don&apos;t build things and then look for users. We find
                a specific problem first, talk to the people who have it,
                and go from there.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eef4ea] space-y-4">
              <h3 className="text-xl font-bold text-[#3a5a34]" style={{ fontFamily: "var(--font-display)" }}>
                Get it right
              </h3>
              <p className="text-[#1a1a1a]/60">
                We&apos;d rather ship one solid feature than ten half-baked
                ones. If something goes out with our name on it, it should
                work well.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eef4ea] space-y-4">
              <h3 className="text-xl font-bold text-[#3a5a34]" style={{ fontFamily: "var(--font-display)" }}>
                Stay close to users
              </h3>
              <p className="text-[#1a1a1a]/60">
                We use what we build. Our users are our neighbors. When
                something isn&apos;t working, we hear about it fast, and
                that&apos;s a good thing.
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
            <h2 className="text-3xl md:text-4xl font-bold relative z-10" style={{ fontFamily: "var(--font-display)" }}>
              Want to work together?
            </h2>
            <p className="text-white/60 text-lg relative z-10">
              We&apos;re open to partnerships, collaborations, and good
              conversations with people who care about the same things.
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
