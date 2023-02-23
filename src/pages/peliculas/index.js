import React from "react";
import useFilms from "hooks/useMovies";

import { useState, useEffect } from "react";
import Image from "next/image";

function Peliculas() {
  const { movies, setMovies, defaultMovies, setDefaultMovies, searchTerm, setSearchTerm, handleSearch } = useFilms();

  return (
    <div className="text-white">
      <h1 className="text-center font-bold uppercase my-12">Peliculas</h1>
      <form
        className="flex flex-col md:flex-row sm:flex-row items-center justify-center my-4"
        onSubmit={handleSearch}
      >
        <label className="text-white">
          <input
            className="bg-gray-200 rounded-md p-2  text-black"
            type="text"
            value={searchTerm}
            placeholder="Search your movie"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              height={500}
              width={400}
              src={movie.Poster}
              alt={movie.Title}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{movie.Title}</h2>
              <p className="text-sm">{movie.Year}</p>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Ver más
              </button>

              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                Favorito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Peliculas;
