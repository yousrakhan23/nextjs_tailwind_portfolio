"use client";
import React from 'react'
import Link from "next/link";
import Image from 'next/image';

import project1 from '../../public/project1.jpg';
import project2 from '../../public/project2.jpg';
import project3 from '../../public/project3.jpg';
import project4 from '../../public/project4.jpg';
import project5 from '../../public/project5.jpg';
import project6 from '../../public/project6.jpg';
import project7 from '../../public/project7.jpg';
import project8 from '../../public/project8.jpg';
import project9 from '../../public/project9.jpg';
import project10 from '../../public/project10.jpg';
import project11 from '../../public/project11.jpg';
import project12 from '../../public/project12.jpg';
import project13 from '../../public/project13.jpg';
import project14 from '../../public/project14.jpg';
import project15 from '../../public/project15.jpg';
import project16 from '../../public/project16.jpg';
import project17 from '../../public/project17.jpg';


const projects = [
  {
    src: project13,
    alt:"COMFORTY SOFA WEBSITE",
    title: "COMFORTY SOFA WEBSITE",
    description: "This sofa website is built with Sanity,Next.js and Tailwind CSS. It is a full-stack web application that allows users to view and search for sofa items. Users can also add items to their cart and view their cart.",
    link: "https://hackathon-202-2.vercel.app/"
  },
  {
    src: project14,
    alt: "admin panel",
    title: "ADMIN PANEL",
    description: "This admin panel is built with Sanity,Next.js and Tailwind CSS. It is a full-stack web application that allows users to view and search for sofa items. Users can also add items to their cart and view their cart.",
    link: "https://admin-panel-hackathon-2.vercel.app/"
  },
  {
    src: project15,
    alt: "META BLOG",
    title: "META BLOG",
    description: "This meta blog is built with Next.js and tailwind css,where we explore different topics and share our thoughts and ideas.",
    link: "https://milestone-3-dynamic-blog-by-yousrakhan.vercel.app/"
  },
  {
    src: project16,
    alt: "E COMMERCE CLOTHING WEBSITE",
    title: "E COMMERCE CLOTHING WEBSITE",
    description: "This e-commerce clothing website is built with Next.js and Tailwind CSS. It is a full-stack web application that allows users to view and search for clothing items. Users can also add items to their cart and view their cart.",
    link: "https://e-commerce-website-milestone-3-yousra-khan.vercel.app/"
  },
  {
    src: project1,
    alt: "MANZZARI",
    title: "MANZZARI JEWELLERY WEBSITE",
    description: "This jewellery website is built with Next.js and Tailwind CSS. It is a full-stack web application that allows users to view and search for jewellery items. Users can also add items to their cart and view their cart.",
    link: "https://05-class-assignment-next-js-w25p-qtrommcu9.vercel.app/",
  },
  {
    src: project2,
    alt: "DIGITAL CLOCK APP",
    title: "DIGITAL CLOCK",
    description: "This digital clock is built with Next.js and Tailwind CSS. It is a simple and modern digital clock that displays the current time and date.",
    link: "https://day-6-of-30-days-of-nextjs-digital-clock-o7gptnu5e.vercel.app/" 
  },
  {
    src: project3,
    alt: "SIMPLE CALCULATOR APP",
    title: "SIMPLE CALCULATOR",
    description: "This simple calculator is built with Next.js and Tailwind CSS. It is a simple and modern calculator that performs basic arithmetic operations.",
    link: "https://day-5-of-30-days-of-nextjs-simple-calculator-4nueka7tl.vercel.app/"
  },
  {
    src: project4,
    alt: "NUMBER GUESSING GAME APP",
    title: "NUMBER GUESSING GAME",
    description: "This number guessing game is built with Next.js and Tailwind CSS. It is a simple and modern number guessing game that allows users to guess a number between 1 and 100.",
    link: "https://day-4-of-30-days-of-nextjs-number-guessing-game-arbve33bu.vercel.app/"
  },
  {
    src: project5,
    alt: "BIRTHDAY APPLICATION",
    title: "BIRTHDAY APPLICATION",
    description: "This birthday application is built with Next.js and Tailwind CSS. It is a simple and modern birthday application that allows users to enter their birthday and see their age.",
    link: "https://day-3-of-30-days-of-nextjs-birthday-pqqtpdf6l.vercel.app/"
  },
  {
    src: project17,
    alt: "BRAND LOGOS BLOG",
    title: "BRAND LOGOS BLOG",
    description: "This brand logo blog is built with Next.js and Tailwind CSS. It is a simple and modern brand logo blog that allows users to view my brand logos and share them with others.",
    link: "https://08-class-assignment-sanity-blog-nextjs.vercel.app/"
  },
  {
    src: project6,
    alt: "SAFE HOME CHEMICAL WEBSITES",
    title: "SAFE HOME CHEMICAL WEBSITES",
    description: "This safe home chemical websites is built with Next.js and Tailwind CSS. It is a simple and modern safe home chemical websites that allows users to view chemical information.",
    link: "https://03-class-assignment-next-js-6gj6-jglil2ged.vercel.app/"
  },
  {
    src: project7,
    alt: "HTML CSS TYPESCRIPT PORTFOLIO",
    title: "HTML CSS TYPESCRIPT PORTFOLIO",
    description: "This HTML CSS TypeScript portfolio is built with HTML CSS TYPESCRIPT/JAVASCRIPT. It is a simple and modern HTML CSS TypeScript portfolio that allows users to view my projects.",
    link: "https://responsive-portfolio-website-using-html-css-java-ciq8u74kr.vercel.app/"
  },
  {
    src: project8,
    alt: "UNIQYE PATH AND SHAREABLE REUME",
    title: "UNIQYE PATH AND SHAREABLE REUME",
    description: "This uniqye path and shareable reume is built with HTML CSS TYPE/JAVASCRIPT. It is a simple and modern uniqye path and shareable reume that allows users to view my resume.",
    link: "https://milestone-5-unique-path-shareable-link-qqmwultk5.vercel.app/"
  },
  {
    src: project9,
    alt: "EDITABLE RESUME",
    title: "EDITABLE RESUME",
    description: "This editable resume is built with HTML CSS TYPE/JAVASCRIPT. It is a simple and modern editable resume that allows users to view my resume.",
    link: "https://milestone-4-editable-resume-ka2tvne54-yousra-khans-projects.vercel.app/",
  },
  {
    src: project10,
    alt: "DYNAMIC RESUME BUILDER",
    title: "DYNAMIC RESUME BUILDER",
    description: "This dynamic resume builder is built with HTML CSS TYPE/JAVASCRIPT. It is a simple and modern dynamic resume builder that allows users to view my resume.",
    link: "https://milestone-2-3-dynamic-resume-builder-form-ez6borkpq.vercel.app/",
  },
  {
    src: project11,
    alt: "STATIC RESUME BUILDER",
    title: "STATIC RESUME BUILDER",
    description: "This static resume builder is built with HTML CSS TYPE/JAVASCRIPT. It is a simple and modern static resume builder that allows users to view my resume.",
    link: "https://milestone-1-static-resume-builder-7idt94oye.vercel.app/",
  },
  {
    src: project12,
    alt: "HOME MADE PRODUCTS WEBSITE",
    title: "HOME MADE PRODUCTS WEBSITE",
    description: "This home made products website is built with Next.js and Tailwind CSS. It is a simple and modern home made products websites that allows users to view my products and inforamation.",
  },
];

const Project = () => {
  return (
    <section className="text-gray-900 body-font"> 
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-gray-900 hover:text-pink-600 animate-bounce hover:uppercase">
            <span className="text-white text-5xl cursor-pointer">Projects</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl text-gray-500 font-serif">
            Explore my projects and learn more about my work and skills..!!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              data-aos="flip-right" data-aos-duration="2000"
            >
              <div className="flex flex-col items-center text-center border border-black rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg transition-transform transform hover:scale-110">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    className="object-cover w-full h-full"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity hover:opacity-40"></div>
                </div>
                <div className="w-full p-4 bg-black h-[220px]">
                  <Link href={project.link || "#"}>
                    <h1 className="text-2xl font-serif text-bold text-[#9a5cec] hover:uppercase hover:text-violet-900 transition-colors duration-300 cursor-pointer mb-3">
                      {project.title}
                    </h1>
                  </Link>
                  <p className="mb-4 text-gray-700">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;