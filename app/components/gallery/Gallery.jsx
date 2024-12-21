"use client";
import Image from "next/image";
import { images } from "../../data";
import { useState } from "react";
import Carousel from "../ui/Carousel";

export default function Gallery() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  return (
    <>
      <div
        className="px-2 md:px-10 py-10 grid grid-cols-2 grid-rows-12 gap-5"

      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative ${image.height} group w-full ${image.grid}`}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-xl"
              layout="fill"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:z-10 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex flex-col text-center text-white px-4 gap-5">
                <h3 className="text-3xl uppercase font-sans font-bold">
                  {image.name}
                </h3>
                <p className="text-md uppercase font-sans">{image.technique}</p>
                <p className="text-md uppercase font-sans">
                  {image.dimensions}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isCarouselOpen && (
        <Carousel
          images={images}
          currentImageIndex={currentImageIndex}
          onClose={() => setIsCarouselOpen(false)} // Close modal
        />
      )}
    </>
  );
}
