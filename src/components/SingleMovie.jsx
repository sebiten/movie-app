import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useFilms from "hooks/useMovies";

function SingleMovie({
  title,
  year,
  poster,
  plot,
  released,
  runtime,
  genre,
  director,
  writer,
  metascore,
  imdbRating,
  imdbVotes,
  boxOffice,
  production,
  website,
  actors,
  awards,
  country,
  language,
  rated,
  teleased,
  tuntime,
  imdbID,
}) {
  const { favorites, setFavorites, isFavorite, setIsFavorite } = useFilms();

  return (
    <div className="text-white px-4 sm:px-6 md:px-8 w-1/2 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="flex flex-wrap mb-4">
            <div className="flex items-center justify-center mx-auto">
              <Image
                className="rounded-lg mx-auto"
                width={550}
                height={500}
                src={poster}
                alt={title}
              />
            </div>
            <div className="mx-auto flex items-center text-center">
              <p className="text-xl leading-8 p-12">{plot}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="border p-4">
              <p className="text-xl font-semibold">Released:</p>
              <p className="text-xl">{teleased}</p>
              <p className="text-xl font-semibold">Runtime:</p>
              <p className="text-xl">{tuntime}</p>
              <p className="text-xl font-semibold">Genre:</p>
              <p className="text-xl">{genre}</p>
              <p className="text-xl font-semibold">Director:</p>
              <p className="text-xl">{director}</p>
              <p className="text-xl font-semibold">Writer:</p>
              <p className="text-xl">{writer}</p>
            </div>
            <div className="border p-4">
              <p className="text-xl font-semibold">Metascore:</p>
              <p className="text-xl">{metascore}</p>
              <p className="text-xl font-semibold">IMDb Rating:</p>
              <p className="text-xl">{imdbRating}</p>
              <p className="text-xl font-semibold">IMDb Votes:</p>
              <p className="text-xl">{imdbVotes}</p>
              <p className="text-xl font-semibold">Box Office:</p>
              <p className="text-xl">{boxOffice}</p>
              <p className="text-xl font-semibold">Production:</p>
              <p className="text-xl">{production}</p>
              <p className="text-xl font-semibold">Website:</p>
              <p className="text-xl">{website}</p>
            </div>
            <div className="border p-4">
              <p className="text-xl font-semibold">Actors:</p>
              <p className="text-xl">{actors}</p>

              <p className="text-xl font-semibold">Awards:</p>
              <p className="text-xl">{awards}</p>

              <p className="text-xl font-semibold">Country:</p>
              <p className="text-xl">{country}</p>

              <p className="text-xl font-semibold">Language</p>
              <p className="text-xl">{language}</p>

              <p className="text-xl font-semibold">Rated:</p>
              <p className="text-xl">{rated}</p>
            </div>
            <div>
              <div className="border p-4">
                <p className="text-xl font-semibold">Released:</p>
                <p className="text-xl">{released}</p>
                <p className="text-xl font-semibold">Runtime:</p>
                <p className="text-xl">{runtime}</p>
                <p className="text-xl font-semibold">Genre:</p>
                <p className="text-xl">{genre}</p>
                <p className="text-xl font-semibold">Director:</p>
                <p className="text-xl">{director}</p>
                <p className="text-xl font-semibold">Writer:</p>
                <p className="text-xl">{writer}</p>
                <br></br>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-center font-bold uppercase my-3">
              Watch movie here
            </h1>
            <Link
              className="text-center text-2xl font-bold text-white bg-red-500 p-4 rounded-lg"
              href={`https://www.imdb.com/title/${imdbID}`}
              target="_blank"
            >
              {" "}
              Go to IMDb
            </Link>
            <button
              onClick={(e) => {
                if (isFavorite) {
                  setFavorites(
                    Object.fromEntries(
                      Object.entries(favorites).filter(
                        ([key, value]) => key !== imdbID
                      )
                    )
                  );
                  setIsFavorite(false);
                } else {
                  setFavorites({
                    ...favorites,
                    [imdbID]: { imdbID, title, poster },
                  });
                  setIsFavorite(true);
                }
              }}
              className="text-center text-2xl font-bold text-white bg-amber-..."
            >
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </button>

            <button
              className="text-center text-2xl font-bold text-white bg-red-500 p-4 rounded-lg"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;
