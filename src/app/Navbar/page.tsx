"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import my_logo1 from "../../public/my_logo1.png"
const Navbar = () => {
    return (
        <div>
            <header className="text-white body-font bg-[#1A0B2E]">
                <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <h1 className="ml-3 text-4xl font-serif font-bold text-white animate-pulse hover:uppercase">
                            <span className="text-5xl hover:text-black">
                                <Image src={my_logo1} alt="My Logo" width={100} height={100} />
                            </span>
                        </h1>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center text-2xl gap-7 font-sans font-semibold">
                        {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                            <Link key={item} href={`/${item}`} className="mr-5 transform hover:scale-110 motion-reduce:transform-none hover:text-purple-400 hover:uppercase transition duration-300">
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar;