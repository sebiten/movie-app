import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const HeroCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    cssEase: "linear",
    fade: true,
    arrows: false,
    dots: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <Image
              width={500}
              height={500}
              src={image}
              alt={`Movie ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroCarousel;
