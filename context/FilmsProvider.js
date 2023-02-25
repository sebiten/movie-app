import { createContext, useEffect, useState } from "react";


export const FilmsContext = createContext();

export const FilmsProvider = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState(() => false);
  const [favorites, setFavorites] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]); // this is the list of movies that are favorited
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteMovies) {
      setFavorites(favoriteMovies);
    } else {
      setFavorites([]);
    }
  }, []);


  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${searchTerm}`
    );
    const data = await response.json();
    setMovies(data.Search);
  };
  
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
        searchTerm,
        setSearchTerm,
        movies,
        setMovies,
        handleSearch,
        favorites,
        setFavorites,
        isFavorite,
        setIsFavorite,
        favoriteList,
        setFavoriteList,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
};
