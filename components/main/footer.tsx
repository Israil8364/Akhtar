import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="w-full flex flex-row items-center justify-center gap-8 md:gap-16 mb-8 flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="flex flex-col items-center justify-start text-center"
            >
              <h3 className="font-bold text-[18px] mb-4 text-white">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center gap-2 my-2 hover:text-cyan-400 transition-colors duration-300"
                >
                  {Icon && <Icon className="text-lg" />}
                  <span className="text-[15px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="text-[15px] text-center text-gray-400 border-t border-gray-700 pt-6 w-full">
          &copy;Akhtar {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
