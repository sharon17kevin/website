import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  href: string;
  logoSrc?: string;
  status: "live" | "coming-soon";
}

export default function ProjectCard({
  name,
  description,
  href,
  logoSrc,
  status,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="block bg-white rounded-3xl p-8 border-2 border-[#97C93C] shadow-sm hover:shadow-lg transition-shadow group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {logoSrc && (
            <Image
              src={logoSrc}
              alt={`${name} logo`}
              width={48}
              height={48}
              className="rounded-xl"
            />
          )}
          <h3 className="text-2xl font-bold text-[#3a5a34]">{name}</h3>
        </div>
        {status === "live" && (
          <span className="text-xs font-bold px-3 py-1 bg-[#97C93C] text-white rounded-full">
            LIVE
          </span>
        )}
        {status === "coming-soon" && (
          <span className="text-xs font-bold px-3 py-1 bg-gray-200 text-gray-500 rounded-full">
            COMING SOON
          </span>
        )}
      </div>
      <p className="text-[#1a1a1a]/60 text-lg mb-6">{description}</p>
      <span className="inline-flex items-center gap-2 text-[#3a5a34] font-semibold group-hover:text-[#97C93C] transition-colors">
        Visit {name} <span aria-hidden="true">&rarr;</span>
      </span>
    </a>
  );
}
