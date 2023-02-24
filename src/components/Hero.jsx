import Image from "next/image";
import React from "react";
import { useFilms } from "hooks/useFilms";
import HeroCarousel from "./HeroCarrousel";
import NavBar from "./NavBar";
function Hero() {
  const images = [
    {
      src: "/jpfirst.jpg",
      height: 3840,
      width: 2160,
      alt: "Hero 1",
    },
    {
      src: "/jp1.jpg",
      height: 1080,
      width: 1920,
      alt: "Hero 2",
    },
    {
      src: "/jp2.jpg",
      height: 3840,
      width: 2160,
      alt: "Hero 3",
    },
    {
      src: "/jp3.webp",
      height: 3840,
      width: 2160,
      alt: "Hero 3",
    },
  ];
  const { defaultMovieHero } = useFilms();

  return (
    <div className="relative">
      <NavBar />
      <HeroCarousel images={images} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      {defaultMovieHero?.map((movie) => (
        <div
          key={movie.imdbID}
          className="w-1/2 mx-auto absolute inset-0 flex flex-col items-center justify-center text-white m-4 sm:items-start"
        >
          <h1 className="text-4xl font-bold text-center sm:text-left">
            {movie.Title}
          </h1>
          <p className="text-xl text-center sm:text-left">{movie.Year}</p>
          <p className="text-justify w-full sm:w-1/2">{movie.Description}</p>
          <button className="text-gray-900 bg-white border text-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-800 dark:text-white dark:border-gray-600 dark:hover:bg-red-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 my-2 truncate ">
            Watch now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Hero;
