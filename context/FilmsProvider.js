import { createContext, useEffect, useState } from "react";

export const FilmsContext = createContext();

export const FilmsProvider = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState(() => false);
  const [favorites, setFavorites] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]); // this is the list of movies that are favorited
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_OMDB_API_KEY}` +
          searchTerm + // this is the search term
          `&type=${type}` +
          `&page=${page}`
          
      );
      if (!response.ok) {
        throw new Error("Hubo un problema al buscar las películas.");
      }
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteMovies) {
      setFavorites(favoriteMovies);
    } else {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    const favoriteList = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteList) {
      setFavorites(favoriteList);
    }
  }, [setFavorites]); // this is the list of movies that are favorited

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FilmsContext.Provider
      value={{
        movies,
        setMovies,
        favorites,
        setFavorites,
        isFavorite,
        setIsFavorite,
        favoriteList,
        setFavoriteList,
        handleSearch,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
};
