import Image from "next/image";
import React from "react";
import logo from "./../../../public/images/logo.png";
import insta from "./../../../public/images/insta.png";
import mail from "./../../../public/images/mail.png";
import phone from "./../../../public/images/phone.png";
import Link from "next/link";

const Footer = () => {
  const links = [
    { name: "O meni", href: "o-meni" },
    { name: "Izložbe", href: "izlozbe" },
    { name: "Atelje98", href: "atelje98" },
  ];
  return (
    <footer className="p-14 px-0">
      <div className="flex flex-col gap-8 items-center justify-center">
        <Link href="/">
          <Image alt="LOGO " src={logo} />
        </Link>

        <div className="flex  md:flex-row md:space-x-8 items-center p-4 md:p-0 gap-10 md:gap-2 ">
          {links.map((item, index) => (
            <Link
              key={index}
              href={`/${item.href}`}
              className="group relative text-black text-lg py-2 md:py-0 transition-colors duration-300"
            >
              {item.name}
              <span className="absolute bottom-1 md:-bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center gap-1 justify-center">
            <Link
              href="https://www.instagram.com/mladen.micic.1998/"
              className="flex flex-col items-center gap-1"
            >
              <Image
                alt="Instagram"
                src={insta}
                quality={100}
                width={20}
                height={20}
              />
              <p className="xl:text-lg text-base">@mladen.micic.1998</p>
            </Link>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <Image alt="Mail" src={mail} quality={100} width={20} height={20} />
            <p className="xl:text-lg text-base">mladen.micic.98@gmail.com</p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <Image
              alt="Phone"
              src={phone}
              quality={100}
              width={20}
              height={20}
            />
            <p className="xl:text-lg text-base">+387 66 017 543</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
