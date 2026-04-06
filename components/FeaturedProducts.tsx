import ProductCard from "./ProductCard";

const products = [
    { name: "Pepper", price: "₦2230", image: "/images/luagropic1 (10) 1.png", category: "Whole Grain" },
    { name: "Pepper", price: "₦3230", image: "/images/luagropic1 (17) 1.png", category: "Organic Fresh", isSpecial: true },
    { name: "Tomato", price: "₦1230", image: "/images/luagropic1 (8) 1.png", category: "Farm Fresh" },
    { name: "Beans", price: "₦1530", image: "/images/luagropic1 (9) 1.png", category: "Beans" },
    { name: "Orange", price: "₦530", image: "/images/orange.png", category: "Farm Fresh" },
    { name: "Pasta", price: "₦530", image: "/images/spag.png", category: "Farm Fresh" },
    { name: "Vgetable Oil", price: "530", image: "/images/oil.png", category: "Farm Fresh" },
];

export default function FeaturedProducts() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="section-container">
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-green)]" style={{ fontFamily: "var(--font-display)" }}>Featured Products</h2>
                </div>

                <div className="horizontal-scroll">
                    {products.map((product, idx) => (
                        <ProductCard key={idx} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
