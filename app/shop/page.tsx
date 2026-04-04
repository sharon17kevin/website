import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import PromoSlider from "@/components/PromoSlider";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

const categories = [
    { name: "Fruits", image: "/images/fruits.jpg", count: 45 },
    { name: "Meats", image: "/images/meats.jpg", count: 32 },
    { name: "Vegetables", image: "/images/vegetables.jpg", count: 58 },
    { name: "Dairy", image: "/images/eggs.jpg", count: 24 },
    { name: "Grains", image: "/images/grains.webp", count: 19 },
    { name: "Spices", image: "/images/spices2.jpg", count: 12 },
    { name: "Legumes", image: "/images/legumes.jpg", count: 15 },
];

const products = {
    "Fruits": [
        { name: "Apple", price: "₦500", image: "/images/apple.webp", category: "Fruits" },
        { name: "Mango", price: "₦500", image: "/images/mango.jpg", category: "Fruits" },
        { name: "Pineapple", price: "₦2000", image: "/images/pineapple.jpg", category: "Fruits" },
        { name: "Orange", price: "₦530", image: "/images/orange.png", category: "Fruits" },
    ],
    "Grains": [
        { name: "Beans", price: "₦1530", image: "/images/luagropic1 (9) 1.png", category: "Grains" },
        { name: "Cornflakes", price: "₦2500", image: "/images/cornflakes.jpg", category: "Grains" },
        { name: "Rice (1.2kg)", price: "₦2250", image: "/images/rice.jpg", category: "Grains" },
        { name: "Egusi Grains", price: "₦2000", image: "/images/egusi.jpg", category: "Grains" },
    ],
    "Flours": [
        { name: "Poundo Yam Flour", price: "₦2000", image: "/images/poundo.jpg", category: "Flours" },
        { name: "Amala (Yam Flour)", price: "₦2000", image: "/images/amala.webp", category: "Flours" }
    ],
    "Meats": [
        { name: "Beef", price: "₦2500", image: "/images/beef.jpg", category: "Meats" },
        { name: "Catfish", price: "₦3500", image: "/images/catfish.webp", category: "Meats" },
        { name: "Grilled Fish", price: "₦5000", image: "/images/grilled-fish.jpg", category: "Meats" }
    ],
    "Vegetables": [
        { name: "Onions", price: "₦300", image: "/images/onions.webp", category: "Vegetables" },
        { name: "Tomatoes", price: "₦500", image: "/images/tomatoes.webp", category: "Vegetables" },
        { name: "Sweet Potatoes", price: "₦1000", image: "/images/sweetpotatoes.webp", category: "Vegetables" },
        { name: "Plantain (Bunch)", price: "₦2000", image: "/images/plantain.jpg", category: "Vegetables" },
        { name: "Vegetables", price: "₦1200", image: "/images/luagropic1 (17) 1.png", category: "Vegetables" },
    ],
    "Dairy": [
        { name: "Eggs (Single)", price: "₦200", image: "/images/eggs.jpg", category: "Dairy" }
    ],
    "Spices": [
        { name: "Cooking Oil", price: "₦500", image: "/images/oil.png", category: "Spices" }
    ],
    "Bakery": [
        { name: "Bread", price: "₦1500", image: "/images/bread.png", category: "Bakery" }
    ],
    "Legumes": [
        { name: "Brown Beans", price: "₦3200", image: "/images/legumes.jpg", category: "Legumes" },
        { name: "Soya Beans", price: "₦2800", image: "/images/luagropic1 (9) 1.png", category: "Legumes" }
    ]
};

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF1]">
            <Navbar />

            <main className="pt-18">
                {/* Redesigned Shop Hero: Text Left, Corn Right */}
                <section className="relative min-h-[500px] flex items-center bg-emerald-950 overflow-hidden">
                    <div className="section-container grid md:grid-cols-2 gap-12 items-center relative z-10 py-20">
                        <div className="text-white space-y-8 animate-fade-in-left">
                            <div className="inline-block bg-[var(--accent-green)] text-emerald-950 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">
                                Winter Harvest Sales
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black leading-tight">
                                Save Up To <br />
                                <span className="text-[var(--accent-green)]">30% OFF</span>
                            </h1>
                            <p className="text-xl md:text-2xl opacity-70 leading-relaxed max-w-lg">
                                Experience the richness of the season with our hand-picked winter harvest collection.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="btn-primary bg-[var(--accent-green)] text-emerald-950 px-10 py-4 text-lg font-bold hover:scale-105 transition-transform">
                                    Shop Now
                                </button>
                                <button className="border-2 border-white/20 hover:border-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:bg-white/5">
                                    View Details
                                </button>
                            </div>
                        </div>
                        <div className="relative h-[400px] md:h-[600px] animate-fade-in-right hidden md:block">
                            <Image
                                src="/images/corn.png"
                                alt="Corn Harvest"
                                fill
                                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                priority
                            />
                            {/* Decorative glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--accent-green)]/20 rounded-full blur-[100px] -z-10" />
                        </div>
                    </div>
                </section>

                {/* 1. Promos Section (Moved Up) */}
                <section className="section-container py-24">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black text-[var(--primary-green)]">Exclusive Deals</h2>
                            <p className="text-gray-500 text-lg">Don't miss out on these limited-time seasonal offers.</p>
                        </div>
                    </div>
                    <PromoSlider />
                </section>

                {/* 2. Category Lists (Fruits, Grains, etc.) */}
                <section className="section-container pb-24 space-y-32">
                    {/* Fruits Section */}
                    <div className="space-y-10">
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl font-black text-[var(--primary-green)]">Premium Fruits</h2>
                            <Link href="#" className="flex items-center gap-2 font-black text-[var(--accent-green)] group">
                                Explore All <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.Fruits.map((p, i) => (
                                <ProductCard key={i} {...p} />
                            ))}
                        </div>
                    </div>

                    {/* Grains Section */}
                    <div className="space-y-10">
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl font-black text-[var(--primary-green)]">Farm-Fresh Grains</h2>
                            <Link href="#" className="flex items-center gap-2 font-black text-[var(--accent-green)] group">
                                Explore All <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.Grains.map((p, i) => (
                                <ProductCard key={i} {...p} />
                            ))}
                        </div>
                    </div>

                    {/* Vegetables Section */}
                    <div className="space-y-10">
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl font-black text-[var(--primary-green)]">Organic Vegetables</h2>
                            <Link href="#" className="flex items-center gap-2 font-black text-[var(--accent-green)] group">
                                Explore All <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.Vegetables.map((p, i) => (
                                <ProductCard key={i} {...p} />
                            ))}
                        </div>
                    </div>

                    {/* Meats Section */}
                    <div className="space-y-10">
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl font-black text-[var(--primary-green)]">Premium Meats</h2>
                            <Link href="#" className="flex items-center gap-2 font-black text-[var(--accent-green)] group">
                                Explore All <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.Meats.map((p, i) => (
                                <ProductCard key={i} {...p} />
                            ))}
                        </div>
                    </div>

                    {/* Dairy Section */}
                    <div className="space-y-10">
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl font-black text-[var(--primary-green)]">Fresh Dairy</h2>
                            <Link href="#" className="flex items-center gap-2 font-black text-[var(--accent-green)] group">
                                Explore All <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.Dairy.map((p, i) => (
                                <ProductCard key={i} {...p} />
                            ))}
                        </div>
                    </div>

                    {/* Spices Section */}
                    <div className="space-y-10">
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl font-black text-[var(--primary-green)]">Aromatic Spices</h2>
                            <Link href="#" className="flex items-center gap-2 font-black text-[var(--accent-green)] group">
                                Explore All <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.Spices.map((p, i) => (
                                <ProductCard key={i} {...p} />
                            ))}
                        </div>
                    </div>

                    {/* Legumes Section */}
                    <div className="space-y-10">
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl font-black text-[var(--primary-green)]">Healthy Legumes</h2>
                            <Link href="#" className="flex items-center gap-2 font-black text-[var(--accent-green)] group">
                                Explore All <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.Legumes.map((p, i) => (
                                <ProductCard key={i} {...p} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Shop by Category (Moved Down) */}
                <section className="bg-white py-24 border-y border-gray-100">
                    <div className="section-container">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-[var(--primary-green)]">Browse All Categories</h2>
                            <p className="text-gray-500 text-xl">Find exactly what you're looking for by browsing our curated collections.</p>
                        </div>
                        <div className="flex gap-10 overflow-hidden scrollbar-hide pb-10">
                            {categories.map((cat) => (
                                <CategoryCard key={cat.name} name={cat.name} image={cat.image} itemCount={cat.count} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Buy More Save More (Moved to Bottom) */}
                <section className="section-container py-32">
                    <div className="relative min-h-[400px] rounded-[60px] overflow-hidden bg-emerald-950 flex flex-col md:flex-row items-center px-12 md:px-24 text-white group">
                        <div className="z-10 space-y-8 max-w-xl py-16 md:py-0">
                            <div className="inline-flex items-center gap-3 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20 px-4 py-2 rounded-full text-[var(--accent-green)] font-bold text-sm">
                                <ShoppingCart size={18} />
                                Bulk Order Benefits
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black leading-tight">Buy More <br /> <span className="text-[var(--accent-green)] underline decoration-wavy decoration-white/20 underline-offset-8">Save More</span></h2>
                        </div>
                        <div className="relative hidden md:block w-full md:w-1/2 h-[300px] md:h-full md:absolute md:right-0 md:top-0 animate-pulse-slow">
                            <Image
                                src="/images/cart.jpg"
                                alt="Buy More Save More"
                                fill
                                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                            />
                            {/* Gradient mask for smooth blending */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/40 to-transparent hidden md:block" />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent md:hidden" />
                        </div>

                        {/* Decorative floating particles effect simulation */}
                        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[var(--accent-green)] rounded-full blur-sm animate-bounce" />
                        <div className="absolute bottom-1/3 right-1/2 w-6 h-6 bg-white rounded-full blur-md opacity-20 animate-pulse" />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
