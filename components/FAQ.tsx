"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How do I place an order?",
        answer: "Simply browse our products in the Shop page, add them to your cart, and proceed to checkout. We accept various payment methods including cards and bank transfers."
    },
    {
        question: "Where do you source your produce?",
        answer: "We source directly from local sustainable farms that meet our high standards for quality and freshness. Every item is hand-picked daily."
    },
    {
        question: "What is your delivery range?",
        answer: "We currently deliver to most major cities. You can check if we deliver to your area by entering your zip code at the top of the page."
    },
    {
        question: "Do you offer bulk discounts?",
        answer: "Yes! Our 'Buy More Save More' program provides significant discounts for larger orders. Check the banner on our Shop page for details."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-16 md:py-20 bg-white">
            <div className="section-container max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-green)] text-center mb-10 md:mb-12" style={{ fontFamily: "var(--font-display)" }}>Frequently Asked Questions</h2>
                <div className="space-y-3 md:space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden bg-[#FDFBF1]/30 transition-all hover:bg-[#FDFBF1]/50 shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                            >
                                <span className="font-bold text-base md:text-lg text-gray-800">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-[var(--primary-green)] transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-5 md:pb-6 px-5 md:px-6' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
