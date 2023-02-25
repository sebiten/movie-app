import { useFilms } from "hooks/useFilms";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FavoriteButton from "./FavoriteButton";

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

  useEffect(() => {
    const isFavorite = favorites.some((favorite) => favorite.imdbID === imdbID);
    setIsFavorite(isFavorite);

  }, [setIsFavorite, favorites, imdbID]); // permits the user to favorite a movie
  // and then unfavorite it
  // and then favorite it again
  const handleFavoriteClick = () => {
    if (isFavorite) {
      const newFavorites = favorites.filter(
        (favorite) => favorite.imdbID !== imdbID
      );
      setFavorites(newFavorites);
      setIsFavorite(false);
    } else {
      const newFavorites = [...favorites, { title, year, poster, imdbID }];
      setFavorites(newFavorites);
      setIsFavorite(true);
    }
  };

  return (
    <div className="text-white px-4 sm:px-6 md:px-8 xl:w-1/2 sm:w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="flex flex-wrap mb-4">
            <div className="flex items-center justify-center mx-auto">
              <Image
                className="rounded-lg mx-auto"
                width={500}
                height={500}
                src={poster}
                alt={title}
              />
            </div>
            <div className="mx-auto flex items-center text-center">
              <p className=" leading-8 p-12">{plot}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-4">Movie information</h3>
          <div className="grid grid-cols-2 gap-2 mb-4 mt-5">
            <div>
              <p className=" font-semibold">Released:</p>
              <p>{teleased}</p>
              <p className=" font-semibold">Runtime:</p>
              <p>{tuntime}</p>
              <p className=" font-semibold">Genre:</p>
              <p>{genre}</p>
              <p className=" font-semibold">Director:</p>
              <p>{director}</p>
              <p className=" font-semibold">Writer:</p>
              <p>{writer}</p>
            </div>
            <div className="mx-4">
              <p className=" font-semibold">Metascore:</p>
              <p>{metascore}</p>
              <p className=" font-semibold">IMDb Rating:</p>
              <p>{imdbRating}</p>
              <p className=" font-semibold">IMDb Votes:</p>
              <p>{imdbVotes}</p>
              <p className=" font-semibold">Box Office:</p>
              <p>{boxOffice}</p>
              <p className=" font-semibold">Production:</p>
              <p>{production}</p>
              <p className=" font-semibold">Website:</p>
              <p>{website}</p>
            </div>
            <div className="mt-6">
              <p className=" font-semibold">Actors:</p>
              <p>{actors}</p>

              <p className=" font-semibold">Awards:</p>
              <p>{awards}</p>

              <p className=" font-semibold">Country:</p>
              <p>{country}</p>

              <p className=" font-semibold">Language</p>
              <p>{language}</p>

              <p className=" font-semibold">Rated:</p>
              <p>{rated}</p>
            </div>
            <div>
              <div className="border-dashed mx-4 mt-6">
                <p className=" font-semibold">Released:</p>
                <p>{released}</p>
                <p className=" font-semibold">Runtime:</p>
                <p>{runtime}</p>
                <p className=" font-semibold">Genre:</p>
                <p>{genre}</p>
                <p className=" font-semibold">Director:</p>
                <p>{director}</p>
                <p className=" font-semibold">Writer:</p>
                <p>{writer}</p>
                <br></br>
              </div>
            </div>
          </div>
          <div className="flex my-4">
            <svg
              className={`w-6 h-6 ${
                isFavorite ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v12m0 0l-4-4m4 4l4-4"
              />
            </svg>

            <h1>Watch movie here</h1>
          </div>

          <div className="flex items-center justify-start ">
            <Link
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              href={`https://www.imdb.com/title/${imdbID}`}
              target="_blank"
            >
              {" "}
              Go to IMDb
            </Link>
            <button
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
          <FavoriteButton
            onClick={handleFavoriteClick}
            isFavorite={isFavorite}
            handleFavoriteClick={handleFavoriteClick}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;
