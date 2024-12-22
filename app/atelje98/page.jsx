"use client";
import Link from "next/link";
import Slideshow from "../components/atelje/Slideshow";
import Container from "../components/ui/Container";
import insta from "./../../public/images/insta.png";
import phone from "./../../public/images/phone.png";
import mail from "./../../public/images/mail.png";
import Image from "next/image";
import { motion } from "framer-motion";
import paint from "../../public/images/paint.png";
import pencil from "../../public/images/pencil.png";
import ugljen from "../../public/images/ugljen.png";
import brush from "../../public/images/brush.png";
import ServerMap from "../components/atelje/ServerMap";

const techniques = [
  {
    name: "ulje na platnu",
    image: paint,
  },
  {
    name: "akril na platnu",
    image: brush,
  },
  {
    name: "uglen na papiru",
    image: ugljen,
  },
  {
    name: "grafitna olovka na papiru",
    image: pencil,
  },
];

function Page() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-10">
      <Container className={"py-10 "}>
        <motion.div
          className="flex flex-col-reverse h-full lg:h-auto lg:flex-row gap-5 lg:gap-10 items-center lg:items-stretch"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="w-full lg:w-5/6 flex flex-col items-center lg:items-baseline gap-5 lg:gap-10"
            variants={itemVariants}
          >
            <motion.h1
              className="uppercase text-xl md:text-2xl lg:text-4xl font-bold"
              variants={itemVariants}
            >
              atelje98
            </motion.h1>
            <motion.p
              className="text-base text-center lg:text-left leading-10 font-medium"
              variants={itemVariants}
            >
              Atelje 98 je umjetnički prostor u Bijeljini, koji je namjenjen
              umjetničkim entuzijastima svih uzrasta. Atelje 98 je mjesto
              prijatne atmosfere, jer se u njemu okupljaju ljudi koji gaje
              ljubav prema umjetnosti. U ateljeu možete naučiti sve slikarske i
              crtačke tehnike: Ulje na platnu, akril na platnu, grafitna olovka
              na papiru, ugljen na papiru i mnoge druge. Osnivač i predavač je
              Mladen Mićić. Visokoobrazovani stručnjak i višestruko nagrađivani,
              doktorand na Fakultetu likovnih umjetnosti u Beogradu. Pored
              časova crtanja i slikanja, polaznici će u ateljeu imati priliku da
              vide predavača u stvaralačkom procesu. Tu je takođe i stalna
              postavka umjetničkih radova samog predavača, kao dokaz o kvalitetu
              njegovog rada. Tako da možete imati potpuno povjerenje da ste na
              pravom mjestu.
            </motion.p>
            <motion.div
              className="flex gap-10 flex-col md:flex-row md:gap-0 w-full justify-between"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center gap-1 justify-center">
                <Link
                  href="https://www.instagram.com/atelje_98/"
                  className="flex flex-col items-center gap-1"
                >
                  <Image
                    alt="Instagram"
                    src={insta}
                    quality={100}
                    width={25}
                    height={25}
                  />
                  <p className="xl:text-lg text-base">@atelje_98</p>
                </Link>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center">
                <Image
                  alt="Mail"
                  src={mail}
                  quality={100}
                  width={25}
                  height={25}
                />
                <p className="xl:text-lg text-base">
                  mladen.micic.98@gmail.com
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center">
                <Image
                  alt="Phone"
                  src={phone}
                  quality={100}
                  width={25}
                  height={25}
                />
                <p className="xl:text-lg text-base">+387 66 017 543</p>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col gap-10"
              variants={itemVariants}
            >
              <div>
                <h3 className="text-base lg:text-lg font-semibold uppercase">
                  Radno vrijeme:
                </h3>
                <p className="text-base lg:text-lg">
                  Ponedeljak - Subota: 10:00-14:00h i 17:00-21:00h
                </p>
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-semibold uppercase">
                  adresa:
                </h3>
                <p className="text-base lg:text-lg">
                  Srpske dobrovoljačke garde 6, Bijeljina
                </p>
              </div>
            </motion.div>
          </motion.div>
          {/* Slideshow Section */}

          <Slideshow />
        </motion.div>
      </Container>
      <div className="bg-[#222222] my-20">
        <Container className={"flex flex-col gap-5 py-10"}>
          <motion.h1
            className="text-white uppercase text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            tehinke koje ce te nauciti
          </motion.h1>
          <motion.div
            className="flex flex-wrap lg:flex-nowrap justify-between gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {techniques.map((technique, index) => (
              <motion.div
                key={index}
                className="w-full uppercase bg-white flex flex-col gap-5 justify-center items-center px-0 p-16 rounded-lg"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={technique.image}
                  alt={technique.name}
                  width={44}
                  height={44}
                />
                <p className="uppercase font-semibold">{technique.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
      <Container className={"flex flex-col gap-10"}>
        <h1 className="uppercase text-xl md:text-2xl lg:text-4xl font-bold">
          Lokacija
        </h1>
        <div className="h-[600px] w-full">
          <ServerMap />
        </div>
      </Container>
    </div>
  );
}

export default Page;
