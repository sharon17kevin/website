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
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="section-container relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h1 className="text-5xl md:text-7xl font-black text-[var(--primary-green)] leading-tight">
                                Growing <span className="text-[var(--accent-green)]">Together</span> For A Greener Future
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                At Luagro, we believe that everyone deserves access to fresh, healthy, and sustainably grown food. Our mission is to bridge the gap between local farmers and your table.
                            </p>
                        </div>
                        <div className="relative h-[400px] md:h-[600px] rounded-[60px] overflow-hidden shadow-2xl">
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
                <section className="section-container py-24">
                    <h2 className="text-4xl font-bold text-center mb-16 text-[var(--primary-green)]">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 bg-emerald-900 text-white p-12 rounded-[40px] flex flex-col justify-between">
                            <Sprout className="w-12 h-12 text-[var(--accent-green)] mb-8" />
                            <div>
                                <h3 className="text-3xl font-bold mb-4">Sustainability First</h3>
                                <p className="opacity-70 text-lg">We prioritize eco-friendly farming and plastic-free packaging in every step of our process.</p>
                            </div>
                        </div>
                        <div className="bg-[var(--accent-green)] p-12 rounded-[40px] flex flex-col justify-between">
                            <ShieldCheck className="w-12 h-12 text-emerald-900 mb-8" />
                            <div>
                                <h3 className="text-3xl font-bold mb-4 text-emerald-900">Quality Assured</h3>
                                <p className="text-emerald-900/70 text-lg">Every item is rigorously tested for freshness and nutritional value.</p>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-100 p-12 rounded-[40px] flex flex-col justify-between shadow-sm">
                            <Users className="w-12 h-12 text-[var(--primary-green)] mb-8" />
                            <div>
                                <h3 className="text-3xl font-bold mb-4 text-[var(--primary-green)]">Community Focus</h3>
                                <p className="text-gray-500 text-lg">Supporting local farmers and empowering rural communities across the country.</p>
                            </div>
                        </div>
                        <div className="md:col-span-2 relative h-[300px] rounded-[40px] overflow-hidden group">
                            <Image
                                src="/images/vegetables.jpg"
                                alt="Farm"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <span className="text-white text-3xl font-black flex items-center gap-2">
                                    <Globe className="w-8 h-8" />
                                    Global Impact, Local Roots
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA Section */}
                <section id="contact" className="section-container py-24">
                    <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 rounded-[60px] p-12 md:p-24 text-center text-white space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                        <h2 className="text-4xl md:text-6xl font-black">Want to partner with us?</h2>
                        <p className="text-xl opacity-60 max-w-2xl mx-auto">Whether you're a farmer or a distributor, we'd love to hear from you. Let's make healthy food accessible together.</p>
                        <button className="bg-[var(--accent-green)] text-emerald-900 px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform">Get In Touch</button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
