import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Movie() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [defaultMovies, setDefaultMovies] = useState([
    {
      Title: "The Shawshank Redemption",
      Year: "1994",
      imdbID: "tt0111161",
      Type: "movie",
      Poster:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "The Godfather",
      Year: "1972",
      imdbID: "tt0068646",
      Type: "movie",
      Poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Godfather: Part II",
      Year: "1974",
      imdbID: "tt0071562",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Dark Knight",
      Year: "2008",
      imdbID: "tt0468569",
      Type: "movie",
      Poster:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    },
  ]);

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
      <article className="text-white grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-12 ">
        {movies.length > 0
          ? movies.map((movie) => (
              <Link
              href={`/id/${movie.imdbID}`}
              key={movie.title} className="flex flex-col items-center">
                <Image
                  src={movie.Poster}
                  alt={movie.Title}
                  width={300}
                  height={400}
                />
                <h1 className="text-2xl">{movie.Title}</h1>
                <p>{movie.Year}</p>
                <a
                  href={`https://www.imdb.com/title/${movie.imdbID}`}
                >Omdb</a>
              </Link>
            ))
          : defaultMovies.map((movie) => (
              <Link
              href={`/id/${movie.imdbID}`}
              key={movie.Title} className="flex flex-col items-center">
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
