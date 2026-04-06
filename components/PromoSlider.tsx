"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const promos = [
    {
        id: 1,
        title: "Weekend Harvest",
        discount: "20% OFF",
        description: "All fresh vegetables",
        image: "/images/vegetables.jpg",
        bgColor: "bg-emerald-100",
    },
    {
        id: 2,
        title: "Protein Pack",
        discount: "15% OFF",
        description: "Premium meat collection",
        image: "/images/meats.jpg",
        bgColor: "bg-orange-100",
    },
    {
        id: 3,
        title: "Breakfast Bliss",
        discount: "Buy 2 Get 1",
        description: "Fresh farm eggs",
        image: "/images/eggs.jpg",
        bgColor: "bg-yellow-100",
    },
    {
        id: 4,
        title: "Spice It Up",
        discount: "10% OFF",
        description: "All exotic spices",
        image: "/images/spices.jpg",
        bgColor: "bg-red-100",
    },
    {
        id: 5,
        title: "Grain Gain",
        discount: "SAVE $5",
        description: "On orders over $30",
        image: "/images/grains.webp",
        bgColor: "bg-amber-100",
    }
];

export default function PromoSlider() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group">
            {/* Navigation Buttons - Only Desktop */}
            <button
                onClick={() => scroll('left')}
                className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg border border-gray-100 text-[var(--primary-green)] hover:bg-[var(--accent-green)] hover:text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={() => scroll('right')}
                className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg border border-gray-100 text-[var(--primary-green)] hover:bg-[var(--accent-green)] hover:text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight size={24} />
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            >
                {promos.map((promo) => (
                    <div
                        key={promo.id}
                        className={`flex-shrink-0 w-[240px] sm:w-[280px] md:w-[350px] h-[160px] md:h-[180px] rounded-2xl md:rounded-3xl ${promo.bgColor} p-5 md:p-6 flex items-center justify-between snap-center relative overflow-hidden`}
                    >
                        <div className="z-10 space-y-1.5 md:space-y-2">
                            <h4 className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-wider">{promo.title}</h4>
                            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--primary-green)]" style={{ fontFamily: "var(--font-display)" }}>{promo.discount}</div>
                            <p className="text-xs md:text-sm text-gray-700">{promo.description}</p>
                            <button className="mt-1 md:mt-2 text-xs font-bold underline text-[var(--primary-green)]">Claim Offer</button>
                        </div>
                        <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 md:w-40 md:h-40 opacity-40">
                            <Image
                                src={promo.image}
                                alt={promo.title}
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
