import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Users, Sprout, ShieldCheck, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF1]">
            <Navbar />

            <main className="pt-18">
                {/* Modern About Hero */}
                <section className="relative py-20 md:py-32 overflow-hidden">
                    <div className="section-container relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="space-y-6 md:space-y-8 text-center md:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[var(--primary-green)] leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                                Growing <span className="text-[var(--accent-green)]">Together</span> For A Greener Future
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
                                At Luagro, we believe that everyone deserves access to fresh, healthy, and sustainably grown food. Our mission is to bridge the gap between local farmers and your table.
                            </p>
                        </div>
                        <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-[30px] md:rounded-[60px] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/luagropic1 (17) 1.png"
                                alt="About Luagro"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Values Bento Grid */}
                <section className="section-container py-16 md:py-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-[var(--primary-green)]" style={{ fontFamily: "var(--font-display)" }}>Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="md:col-span-2 bg-emerald-900 text-white p-8 md:p-12 rounded-[24px] md:rounded-[40px] flex flex-col justify-between min-h-[250px]">
                            <Sprout className="w-10 h-10 md:w-12 md:h-12 text-[var(--accent-green)] mb-6 md:mb-8" />
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4" style={{ fontFamily: "var(--font-display)" }}>Sustainability First</h3>
                                <p className="opacity-70 text-base md:text-lg">We prioritize eco-friendly farming and plastic-free packaging in every step of our process.</p>
                            </div>
                        </div>
                        <div className="bg-[var(--accent-green)] p-8 md:p-12 rounded-[24px] md:rounded-[40px] flex flex-col justify-between min-h-[250px]">
                            <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-emerald-900 mb-6 md:mb-8" />
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-emerald-900" style={{ fontFamily: "var(--font-display)" }}>Quality Assured</h3>
                                <p className="text-emerald-900/70 text-base md:text-lg">Every item is rigorously tested for freshness and nutritional value.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-[24px] md:rounded-[40px] flex flex-col justify-between shadow-sm min-h-[250px]">
                            <Users className="w-10 h-10 md:w-12 md:h-12 text-[var(--primary-green)] mb-6 md:mb-8" />
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[var(--primary-green)]" style={{ fontFamily: "var(--font-display)" }}>Community Focus</h3>
                                <p className="text-gray-500 text-base md:text-lg">Supporting local farmers and empowering rural communities across the country.</p>
                            </div>
                        </div>
                        <div className="md:col-span-2 relative h-[220px] sm:h-[250px] md:h-[300px] rounded-[24px] md:rounded-[40px] overflow-hidden group">
                            <Image
                                src="/images/vegetables.jpg"
                                alt="Farm"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <span className="text-white text-2xl md:text-3xl font-extrabold flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
                                    <Globe className="w-6 h-6 md:w-8 md:h-8" />
                                    Global Impact, Local Roots
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA Section */}
                <section id="contact" className="section-container py-16 md:py-24">
                    <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 rounded-[24px] sm:rounded-[40px] md:rounded-[60px] p-8 sm:p-12 md:p-24 text-center text-white space-y-6 md:space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold" style={{ fontFamily: "var(--font-display)" }}>Want to partner with us?</h2>
                        <p className="text-base md:text-xl opacity-60 max-w-2xl mx-auto">Whether you&apos;re a farmer or a distributor, we&apos;d love to hear from you. Let&apos;s make healthy food accessible together.</p>
                        <button className="bg-[var(--accent-green)] text-emerald-900 px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold hover:scale-105 transition-transform">Get In Touch</button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
