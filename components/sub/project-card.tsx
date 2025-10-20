import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  href: string;
};

export const ProjectCard = ({
  src,
  title,
  href,
}: ProjectCardProps) => {
  return (
    <Link 
      href={href} 
      className="group w-full relative overflow-hidden rounded-xl shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-[#2A0E61] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] hover:border-cyan-500/50"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
      </div>
    </Link>
  );
};
