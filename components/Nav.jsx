import React from "react";
import request from "../utils/request";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="px-10 sm:px-20 flex items-center text-2xl overflow-x-scroll whitespace-nowrap space-x-10 sm:space-x-20 scrollbar-hide last:pr-24">
        {Object.entries(request).map(([key, { title, url }]) => (
          <p
            className="cursor-pointer hover:scale-125 transition transform duration-100 hover:text-white active:text-red-500"
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </p>
        ))}
      </div>

      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202a]" />
    </nav>
  );
};

export default Nav;
