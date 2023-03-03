import Image from "next/image";
import Link from "next/link";
import React from "react";
import { defaultSeries } from "DataMovies/defaultSeries";

function Series() {
  return (
    <div>
      <h2 className="text-center font-bold text-white text-2xl uppercase">
        Or why not your favorites series!
      </h2>
      <div className="grid grid-cols-2 xl:grid-cols-4 sm:grid-cols-3 sm:w-full mx-auto my-10 xl:w-1/2 gap-4 py-10">
        {defaultSeries.map((series) => (
          <div
            key={series.imdbID}
            className="border border-gray-800 rounded-md overflow-hidden"
          >
            <Link href={`/id/${series?.imdbID}`}>
              <div className="relative">
                <Image
                  src={series.Poster}
                  alt={series.Title}
                  width={200}
                  height={300}
                  className="h-[400px] w-[300px] object-cover mx-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-80 text-white">
                  <h3 className="text-lg font-medium">{series.Title}</h3>
                  <p className="text-gray-300">{series.Year}</p>
                </div>
              </div>
            </Link>
            <button
              className="flex items-center justify-center w-full py-2 bg-[#8a1010] text-white text-sm uppercase rounded-b-md hover:bg-red-600 transition-colors duration-300"
              onClick={() => (window.location.href = `/id/${series?.imdbID}`)}
            >
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 12l-18 9v-18z"></path>
              </svg>
              More Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Series;
