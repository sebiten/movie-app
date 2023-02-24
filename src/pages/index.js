import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Movies from "@/components/Movies";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movie app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero/>
      <main>
        <div>
          <Movies />
        </div>
      </main>
      <footer>
        <Footer/>

      </footer>
    </>
  );
}
