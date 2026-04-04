import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

export default function LuvimesFooter() {
  return (
    <footer
      id="footer"
      className="bg-[#3a5a34] text-white pt-16 md:pt-20 pb-10"
    >
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-white/10 pb-16">
        <div className="space-y-6 text-center sm:text-left">
          <div className="text-3xl font-bold">Luvimes</div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            We build digital products that solve real problems. Technology that
            connects, delivers, and empowers.
          </p>
          <div className="flex justify-center sm:justify-start gap-4">
            <FacebookIcon className="w-6 h-6 hover:text-[#97C93C] transition-colors cursor-pointer" />
            <TwitterIcon className="w-6 h-6 hover:text-[#97C93C] transition-colors cursor-pointer" />
            <InstagramIcon className="w-6 h-6 hover:text-[#97C93C] transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-xl font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-white/60">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-white transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-xl font-bold mb-6">Stay Updated</h4>
          <p className="text-white/60 text-sm mb-4">
            Get the latest from Luvimes.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-white/10 border border-white/10 rounded-full p-4 flex-1 outline-none text-sm focus:border-[#97C93C] transition-colors text-center sm:text-left"
            />
            <button className="bg-[#97C93C] text-white px-4 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="section-container pt-8 text-center text-white/40 text-sm px-4">
        Luvimes &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
