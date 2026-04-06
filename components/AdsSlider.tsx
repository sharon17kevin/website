"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const ads = [
    {
        id: 1,
        title: "Winter Harvest Sales",
        highlight: "30% OFF",
        subtitle: "Premium organic vegetables from local sustainable farms.",
        image: "/images/vegetables.jpg",
        bgColor: "from-emerald-900 to-emerald-800",
        accentColor: "bg-emerald-400",
    },
    {
        id: 2,
        title: "Gourmet Meats",
        highlight: "Fresh Daily",
        subtitle: "Sustainably sourced, hormone-free premium cuts delivered fast.",
        image: "/images/raw meat.jpg",
        bgColor: "from-orange-900 to-orange-800",
        accentColor: "bg-orange-400",
    },
    {
        id: 3,
        title: "Pantry Essentials",
        highlight: "Buy 1 Get 1",
        subtitle: "Stock up on the finest grains and spices for your kitchen.",
        image: "/images/grains.webp",
        bgColor: "from-amber-900 to-amber-800",
        accentColor: "bg-amber-400",
    },
];

export default function AdsSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % ads.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [isHovered]);

    return (
        <section
            className="relative w-full h-[180px] sm:h-[220px] md:h-[275px] overflow-hidden bg-black"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {ads.map((ad, index) => (
                <div
                    key={ad.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                        }`}
                >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${ad.bgColor}`} />

                    {/* Background Image */}
                    <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 opacity-20 md:opacity-100">
                        <Image
                            src={ad.image}
                            alt={ad.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-inherit via-inherit/60 to-transparent hidden md:block" />
                    </div>

                    {/* Content */}
                    <div className="section-container relative h-full flex items-center z-20">
                        <div className="max-w-2xl space-y-2 md:space-y-4 text-white px-2 md:px-0">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                <Sparkles className={`w-3 h-3 ${ad.accentColor.replace('bg-', 'text-')}`} />
                                Limited Offer
                            </div>

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                                {ad.title} <span className="md:block text-[var(--accent-green)]">{ad.highlight}</span>
                            </h2>

                            <p className="hidden sm:block text-xs md:text-lg text-white/70 max-w-sm md:max-w-lg leading-relaxed line-clamp-1 md:line-clamp-none">
                                {ad.subtitle}
                            </p>

                            <div className="pt-1 md:pt-2">
                                <Link
                                    href="/shop"
                                    className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-base font-extrabold hover:scale-105 transition-transform group"
                                >
                                    Shop Now
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Decorative */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-white/5 rounded-full blur-[60px] md:blur-[100px] animate-pulse" />
                </div>
            ))}

            {/* Navigation Indicators */}
            <div className="absolute bottom-3 md:bottom-4 right-6 md:right-10 flex gap-2 z-30">
                {ads.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className="group flex items-center justify-center py-2"
                    >
                        <div className={`h-1 rounded-full transition-all duration-500 ${index === currentSlide ? "w-8 bg-white" : "w-4 bg-white/30 group-hover:bg-white/50"
                            }`} />
                    </button>
                ))}
            </div>

            {/* Side Count */}
            <div className="hidden lg:flex absolute inset-y-0 left-6 items-center z-30">
                <div className="flex flex-col gap-2 text-white/40 text-[10px] font-bold tracking-widest vertical-text uppercase">
                    {currentSlide + 1} / {ads.length}
                </div>
            </div>
        </section>
    );
}
