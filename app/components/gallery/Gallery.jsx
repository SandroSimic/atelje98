"use client";
import Image from "next/image";
import { images } from "../../data";
import { useState } from "react";
import { motion } from "framer-motion";
import Carousel from "../ui/Carousel";

export default function Gallery() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div
        className=" py-10 grid grid-cols-2 align-top content-start  grid-rows-12 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative  ${image.height} group w-full ${image.grid} overflow-hidden cursor-pointer`}
            onClick={() => handleImageClick(index)}
            variants={itemVariants}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-xl group-hover:scale-110 transition-transform duration-300 ease-in-out"
              loading="lazy"
              quality={100}
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:z-10 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"> */}
              {/* <div className="flex items-center text-center text-white px-4 gap-0">
                <h3 className="text-md   ">{image.name},</h3>
                <p className="text-md  ">{image.technique},</p>
                <p className="text-md  ">{image.dimensions},</p>
              </div> */}
                {/* <h1 className="text-white">IKONICA</h1> */}
            {/* </div> */}
          </motion.div>
        ))}
      </motion.div>
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
