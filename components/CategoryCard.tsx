import Image from "next/image";

interface CategoryCardProps {
    name: string;
    image: string;
    itemCount?: number;
}

export default function CategoryCard({ name, image, itemCount }: CategoryCardProps) {
    return (
        <div className="flex flex-col items-center gap-3 md:gap-4 group cursor-pointer shrink-0">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[var(--accent-green)] transition-all duration-300 shadow-md group-hover:shadow-lg">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="text-center">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-[var(--primary-green)] transition-colors">{name}</h3>
                {itemCount !== undefined && (
                    <p className="text-[10px] md:text-xs text-gray-500">{itemCount} items</p>
                )}
            </div>
        </div>
    );
}
