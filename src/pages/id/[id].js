import Image from "next/image";
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
    <div className="text-white px-4 sm:px-6 md:px-8 m-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">{movie.Title}</h1>
          <div className="flex flex-wrap mb-4">
            <div className="sm:w-auto sm:mr-4 mb-4 sm:mb-0 flex items-center justify-center">
              <Image
                className="rounded-lg"
                width={300}
                height={450}
                src={movie.Poster}
                alt={movie.Title}
              />
            </div>
            <div className="">
              <p className="text-xl leading-8">{movie.Plot}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="border p-4">
              <p className="text-xl font-semibold">Released:</p>
              <p className="text-xl">{movie.Released}</p>
              <p className="text-xl font-semibold mt-4">Runtime:</p>
              <p className="text-xl">{movie.Runtime}</p>
              <p className="text-xl font-semibold mt-4">Genre:</p>
              <p className="text-xl">{movie.Genre}</p>
              <p className="text-xl font-semibold mt-4">Director:</p>
              <p className="text-xl">{movie.Director}</p>
              <p className="text-xl font-semibold mt-4">Writer:</p>
              <p className="text-xl">{movie.Writer}</p>
            </div>
            <div className="border p-4">
              <p className="text-xl font-semibold">Metascore:</p>
              <p className="text-xl">{movie.Metascore}</p>
              <p className="text-xl font-semibold mt-4">IMDb Rating:</p>
              <p className="text-xl">{movie.imdbRating}</p>
              <p className="text-xl font-semibold mt-4">IMDb Votes:</p>
              <p className="text-xl">{movie.imdbVotes}</p>
              <p className="text-xl font-semibold mt-4">Box Office:</p>
              <p className="text-xl">{movie.BoxOffice}</p>
              <p className="text-xl font-semibold mt-4">Production:</p>
              <p className="text-xl">{movie.Production}</p>
              <p className="text-xl font-semibold mt-4">Website:</p>
              <p className="text-xl">{movie.Website}</p>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
}

