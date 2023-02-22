import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useFilms from "hooks/useMovies";

function Movie() {
  const { movies, defaultMovies, searchTerm, setSearchTerm, handleSearch } = useFilms();
  
  return (
    <div className="my-44">
      <form
        className="flex flex-col md:flex-row sm:flex-row items-center justify-center"
        onSubmit={handleSearch}
      >
        <label className="text-white">
          <input
            className="bg-gray-200 rounded-md p-2 ml-2 text-black"
            type="text"
            value={searchTerm}
            placeholder="Search your movie"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="submit"
        >
          Search
        </button>
      </form>
      <article className="text-white grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-12 w-1/2 mx-auto gap-10">
        {movies?.length > 0
          ? movies.map((movie) => (
              <Link
                href={`/id/${movie.imdbID}`}
                key={movie.title}
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
                <Link
                  href={`https://www.imdb.com/title/${movie.imdbID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                 className=" text-gray-900 bg-white border text-center border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 my-2 truncate w-60 clamp-1"
                >
                 Watch in IMDb {movie.Title}
                </Link>
              </Link>
            ))
          : defaultMovies?.map((movie) => (
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
