"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "James Carter",
        role: "Regular Customer",
        text: "Everything is always fresh and tastes amazing. This store really helps me stay on track with my healthy lifestyle!",
        image: "/images/luagropic1 (8) 1 (1).png"
    },
    {
        name: "Sarah Williams",
        role: "Chef",
        text: "The quality of the meats and vegetables is unparalleled. I source all my kitchen basics from Luagro now.",
        image: "/images/luagropic1 (8) 1.png"
    },
    {
        name: "Michael Chen",
        role: "Fitness Coach",
        text: "Fast delivery and premium quality. The grains are especially clean and high-grade. Highly recommended!",
        image: "/images/luagropic1 (9) 1.png"
    }
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 md:py-20 bg-emerald-900/5">
            <div className="section-container">
                <div className="max-w-4xl mx-auto shadow-xl md:shadow-2xl rounded-3xl md:rounded-[60px] lg:rounded-[100px] bg-white overflow-hidden flex flex-col md:flex-row items-center">
                    <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[500px]">
                        {testimonials.map((t, i) => (
                            <Image
                                key={i}
                                src={t.image}
                                alt={t.name}
                                fill
                                className={`object-cover transition-opacity duration-1000 ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            />
                        ))}
                    </div>
                    <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-16 lg:p-20 space-y-6 md:space-y-8 relative">
                        {/* Large decorative quote */}
                        <Quote className="absolute top-6 md:top-10 right-6 md:right-10 w-14 h-14 md:w-20 md:h-20 text-emerald-900/5 rotate-180" />

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-green)] relative z-10" style={{ fontFamily: "var(--font-display)" }}>What Our Happy Customers Say</h2>

                        <div className="relative h-44 sm:h-48 md:h-56">
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-all duration-1000 flex flex-col justify-center ${i === currentIndex ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 z-0'}`}
                                >
                                    <p className="text-lg sm:text-xl md:text-2xl font-medium italic leading-relaxed text-gray-700">
                                        &ldquo;{t.text}&rdquo;
                                    </p>
                                    <div className="mt-6 md:mt-8 flex items-center gap-4">
                                        <div className="text-left">
                                            <div className="font-bold text-base md:text-lg">{t.name}</div>
                                            <div className="text-xs md:text-sm opacity-60">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pulse indicators */}
                        <div className="flex gap-3 justify-center md:justify-start">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-3 h-3 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-[var(--accent-green)]' : 'bg-gray-200'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
