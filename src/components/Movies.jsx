import Image from "next/image";
import React, { useState } from "react";

function Movie() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=494df15b&s=${searchTerm}&type=movie`
    );
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="mt-44">
      <form
        className="flex flex-col md:flex-row sm:flex-row items-center justify-center"
        onSubmit={handleSearch}
      >
        <label className="text-white">
          Search Movies:
          <input
            className="bg-gray-200 rounded-md p-2 ml-2 text-black"
            type="text"
            value={searchTerm}
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
      <article className="text-white grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-12 ">
        {movies?.map((movie) => (
          <ul key={movie.imdbID}>
            <li className="">
              <li className="text-center">
                {movie.Title} ({movie.Year})
              </li>
              <Image
                width={350}
                height={300}
                src={movie.Poster}
                alt={movie.Title}
              />
            </li>
            <li>{movie.Type}</li>
            <li>
              <a href={`https://www.imdb.com/title/${movie.imdbID}`}>IMDB</a>
            </li>
            <li>
              <a
                href={`https://www.youtube.com/results?search_query=${movie.Title}+trailer`}
              >
                Trailer
              </a>
            </li>
            <li>
              <a
                href={`https://www.google.com/search?q=${movie.Title}+movie+rating`}
              >
                Rating
              </a>
            </li>
          </ul>
        ))}
      </article>
    </div>
  );
}

export default Movie;
