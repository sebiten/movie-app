import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useFilms from "hooks/useMovies";

function Movie() {
 const { movies, defaultMovies, searchTerm, setSearchTerm, handleSearch } = useFilms();
  
  return (
    <div className="mt-44">
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
          className="bg-blue-500 rounded-md p-2 ml-2 text-white"
          type="submit"
        >
          Search
        </button>
      </form>
      <article className="text-white grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-12 w-1/2 mx-auto">
        {movies?.length > 0
          ? movies.map((movie) => (
              <Link
                href={`/id/${movie.imdbID}`}
                key={movie.title}
                className="flex flex-col items-center"
              >
                <Image
                  src={movie.Poster}
                  alt={movie.Title}
                  width={300}
                  height={400}
                />
                <h1 className="text-2xl">{movie.Title}</h1>
                <p>{movie.Year}</p>
                <a href={`https://www.imdb.com/title/${movie.imdbID}`}>Omdb</a>
              </Link>
            ))
          : defaultMovies?.map((movie) => (
              <Link
                href={`/id/${movie.imdbID}`}
                key={movie.Title}
                className="flex flex-col items-center"
              >
                <Image
                  src={movie.Poster}
                  alt={movie.Title}
                  width={300}
                  height={400}
                />
                <h1 className="text-2xl">{movie.Title}</h1>
                <p>{movie.Year}</p>
              </Link>
            ))}
      </article>
    </div>
  );
}

export default Movie;
