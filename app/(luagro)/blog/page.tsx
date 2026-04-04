import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";

const posts = [
    {
        title: "Why Green Fruits and Veggies Should Be in Your Cart",
        excerpt: "Discover the amazing health benefits of incorporating more green produce into your daily diet.",
        date: "February 14, 2024",
        author: "Dr. Green",
        image: "/images/vegetables.jpg",
        category: "Nutrition"
    },
    {
        title: "Farm to Table: The Journey of Your Food",
        excerpt: "Learn how we ensure your produce stays fresh from the moment it's harvested until it reaches your door.",
        date: "February 10, 2024",
        author: "Sarah F.",
        image: "/images/luagropic1 (17) 1.png",
        category: "Behind the Scenes"
    },
    {
        title: "Sustainable Packaging: Our Green Initiative",
        excerpt: "We're moving to 100% biodegradable packaging. Here's why it matters for our planet.",
        date: "February 5, 2024",
        author: "Mark S.",
        image: "/images/luagropic1 (10) 1.png",
        category: "Environment"
    },
    {
        title: "Spring Harvest Preview: What to Expect",
        excerpt: "A sneak peek at the delicious seasonal fruits and vegetables coming to Luagro this spring.",
        date: "January 28, 2024",
        author: "Farmer Joe",
        image: "/images/orange.png",
        category: "Seasonal"
    },
    {
        title: "The Art of Spice: Elevating Simple Dishes",
        excerpt: "How to use our exotic spice collection to transform everyday meals into gourmet experiences.",
        date: "January 20, 2024",
        author: "Chef Mike",
        image: "/images/spices.jpg",
        category: "Recipes"
    },
    {
        title: "Meal Prep 101: Freshness that Lasts",
        excerpt: "Tips and tricks for prepping your weekly meals without losing the farm-fresh quality.",
        date: "January 15, 2024",
        author: "Elena R.",
        image: "/images/grains.webp",
        category: "Lifestyle"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF1]">
            <Navbar />

            <main className="pt-18">
                {/* Blog Hero */}
                <section className="bg-emerald-950 text-white py-24 md:py-32 relative overflow-hidden">
                    <div className="section-container relative z-10 text-center space-y-6">
                        <div className="inline-block bg-[var(--accent-green)] text-emerald-950 px-4 py-1 rounded-full text-sm font-bold">Insights & Stories</div>
                        <h1 className="text-5xl md:text-7xl font-black">The <span className="text-[var(--accent-green)]">Luagro</span> Blog</h1>
                        <p className="text-xl opacity-60 max-w-2xl mx-auto">Exploring the world of sustainable farming, healthy living, and the stories behind your food.</p>
                    </div>
                </section>

                {/* Popular Post / Featured */}
                <section className="section-container -mt-16 relative z-20 pb-20">
                    <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-gray-100 grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[300px] md:h-[400px] rounded-[30px] overflow-hidden">
                            <Image src="/images/vegetables.jpg" alt="Featured Post" fill className="object-cover" />
                        </div>
                        <div className="space-y-6">
                            <div className="text-[var(--accent-green)] font-bold uppercase tracking-widest text-sm">Featured Post</div>
                            <h2 className="text-4xl font-bold text-[var(--primary-green)] leading-tight">Mastering the Art of Fresh Food Preservation</h2>
                            <p className="text-gray-500 text-lg">Detailed guide on how to keep your farm-fresh produce tasting great for longer using simple 2026 techniques.</p>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <span className="flex items-center gap-2"><User size={16} /> By Dr. Green</span>
                                <span className="flex items-center gap-2"><Clock size={16} /> 8 min read</span>
                            </div>
                            <button className="flex items-center gap-2 font-bold text-[var(--primary-green)] hover:text-[var(--accent-green)] transition-colors">
                                READ STORY <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="section-container pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative h-64 rounded-[30px] overflow-hidden mb-6 shadow-lg">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-[var(--primary-green)]">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="text-sm text-gray-400 flex items-center justify-between">
                                        <span>{post.date}</span>
                                        <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--primary-green)] group-hover:text-[var(--accent-green)] transition-colors">{post.title}</h3>
                                    <p className="text-gray-500 line-clamp-2">{post.excerpt}</p>
                                    <button className="flex items-center gap-2 text-sm font-bold text-[var(--primary-green)] underline underline-offset-4 decoration-2 decoration-[var(--accent-green)]">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
