import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryTabs from "@/components/CategoryTabs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import AdsSlider from "@/components/AdsSlider";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AdsSlider />
        <CategoryTabs />

        {/* Banner Section from Image */}
        <section className="section-container my-12 md:my-20">
          <div className="relative w-full min-h-[400px] md:h-[400px] rounded-[30px] md:rounded-[40px] overflow-hidden bg-emerald-800 flex flex-col md:flex-row items-center p-8 md:p-12 text-white">
            <div className="relative z-10 max-w-lg space-y-6 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">75% Off <br className="hidden md:block" /> Heat Up the Deals!</h2>
              <Link href="/shop" className="btn-primary bg-green-400 inline-block text-center">Shop Now</Link>
            </div>
            <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 opacity-50 md:opacity-100">
              <Image
                src="/images/orange.png"
                alt="Orange deal"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-emerald-900 via-emerald-800/80 to-transparent" />
          </div>
        </section>

        <FeaturedProducts />

        {/* Value Proposition Section */}
        <section className="bg-[var(--primary-green)] py-16 md:py-20 text-white overflow-hidden">
          <div className="section-container grid md:grid-cols-2 gap-3 md:gap-12 items-center">
            <div className="relative h-[300px] hidden md:block md:h-[400px]">
              <Image
                src="/images/luagropic1 (17) 1.png"
                alt="Market basket"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-8 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">We Bring <br /> The Market To <br /> <span className="text-[var(--accent-green)]">Your Home</span></h2>
              <Link href="/shop" className="btn-primary bg-green-400 px-8 py-3 text-lg inline-block text-center whitespace-nowrap">Shop Now</Link>{/*link to item page*/}
            </div>
          </div>
        </section>

        <TestimonialSlider />

        {/* Blog Post Section */}
        <section className="section-container pb-20 md:pb-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:text-[var(--primary-green)]">Our Latest Post</h2>
          <div className="relative max-w-4xl mx-auto px-4">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold px-4">Why Green Fruits and Veggies Should Be in Your Cart</h3>
              <p className="text-sm opacity-50">February 14, 2024</p>
              <Link href="/blog" className="rounded-2xl font-bold bg-green-400 px-8 py-2 text-lg inline-block">Read More</Link>
            </div>

            {/* Scroll arrows - hidden on tiny mobile, smaller on small mobile */}
            <div className="hidden sm:block">
              <Image width={40} height={40} className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-12" src="/images/arrows2.png" alt="Previous" />
              <Image width={40} height={40} className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-12" src="/images/arrow1.png" alt="Next" />
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}


