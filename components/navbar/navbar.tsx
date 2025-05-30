import Link from "next/link";
import React from "react";

const items = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/" },
  { name: "Experience", href: "/" },
  { name: "Skills", href: "/" },
  { name: "Contact", href: "/" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3 font-main font-bold">
      <div className="bg-zinc-900 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg border border-slate-400">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-2xl font-bold text-white">sup.dev</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center justify-center space-x-4">
              {items.map((items) => (
                <Link
                  key={items.name}
                  href={items.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white hover:duration-500 px-3 py-2 rounded-md text-sm">
                  {items.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
