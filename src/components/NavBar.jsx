import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="relative z-10">
      <nav className="w-full bg-nav fixed p-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 ">
            <div className="flex-shrink-0 flex items-center ">
              <Link href="/" className="text-xl font-bold text-white">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={110}
                  height={70}
                  className="rounded-full w-28 h-28"
                />
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Link
                href="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium justify-center"
              >
                Inicio
              </Link>
            
              <Link
                href="/favorites"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Favorites
              </Link>
              <Link
                href="/favorites"
                className="text-white flex gap-4 items-center hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                <Image
                  src="/github-mark-white.png"
                  alt="github"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
