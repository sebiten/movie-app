import NavBar from "@/components/NavBar";
import SingleMovie from "@/components/SingleMovie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=494df15b&i=${id}`
      );
      const data = await res.json();
      setMovie(data);
    }

    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

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
}
