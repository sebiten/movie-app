import useFilms from "hooks/useMovies";
const Favorites = () => {
const { favorites} = useFilms();
console.log(favorites);
  return (
    <div>
      <h1 className='text-white'>Favorites</h1>
      <ul>
        {favorites?.map((movie) => (
          <li key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites;