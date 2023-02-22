import useFilms from "hooks/useMovies";
import Image from "next/image";
import Link from "next/link";

function FavoritesPage() {
  const { favorites, setFavorites } = useFilms();
  console.log(favorites);

  return (
    <>
      <div className="text-white w-1/2 mx-auto">
        <h1 className="font-bold text-2xl text-center mt-4">
          {favorites.length === 0 ? <p>No favorites yet</p> : <p>Favorites</p>}
        </h1>
       

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 my-10">
          {favorites.map((favorite) => (
            <div key={favorite.imdbID} className="bg-gray-800 rounded-md overflow-hidden">
              <Image
                src={favorite.poster}
                alt={favorite.title}
                width={400}
                height={300}
                className="rounded-t-md md:w-[400px] md:h-[500px] w-[400px] h-[300px] object-cover mx-auto p-2"
              />
              <div className="p-4">
                <Link href={`/id/${favorite.imdbID}`} className="block text-lg font-bold text-white hover:text-gray-400 transition duration-300 ease-in-out mb-2">{favorite.title}</Link>
                <p className="text-gray-400 mb-2">{favorite.year}</p>
                <button
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 transition duration-300 ease-in-out"
                  onClick={() => {
                    const newFavorites = favorites.filter(
                      (item) => item.imdbID !== favorite.imdbID
                    );
                    setFavorites(newFavorites);
                  }}
                >
                  Remove from favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-center mt-4">
          <Link
            className="text-white text-lg hover:text-gray-400 transition duration-300 ease-in-out text-center mx-auto"
            href="/"
          >
            Go back to home page
          </Link>
        </h1>
    </>
  );
}


export default FavoritesPage;
