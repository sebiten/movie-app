import NavBar from "@/components/NavBar";
import SingleMovie from "@/components/SingleMovie";

const MovieDetails = ({ movie }) => {
  console.log(movie);

  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 w-full z-10">
        <NavBar />
      </div>
      <div className="flex-grow pt-36">
        <SingleMovie
          title={movie.Title}
          year={movie.Year}
          rated={movie.Rated}
          released={movie.Released}
          runtime={movie.Runtime}
          genre={movie.Genre}
          director={movie.Director}
          writer={movie.Writer}
          actors={movie.Actors}
          plot={movie.Plot}
          language={movie.Language}
          country={movie.Country}
          awards={movie.Awards}
          poster={movie.Poster}
          ratings={movie.Ratings}
          metascore={movie.Metascore}
          imdbRating={movie.imdbRating}
          imdbVotes={movie.imdbVotes}
          imdbID={movie.imdbID}
          type={movie.Type}
          dvd={movie.DVD}
          boxOffice={movie.BoxOffice}
          production={movie.Production}
          website={movie.Website}
          response={movie.Response}
        />
      </div>
    </div>
  );
};

MovieDetails.getInitialProps = async (context) => {
  const id = context.query.id;
  const res = await fetch(`https://www.omdbapi.com/?apikey=4a3b711b&i=${id}`);
  const movie = await res.json();

  return { movie };
};

export default MovieDetails;