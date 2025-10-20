import Link from "next/link";
import Image from "next/image";

import { PROJECTS } from "@/constants";

export default function ProjectsIndexPage() {
  return (
    <main className="flex flex-col gap-12">
      {/* Banner */}
      <section className="relative w-full flex justify-center items-center overflow-hidden bg-gradient-to-br from-[#2A0E61]/40 to-[#030014]/80 py-8 mt-16">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center px-2 md:px-6">
          <div className="rounded-3xl border-2 border-[#2A0E61] bg-[linear-gradient(180deg,rgba(42,14,97,0.45)_0%,rgba(3,0,20,0.7)_100%)] shadow-xl p-4 md:p-8 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              <span className="block text-white/80 text-lg md:text-xl mb-2 tracking-wide">Curated Work</span>
              10+ crafted projects and automations
            </h1>
            <p className="mt-4 max-w-2xl text-white/70 text-base md:text-lg">
              Discover recent builds, UI experiments, and production apps. Click any card to view details.
            </p>
          </div>
        </div>
      </section>

      {/* Recent section header */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-white">Recent Projects</h2>
        <p className="text-white/60 text-sm mt-1">Browse the newest additions</p>
      </div>

      {/* Cards grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-16">
        {PROJECTS.map((project) => (
          <div key={project.slug} className="rounded-2xl bg-[#0a0719] border border-[#2A0E61] p-3">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={600}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
            <div className="pt-4 flex flex-col gap-3">
              <h3 className="text-white text-lg font-semibold leading-snug line-clamp-2 min-h-[3rem]">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm line-clamp-2 min-h-[2.5rem]">{project.description}</p>
              <div className="flex items-center justify-between pt-1">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-sm"
                >
                  View details
                </Link>
                <Link
                  href={project.externalUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white/70 hover:text-white text-sm underline underline-offset-4"
                >
                  Get Template
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


