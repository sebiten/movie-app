import { createContext, useEffect, useState } from "react";

export const FilmsContext = createContext();

export const FilmsProvider = ({ children }) => {
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
    {
      Title: "Avatar",
      Year: "2009",
      imdbID: "tt0499549",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
  ]);
  const [defaultMovieHero, setDefaultMovieHero] = useState([
    {
      Title: "Jurassic Park",
      Description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose." , 
      Year: "1993",
      imdbID: "tt0107290",
      Type: "movie",
      Priority: "1",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
    },
  ]);
  const [defaultSeries, setDefaultSeries] = useState([
    {
      Title: "The Mandalorian",
      Year: "2019–",
      imdbID: "tt8111088",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjRlZDIyNDMtZjIwYi00YmJiLTg4NjMtODA2Mjc0YTBlNzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Game of Thrones",
      Year: "2011–2019",
      imdbID: "tt0944947",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg",
    },
    {
      Title: "The Walking Dead",
      Year: "2010–",
      imdbID: "tt1520211",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Flash",
      Year: "2014–",
      imdbID: "tt3107288",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Simpsons",
      Year: "1989–",
      imdbID: "tt0096697",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Big Bang Theory",
      Year: "2007–2019",
      imdbID: "tt0898266",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SX300.jpg",
    },
    {
      Title: "13 Reasons Why",
      Year: "2017–2020",
      imdbID: "tt1837492",
      Type: "series",
      Poster: "https://m.media-amazon.com/images/M/MV5BYmRhZjkyMjEtNjRkMS00MDQ0LTg2NGMtMTQ3ZjE0NjJmMjM2L2ltYWdlXkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SX300.jpg"
    },
    {

      Title: "The Witcher",
      Year: "2019–",
      imdbID: "tt5180504",
      Type: "series",
      Poster: "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    {
      Title: "The office",
      Year: "2005–2013",
      imdbID: "tt0386676",
      Type: "series",
      Poster: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg"
    },
  ]);



  useEffect(() => {
    setMovies(defaultMovies);
  }, [defaultMovies]);

  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteMovies) {
      setFavorites(favoriteMovies);
    }
  }, []);

  const fetchSeries = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=494df15b&s=${searchTerm}&type=series`
    );
    const data = await response.json();
    setSeries(data.Search);
  };


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
    <FilmsContext.Provider
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
        defaultMovieHero,
        setDefaultMovieHero,
        fetchSeries,
        defaultSeries
        
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
};
