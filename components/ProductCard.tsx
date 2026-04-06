import Image from "next/image";

interface ProductProps {
    name: string;
    price: string;
    image: string;
    category: string;
    isSpecial?: boolean;
}

export default function ProductCard({ name, price, image, category, isSpecial }: ProductProps) {
    return (
        <div className={`min-w-[240px] sm:min-w-[260px] md:min-w-[280px] group relative bg-white rounded-3xl p-5 md:p-6 transition-all hover:shadow-2xl snap-start ${isSpecial ? 'bg-emerald-800 text-white' : 'text-[var(--primary-green)] border border-gray-100'}`}>
            <div className="relative h-40 md:h-48 w-full mb-4 md:mb-6 transition-transform group-hover:scale-110">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain"
                />
            </div>

            <div className="space-y-1.5 md:space-y-2">
                <div className="text-[10px] md:text-xs font-semibold uppercase tracking-wider opacity-60">{category}</div>
                <h3 className="text-lg md:text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{name}</h3>
                <div className="text-base md:text-lg font-extrabold">{price}</div>
            </div>

            <div className="mt-4 md:mt-6 flex items-center justify-between gap-2">
                <button className={`px-3 md:px-4 py-2 rounded-lg font-bold text-sm md:text-base transition-colors ${isSpecial ? 'bg-[var(--accent-green)] text-white' : 'bg-gray-100 hover:bg-[var(--accent-green)] hover:text-white'}`}>
                    Add to Cart
                </button>
                <button className="p-2 rounded-lg border border-current opacity-40 hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
            </div>
        </div>
    );
}
