import { useFilms } from "hooks/useFilms";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Search() {
  const { movies, setMovies } = useFilms();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_OMDB_API_KEY}${searchTerm}`
    );
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <>
      <form
        className="flex flex-col md:flex-row sm:flex-row items-center justify-center w-1/2 mx-auto "
        onSubmit={handleSearch}
      >
        <label className="text-white">
          <input
            className="bg-gray-200 rounded-md p-2 text-black sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[300px] mt-10"
            type="text"
            value={searchTerm}
            placeholder="Search your movie or series"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-10"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-2 xl:grid-cols-4 sm:grid-cols-3 sm:w-full mx-auto my-10 xl:w-1/2 gap-4">
        {movies?.map((movie) => (
          <Link
            href={`/id/${movie.imdbID}`}
            className="mx-auto"
            key={movie.imdbID}
          >
            <Image
              src={movie.Poster}
              alt={movie.Title}
              width={300}
              height={400}
              className="rounded-md h-[350px] w-[300px]"
            />
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
            <p>{movie.Description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Search;
