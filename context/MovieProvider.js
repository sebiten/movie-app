import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]); // this is the list of movies that are favorited
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
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Jurassic Park",
      Year: "1993",
      imdbID: "tt0107290",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
    },
    {
      Title: "Hollywood",
      Year: "2020",
      imdbID: "tt10048342",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODc5ZDZmNTEtZDJjZC00ZmMzLWJlZWQtOWNiODI5YjE0YzBmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Click",
      Year: "2006",
      imdbID: "tt0381061",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTA1MTUxNDY4NzReQTJeQWpwZ15BbWU2MDE3ODAxNw@@._V1_SX300.jpg",
    },
    
  ]);

  useEffect(() => {
    setMovies(defaultMovies);
  }, [defaultMovies]); // what does dis code?
  
  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteMovies) {
      setFavorites(favoriteMovies);
    }
  }, []); 

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=494df15b&s=${searchTerm}&type=movie`
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
        favoriteList,
        setFavoriteList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
