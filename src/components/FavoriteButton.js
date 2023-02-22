import Image from "next/image";

const FavoriteButton = ({ isFavorite, handleFavoriteClick,  }) => {
  const text = isFavorite ? "Remove from favorites" : "Add to favorites";
  return (
    <button
      className={
        isFavorite
          ? "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center"
          : "text-white bg-black border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center"
      }
      onClick={handleFavoriteClick}
    >
      {isFavorite ? (
        <Image
          src="/StarFull.svg"
          alt="heart-solid"
          width={30}
          height={30}
          className="mr-2"
        />
      ) : (
        <Image
          src="/StarEmpty.svg"
          alt="heart-regular"
          width={30}
          height={30}
          className="mr-2"
        />
      )}
      <span>{text}</span>
    </button>
  );
};

export default FavoriteButton;
