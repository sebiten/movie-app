import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [defaultMovies, setDefaultMovies] = useState([
    {
      Title: "The Shawshank Redemption",
      Year: "1994",
      imdbID: "tt0111161",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "The Godfather",
      Year: "1972",
      imdbID: "tt0068646",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
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
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    },
    {
      Title: "The Dark Knight",
      Year: "2008",
      imdbID: "tt0468569",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    },
    {
      Title: "The Dark Knight",
      Year: "2008",
      imdbID: "tt0468569",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    },
    {
      Title: "The Dark Knight",
      Year: "2008",
      imdbID: "tt0468569",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    },
    {
      Title: "The Dark Knight",
      Year: "2008",
      imdbID: "tt0468569",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
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
    <MovieContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        movies,
        setMovies,
        defaultMovies,
        setDefaultMovies,
        handleSearch,
        favorites,
        setFavorites,
        isFavorite,
        setIsFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
