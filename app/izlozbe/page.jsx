"use client";
import React from "react";
import Container from "../components/ui/Container";
import izlozbeImage from "./../../public/images/izlozbe.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { exhibitionsData, awardsData, soloExhibitionsData } from "../data";

function Izlozbe() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container className={"flex flex-col gap-10 py-20 items-center"}>
      <motion.div
        className="shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          width={800}
          height={800}
          alt="Slika za izlozbenu stranicu"
          src={izlozbeImage}
          objectFit="cover"
        />
      </motion.div>
      <motion.h1
        className="uppercase text-xl md:text-2xl lg:text-3xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Izložbe
      </motion.h1>
      <motion.div
        className="self-baseline"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col gap-10">
        {soloExhibitionsData.map((data, index) => (
            <motion.div
              className="flex flex-col gap-5"
              key={index}
              variants={itemVariants}
            >
              <h2 className="text-base md:text-xl font-semibold uppercase">{data.title}</h2>
              <div className="flex flex-col gap-2">
                {data.exhibitions.map((exib, i) => (
                  <p className="text-base md:text-lg" key={i}>
                    {exib}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
          {exhibitionsData.map((exhibition, index) => (
            <motion.div
              className="flex flex-col gap-5"
              key={index}
              variants={itemVariants}
            >
              <h2 className="text-base md:text-xl font-semibold uppercase">
                {exhibition.title}
              </h2>
              <div className="flex flex-col gap-2">
                {exhibition.exhibitions.map((exib, i) => (
                  <p className="text-base md:text-lg" key={i}>
                    {exib}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
          {awardsData.map((data, index) => (
            <motion.div
              className="flex flex-col gap-5"
              key={index}
              variants={itemVariants}
            >
              <h2 className="text-base md:text-xl font-semibold uppercase">{data.title}</h2>
              <div className="flex flex-col gap-2">
                {data.awards.map((award, i) => (
                  <p className="text-base md:text-lg" key={i}>
                    {award}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </Container>
  );
}

export default Izlozbe;
