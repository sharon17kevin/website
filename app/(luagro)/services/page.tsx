import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Store, Zap, Package, Headphones, CalendarCheck } from "lucide-react";

const services = [
    {
        title: "Home Delivery",
        description: "Fast, reliable delivery directly to your doorstep within 60 minutes of harvest-fresh produce.",
        icon: Truck,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Bulk Orders",
        description: "Special pricing for restaurants, events, and large families. Buy more, save more on every order.",
        icon: Package,
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        title: "Subscription Boxes",
        description: "Choose your frequency and get a curated box of the season's best produce delivered weekly or monthly.",
        icon: CalendarCheck,
        color: "bg-orange-50 text-orange-600"
    },
    {
        title: "In-Store Pickup",
        description: "Order online and pick up your items at any of our 50+ local collection points in your neighborhood.",
        icon: Store,
        color: "bg-purple-50 text-purple-600"
    },
    {
        title: "Priority Fresh",
        description: "Premium members get early access to limited seasonal produce and exclusive farm-to-table products.",
        icon: Zap,
        color: "bg-yellow-50 text-yellow-600"
    },
    {
        title: "24/7 Support",
        description: "Our dedicated support team is always available to help with your orders and farm-fresh questions.",
        icon: Headphones,
        color: "bg-pink-50 text-pink-600"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-18">
                {/* Services Hero */}
                <section className="bg-[var(--primary-green)] text-white py-24 md:py-32">
                    <div className="section-container text-center space-y-6">
                        <h1 className="text-5xl md:text-7xl font-black">Our <span className="text-[var(--accent-green)]">Services</span></h1>
                        <p className="text-xl opacity-60 max-w-2xl mx-auto">We provide a comprehensive range of services designed to bring the freshness of the farm directly to your home with 2026 efficiency.</p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="section-container py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="p-10 rounded-[40px] border border-gray-100 bg-[#FDFBF1]/30 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 transition-transform group-hover:rotate-12`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--primary-green)] mb-4">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Modern CTA */}
                <section className="section-container pb-24">
                    <div className="relative h-[400px] rounded-[60px] overflow-hidden group">
                        <div className="absolute inset-0 bg-emerald-900 group-hover:scale-105 transition-transform duration-1000" />
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-12 text-white space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black">Experience the <br /> <span className="text-[var(--accent-green)]">Luagro Standard</span> Today</h2>
                            <button className="bg-white text-emerald-900 px-10 py-4 rounded-full text-xl font-bold hover:bg-[var(--accent-green)] hover:text-white transition-colors">Start Shopping</button>
                        </div>
                        {/* Mesh circles */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-green)]/20 rounded-full blur-[100px] -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -ml-32 -mb-32" />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
