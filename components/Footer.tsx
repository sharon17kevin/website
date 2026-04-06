import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-[var(--primary-green)] text-white pt-14 md:pt-20 pb-8 md:pb-10">
            <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 border-b border-white/10 pb-12 md:pb-16">
                <div className="space-y-5 md:space-y-6 text-center sm:text-left">
                    <div className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Luagro</div>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                        Connecting you directly with the freshest farm produce. Quality you can trust, delivered to your doorstep.
                    </p>
                    <div className="flex justify-center sm:justify-start gap-4">
                        <FacebookIcon className="w-5 h-5 md:w-6 md:h-6 hover:text-[var(--accent-green)] transition-colors cursor-pointer" />
                        <TwitterIcon className="w-5 h-5 md:w-6 md:h-6 hover:text-[var(--accent-green)] transition-colors cursor-pointer" />
                        <InstagramIcon className="w-5 h-5 md:w-6 md:h-6 hover:text-[var(--accent-green)] transition-colors cursor-pointer" />
                    </div>
                </div>

                <div className="text-center sm:text-left">
                    <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6" style={{ fontFamily: "var(--font-display)" }}>Navigation</h4>
                    <ul className="space-y-3 md:space-y-4 text-white/60 text-sm md:text-base">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
                    </ul>
                </div>

                <div className="text-center sm:text-left">
                    <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6" style={{ fontFamily: "var(--font-display)" }}>Quick Link</h4>
                    <ul className="space-y-3 md:space-y-4 text-white/60 text-sm md:text-base">
                        <li><Link href="/about#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                    </ul>
                </div>

                <div className="text-center sm:text-left">
                    <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6" style={{ fontFamily: "var(--font-display)" }}>Information</h4>
                    <ul className="space-y-3 md:space-y-4 text-white/60 text-sm">
                        <li>09161865135</li>
                        <li>125 Main Street, 2nd Floor</li>
                        <li>support@luagro.com</li>
                    </ul>
                    <div className="mt-6 md:mt-8 flex flex-col gap-2">
                        <input type="email" placeholder="Email" className="bg-white/10 border border-white/10 rounded-full p-3 md:p-4 flex-1 outline-none text-sm focus:border-[var(--accent-green)] transition-colors text-center sm:text-left" />
                        <button className="bg-[var(--accent-green)] text-white px-4 py-2.5 md:py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="section-container pt-6 md:pt-8 text-center text-white/40 text-xs md:text-sm px-4">
                Luagro © {new Date().getFullYear()}. All rights reserved.
                {" · "}
                A project by{" "}
                <a
                    href="https://luvimes.com"
                    className="text-white/60 hover:text-white transition-colors underline underline-offset-2"
                >
                    Luvimes
                </a>
            </div>
        </footer>
    );
}
