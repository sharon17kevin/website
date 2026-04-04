import Link from "next/link";

export default function LuvimesNotFound() {
  return (
    <div className="bg-[#f8faf6] min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-[#3a5a34]">404</h1>
        <p className="text-xl text-[#1a1a1a]/60">Page not found</p>
        <Link
          href="/luvimes"
          className="inline-block px-6 py-3 rounded-full font-semibold bg-[#3a5a34] text-white hover:bg-[#5a8a52] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
