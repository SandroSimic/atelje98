"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "O meni", href: "o-meni" },
    { name: "Izložbe", href: "izlozbe" },
    { name: "Atelje 98", href: "atelje98" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <Container>
        <div className=" py-8 flex justify-between items-center relative z-10">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">
            <Link href="/">
              <h1 className="font-thin ">Mladen Mićić</h1>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div
            className="flex flex-col gap-[5px] cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`w-6 h-[2px] bg-black transition-transform duration-300 ${
                isOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <div
              className={`w-6 h-[2px] bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`w-6 h-[2px] bg-black transition-transform duration-300 ${
                isOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>

          {/* Navigation Links */}
          <div
            className={`absolute md:static top-24 left-0 w-full md:w-auto bg-white md:bg-transparent overflow-hidden md:overflow-visible transition-[max-height] md:transition-none duration-500 ease-in-out ${
              isOpen ? "max-h-[1000px] w-full" : "max-h-0 md:max-h-none"
            }`}
          >
            <div className="flex    flex-col  md:flex-row md:space-x-8 items-center p-4 md:p-0 gap-10 md:gap-2 ">
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
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
