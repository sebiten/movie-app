import Image from "next/image";
import Link from "next/link";
import React from "react";

function Section() {
  return (
    <div>
      
      <div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        F
        className="relative bg-transparent py-20"
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-black-800"
          style={{
            backgroundImage: "url(/1.webp)",
            backgroundSize: "cover",
            opacity: 0.3,
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold uppercase">
            Mira las mejores series y peliculas aqui!
          </h2>
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="mx-auto"
          />
          <p className="text-white text-lg sm:text-xl lg:text-xl text-center">
            En cinema te ofrecemos las mejores peliculas y series para que
            disfrutes de tu tiempo libre
            
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <button className="flex items-center justify-center mt-4 rounded-lg p-4 bg-[#8a1010] text-white text-sm uppercase rounded-b-md hover:bg-red-600 transition-colors duration-300">
            <Link href="/favorites">Ver tus peliculas favoritas</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section;
