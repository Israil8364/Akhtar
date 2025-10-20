import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg px-4 py-8 md:p-[15px]">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-4">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="flex flex-col items-center md:items-start space-y-4"
            >
              <h3 className="font-bold text-lg md:text-[16px] text-purple-500">{column.title}</h3>
              <div className="flex flex-col items-center md:items-start space-y-3">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center hover:text-purple-400 transition-colors duration-300"
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="text-sm ml-2">{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center w-full">
          <p>&copy; {new Date().getFullYear()} Akhtar. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
