"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import mladenImage from "../../../public/images/mladenAbout.jpg";
import phone from "../../../public/images/phone.png";
import insta from "../../../public/images/insta.png";
import mail from "../../../public/images/mail.png";
import Container from "../ui/Container";
import Link from "next/link";

function Biografija() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.3, // Stagger animation for child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="xl:py-20 py-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container
        className={
          "flex flex-col xl:flex-row m-auto h-full gap-5 xl:gap-0 px-0"
        }
      >
        <motion.div className="flex items-center justify-center lg:items-start lg:justify-start w-full" variants={itemVariants}>
          <Image
            alt="Mladen Micic Photo"
            src={mladenImage}
            width={700}
            objectFit="cover object-left"
          />
        </motion.div>
        <motion.div
          className="w-full xl:w-5/6 flex flex-col items-center justify-center xl:justify-between xl:items-baseline gap-5"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl xl:text-4xl uppercase text-center xl:text-left"
            variants={itemVariants}
          >
            biografija
          </motion.h1>
          <motion.p
            className="xl:text-lg leading-8 xl:leading-9 text-md text-left"
            variants={itemVariants}
          >
            Mladen Mićić, rođen 25.4.1998. godine u Bijeljini. OŠ „Jovan Dučić”
            u Bijeljini završio 2013. godine. Srednju Ekonomsku školu u
            Bijeljini završava 2017. godine, nakon čega se upisuje na Akademiju
            umjetnosti u Banjoj Luci. Diplomirao je 2021. godine na Akademiji
            umjetnosti Univerziteta u Banjoj Luci na odsjeku slikarstva u klasi
            profesorice Borjane Mrđa. 2022. godine završava Master studije
            slikarstva na Fakultetu likovnih umetnosti u Beogradu, u klasi
            profesora Radomira Kneževića. Iste godine upisuje Doktorske
            akademske studije na Fakultetu likovnih umetnosti u Beogradu.
          </motion.p>
          <motion.div
            className="flex flex-col xl:flex-row gap-5 items-center w-full justify-between my-10"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col items-center gap-1 justify-center"
              variants={itemVariants}
            >
              <Link
                href="https://www.instagram.com/mladen.micic.1998/"
                className="flex flex-col items-center gap-1"
              >
                <Image
                  alt="Instagram"
                  src={insta}
                  quality={100}
                  width={25}
                  height={25}
                />
                <p className="xl:text-lg text-base">@mladen.micic.1998</p>
              </Link>
            </motion.div>
            <motion.div
              className="flex flex-col gap-3 items-center justify-center"
              variants={itemVariants}
            >
              <Image
                alt="Mail"
                src={mail}
                quality={100}
                width={25}
                height={25}
              />
              <p className="xl:text-lg text-base">mladen.micic.98@gmail.com</p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-1 items-center justify-center"
              variants={itemVariants}
            >
              <Image
                alt="Phone"
                src={phone}
                quality={100}
                width={25}
                height={25}
              />
              <p className="xl:text-lg text-base">+387 66 017 543</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex w-full items-center justify-center md:w-1/2 xl:w-full"
            variants={itemVariants}
          >
            <video
              controls
              className="w-full"
              src="/videos/mladenVideo.mp4"
              type="video/mp4"
            ></video>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default Biografija;
