import Link from "next/link";

export default function LuagroNotFound() {
  return (
    <div className="bg-[#FDFBF1] min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-[var(--primary-green)]">404</h1>
        <p className="text-xl text-gray-500">Page not found</p>
        <Link href="/" className="btn-primary inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
