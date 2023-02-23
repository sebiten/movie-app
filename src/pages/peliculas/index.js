import React from "react";
import useFilms from "hooks/useMovies";

import { useState, useEffect } from "react";
import Image from "next/image";

function Peliculas() {
  const { movies, setMovies, defaultMovies, setDefaultMovies } = useFilms();

  return (
    <div className="text-white">
      <h1 className="text-center font-bold uppercase my-12">Peliculas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              height={640}
              width={480}
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
