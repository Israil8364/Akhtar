import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PROJECTS } from "@/constants/index.ts";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  return {
    title: project ? project.title : "Project",
    description: project?.description,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="px-6 md:px-10 py-16">
        <h1 className="text-3xl text-white">Project not found</h1>
        <Link href="/projects" className="mt-4 inline-block underline text-white/80 hover:text-white">
          Back to All Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col gap-10 mt-16">
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-14">
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="text-3xl md:text-5xl font-semibold text-white">
              {project.title}
            </h1>
            <p className="text-white/70 max-w-3xl text-base md:text-lg">
              {project.description}
            </p>
            <div className="flex items-center gap-4">
              {project.externalUrl && (
                <Link
                  href={project.externalUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2"
                >
                  Get Template
                </Link>
              )}
              <Link href="/projects" className="text-white/80 hover:text-white underline underline-offset-4">
                Back to All
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Preview image */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 w-full">
        <div className="w-full h-72 md:h-[28rem] flex items-center justify-center bg-[#18122b] rounded-2xl border border-[#2A0E61] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            className="w-full h-full object-contain"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>


      {/* How it works - three steps */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How does it work?</h2>
          <p className="mt-3 text-white/70 text-base md:text-lg">Set it up in three simple steps</p>
        </div>

        {/* Dotted connector for desktop */}
        <div className="hidden md:block relative h-10 mb-6">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            <div className="mx-28 h-0 border-t-2 border-dotted border-white/20"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Step 1 */}
          <div className="relative rounded-2xl bg-[#0a0719] border border-[#2A0E61] p-6 text-center shadow-[0_8px_24px_rgba(42,14,97,0.25)]">
            <div className="mx-auto -mt-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-[#0a0719] flex items-center justify-center text-xl font-semibold">
              1
            </div>
            <h3 className="mt-4 text-white text-lg font-semibold">Get the Template</h3>
            <p className="mt-2 text-white/70 text-sm">Get a template from n8n.io/workflows by copying or downloading the JSON.</p>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-2xl bg-[#0a0719] border border-[#2A0E61] p-6 text-center shadow-[0_8px_24px_rgba(42,14,97,0.25)]">
            <div className="mx-auto -mt-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-[#0a0719] flex items-center justify-center text-xl font-semibold">
              2
            </div>
            <h3 className="mt-4 text-white text-lg font-semibold">Import Template to Your n8n</h3>
            <p className="mt-2 text-white/70 text-sm">Import it into your n8n instance by pasting or uploading the JSON in the workflow import option.</p>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-2xl bg-[#0a0719] border border-[#2A0E61] p-6 text-center shadow-[0_8px_24px_rgba(42,14,97,0.25)]">
            <div className="mx-auto -mt-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-[#0a0719] flex items-center justify-center text-xl font-semibold">
              3
            </div>
            <h3 className="mt-4 text-white text-lg font-semibold">Configure & Activate</h3>
            <p className="mt-2 text-white/70 text-sm">Configure credentials, test the workflow, and activate it to run automatically.</p>
            {/* Removed external URL link */}
          </div>
        </div>
      </section>



   
      
    </main>
  );
}


