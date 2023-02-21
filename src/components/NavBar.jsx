import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">
          <div className="flex-shrink-0 flex items-center ">
            <Link href="/" className="text-xl font-bold text-white">
              Peliculas
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
              href="/peliculas"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Películas
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
