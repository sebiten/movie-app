import { useFilms } from "hooks/useFilms";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Movie() {
  const { defaultSeries } = useFilms();
  
  return (
    <div className="my-20 w-full mx-auto bg-black p-6 rounded-lg" >
      <h3 className="text-center text-white text-3xl font-bold my-10">Or your favorites series!</h3>
      <article className="text-white grid xl:grid-cols-9 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-12 gap-4 ">
        {defaultSeries?.length > 0
          ? defaultSeries.map((movie) => (
              <Link
                href={`/id/${movie.imdbID}`}
                key={movie.imdbID}
                className="flex flex-col items-center group"
              >
                <div className="relative w-full h-full">
                  <Image
                    width={300}
                    height={400}
                    src={movie.Poster}
                    alt={movie.Title}
                    className="rounded-md group-hover:opacity-75 transition-opacity duration-300 mx-auto"
                  />
                </div>
                <h1 className="text-xl mt-2 text-center truncate">{movie.Title}</h1>
                <p className="text-lg">{movie.Year}</p>
                <Link
                  href={`https://www.imdb.com/title/${movie.imdbID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                 className=" text-gray-900 bg-white border text-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 my-2 truncate w-60 clamp-1"
                >
                 Watch in IMDb {movie.Title}
                </Link>
              </Link>
            ))
          : defaultdefaultSeries?.map((movie) => (
              <Link
                href={`/id/${movie.imdbID}`}
                key={movie.Title}
                className="flex flex-col items-center group"
              >
                <div className="relative w-full h-full">
                  <Image
                    width={300}
                    height={400}
                    src={movie.Poster}
                    alt={movie.Title}
                  
                    className="rounded-md group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>
                <h1 className="text-2xl mt-2">{movie.Title}</h1>
                <p className="text-lg">{movie.Year}</p>
              </Link>
            ))}
      </article>
     
    </div>
  );
}

export default Movie;
