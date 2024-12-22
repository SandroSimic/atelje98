"use client";
import React, { useEffect, useState } from "react";
import { imagesAtelje as images } from "@/app/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [isHovered, images.length]);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, x: -100, transition: { duration: 0.4 } },
  };

  return (
    <>
      <div
        className="mt-10 relative h-[300px] md:h-[500px] w-full lg:h-auto lg:overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            variants={isHovered ? null : variants}
            initial="enter"
            animate={isHovered ? "zoom" : "center"}
            exit="exit"
            className="absolute w-full h-full"
            onClick={() => setOpenCarousel(true)}
          >
            <Image
              src={images[currentIndex].src}
              alt={`Slideshow image ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg h-[500px]"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default Slideshow;
