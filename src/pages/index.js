import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { defaultMovies } from "DataMovies/defaultMovies";
import { defaultSeries } from "DataMovies/defaultSeries";
import Link from "next/link";
import Search from "@/components/Search";

export default function Home({ movie }) {

  return (
    <>
      <Head>
        <title>Movie app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <main className="bg-black my-20 text-white text-center mx-auto">
      <h2 className="text-center font-bold text-white text-2xl py-4  uppercase">
          Watch your favorites movies now!
        </h2>
        <Search/>
        <div className="grid grid-cols-2 xl:grid-cols-4 sm:grid-cols-3 sm:w-full mx-auto my-10 xl:w-1/2 gap-4">
          {defaultMovies.map((movie) => (
            <Link href={`/id/${movie.imdbID}`} key={movie.imdbID}>
              <Image
                src={movie.Poster}
                alt={movie.Title}
                width={200}
                height={300}
                className="rounded-md h-[400px] w-[300px] object-cover mx-auto"
              />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </Link>
          ))}
        </div>
        <h2 className="text-center font-bold text-white text-2xl uppercase">
          Or why not your favorites series!
        </h2>

        <div className="grid grid-cols-2 xl:grid-cols-4 sm:grid-cols-3 sm:w-full mx-auto my-10 xl:w-1/2 gap-4">
          {defaultSeries.map((series) => (
            <Link href={`/id/${movie?.imdbID}`} key={series.imdbID}>
              <Image
                src={series.Poster}
                alt={series.Title}
                width={200}
                height={300}
                className="rounded-md h-[400px] w-[300px] object-cover mx-auto"
              />
              <h3>{series.Title}</h3>
              <p>{series.Year}</p>
            </Link>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
