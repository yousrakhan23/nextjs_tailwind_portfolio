"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import my_logo1 from "../../public/my_logo1.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const Navbar = () => {
  return (
    <div>
      <div className="lg:hidden">
        <div className="fixed top-0 right-0 z-50">
          <Sheet>
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#000"
                className="block ml-[22rem]"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </SheetTrigger>
            <SheetContent className="w-screen bg-[#ac9cda] h-screen flex flex-col justify-center items-center gap-6">
              <li className="list-none text-[#FFFFFF] text-2xl hover:text-[#272343]">
                <Link href="/">Home</Link>
              </li>

              <li className="list-none text-[#FFFFFF]  text-2xl hover:text-[#272343]">
                <Link href="/About">About</Link>
              </li>

              <li className="list-none text-[#FFFFFF]  text-2xl hover:text-[#272343]">
                <Link href="/Skills">Skills</Link>
              </li>
              <li className="list-none text-[#FFFFFF]  text-2xl hover:text-[#272343]">
                <Link href="/Projects">Projects</Link>
              </li>
              <li className="list-none text-[#FFFFFF]  text-2xl hover:text-[#272343]">
                <Link href="/Services">Services</Link>
              </li>
              <li className="list-none text-[#FFFFFF]  text-2xl hover:text-[#272343]">
                <Link href="/Contact">Contact</Link>
              </li>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <header className="text-white body-font bg-[#1A0B2E]">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <h1 className="ml-3 text-4xl font-serif font-bold text-white animate-pulse hover:uppercase">
              <span className="text-5xl hover:text-black">
                <Image src={my_logo1} alt="My Logo" width={100} height={100} />
              </span>
            </h1>
          </a>
          <nav className="md:ml-auto md:mr-auto flex-wrap items-center justify-center text-2xl gap-7 font-sans font-semibold hidden lg:block">
            {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  className="mr-5 transform hover:scale-110 motion-reduce:transform-none hover:text-purple-400 hover:uppercase transition duration-300"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
