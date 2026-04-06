"use client";

import { useState } from "react";

const categories = ["Onions", "Vegetables", "Eggs", "Cooking Oil", "Palm Oil"];

export default function CategoryTabs() {
    const [active, setActive] = useState("Vegetables");

    return (
        <div className="section-container py-10 md:py-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-[var(--primary-green)] px-4" style={{ fontFamily: "var(--font-display)" }}>Trending Grocery Picks</h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`min-w-[100px] sm:min-w-[140px] md:min-w-[160px] px-3 sm:px-4 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold transition-all text-xs sm:text-sm md:text-base ${active === cat
                            ? "bg-[var(--primary-green)] text-white shadow-lg scale-105"
                            : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                            }`}
                    >
                        {cat}
                        <span className="block text-[9px] sm:text-[10px] md:text-xs font-normal opacity-60">Organic Veggies</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
