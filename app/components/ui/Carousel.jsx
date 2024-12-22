"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./Container";
import { motion } from "framer-motion";

export default function Carousel({ images, currentImageIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <Container>
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex justify-center items-center"
        >
          &#x2715;
        </button>

        {/* Carousel Content */}
        <div className="relative w-full max-w-full justify-center flex items-center gap-5">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-5 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex justify-center items-center z-10"
          >
            &#8249;
          </button>

          {/* Images */}
          <div className="flex justify-between w-5/6 items-center">
            {/* Left Image */}
            <motion.div
              className="hidden lg:block"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 0.5 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={images[(currentIndex - 1 + images.length) % images.length].src}
                alt={images[(currentIndex - 1 + images.length) % images.length].alt}
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </motion.div>

            {/* Main Image */}
            <motion.div
              className="p-1 lg:p-0 w-full lg:w-6/12 flex items-center flex-col gap-5"
              key={currentIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={700}
                height={800}
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="flex flex-col text-center text-white px-4 gap-1 lg:gap-2">
                <h3 className="text-md lg:text-3xl uppercase font-sans font-bold">
                  {images[currentIndex].name}
                </h3>
                <p className="text-xs lg:text-lg uppercase font-sans">
                  {images[currentIndex].technique}
                </p>
                <p className="text-xs lg:text-lg uppercase font-sans">
                  {images[currentIndex].dimensions}
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="hidden lg:block"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 0.5 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={images[(currentIndex + 1) % images.length].src}
                alt={images[(currentIndex + 1) % images.length].alt}
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-5 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex justify-center items-center z-10"
          >
            &#8250;
          </button>
        </div>
      </div>
    </Container>
  );
}