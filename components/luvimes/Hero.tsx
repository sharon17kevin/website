import Link from "next/link";

export default function LuvimesHero() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#eef4ea] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#97C93C]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#97C93C]/40 rounded-full animate-pulse-slow" />
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-[#3a5a34]/20 rounded-full animate-pulse-slow" style={{ animationDelay: "3s" }} />

      <div className="section-container relative z-10 text-center max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#3a5a34] leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          We build things{" "}
          <span className="text-[#5a8a52] italic">people actually use</span>
        </h1>
        <p className="text-xl text-[#1a1a1a]/60 leading-relaxed max-w-xl mx-auto">
          Luvimes is a small tech company making useful software.
          Our first product gets fresh produce from local farms to your door.
        </p>
        <Link
          href="#projects"
          className="inline-block px-8 py-4 rounded-full font-semibold text-lg bg-[#3a5a34] text-white hover:bg-[#5a8a52] transition-colors"
        >
          See Our Work
        </Link>
      </div>
    </section>
  );
}
