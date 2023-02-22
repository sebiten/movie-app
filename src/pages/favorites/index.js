import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import useFilms from "hooks/useMovies";


function FavoritesPage() {
const { favorites, setFavorites } = useFilms();
console.log(favorites);
 const {
  title,
  body,
  OmdbID,
 } = favorites;

  return (
    <>
    <div>
      <h1>Favorite Movies</h1>
      <div>
        {favorites.map((favorite) => (
          <div key={favorite.imdbID}>
            <Link href={`/id/${favorite.imdbID}`}>
              watch
            </Link>
            <Image

              src={favorite.poster}
              alt={favorite.title}
              width={200}
              height={300}
            />
            <h2>{favorite.title}</h2>
            <p>{favorite.year}</p>


      </div>
    ))}
    </div>
    </div>
    </>
  );
}

export default FavoritesPage;
