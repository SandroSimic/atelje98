import Image from "next/image";
import React from "react";
import mladenImage from "./../../public/images/mladenAbout.jpg";
import phone from "./../../public/images/phone.png";
import insta from "./../../public/images/insta.png";
import mail from "./../../public/images/mail.png";
import Container from "../components/ui/Container";
import Link from "next/link";

function Page() {
  return (
    <div className="xl:my-20 my-5">
      <Container
        className={"flex flex-col  xl:flex-row m-auto h-full gap-5 xl:gap-0"}
      >
        <div className="flex items-center justify-center w-full">
          <Image
            alt="Mladen Micic Photo"
            src={mladenImage}
            width={700}
            objectFit="cover"
          />
        </div>
        <div className="w-full xl:w-5/6 flex flex-col items-center justify-center xl:justify-between xl:items-baseline gap-10">
          <h1 className="text-2xl xl:text-4xl uppercase text-center xl:text-left">
            o meni
          </h1>
          <p className="xl:text-lg leading-8 xl:leading-9 text-md text-center xl:text-left">
            Mladen Mićić, rođen 25.4.1998. godine u Bijeljini. OŠ „Jovan Dučić”
            u Bijeljini završio 2013. godine. Srednju Ekonomsku školu u
            Bijeljini završava 2017. godine, nakon čega se upisuje na Akademiju
            umjetnosti u Banjoj Luci. Diplomirao je 2021. godine na Akademiji
            umjetnosti Univerziteta u Banjoj Luci na odsjeku slikarstva u klasi
            profesorice Borjane Mrđa. 2022. godine završava Master studije
            slikarstva na Fakultetu likovnih umetnosti u Beogradu, u klasi
            profesora Radomira Kneževića. Iste godine upisuje Doktorske
            akademske studije na Fakultetu likovnih umetnosti u Beogradu.
          </p>
          <div className="flex flex-col xl:flex-row gap-5 items-center justify-center">
            <Link
              href={"https://www.instagram.com/mladen.micic.1998/"}
              className="flex flex-col items-center gap-1 justify-center"
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
            <div className="flex flex-col gap-3 items-center justify-center">
              <Image
                alt="Mail"
                src={mail}
                quality={100}
                width={25}
                height={25}
              />
              <p className="xl:text-lg text-base">mladen.micic.98@gmail.com</p>
            </div>

            <div className="flex flex-col gap-1 items-center justify-center ">
              <Image
                alt="Phone"
                src={phone}
                quality={100}
                width={25}
                height={25}
              />
              <p className="xl:text-lg text-base">+387 66 017 543</p>
            </div>
          </div>
          <div className="flex w-full items-center  justify-center md:w-1/2 xl:w-full">
            <video
              controls
              className="w-full"
              src="/videos/mladenVideo.mp4" // Use the relative path
              type="video/mp4"
            ></video>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Page;
