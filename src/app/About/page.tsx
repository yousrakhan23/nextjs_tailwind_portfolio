"use client";
import React from 'react';
import Image from 'next/image';
import myProfile from '../../public/my_profile.jpg';

const AboutPage = () => {
  return (
    <>
      <section className="text-slate-400 body-font overflow-hidden ">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">


          <div className="relative group">
            <Image
              src={myProfile}
              alt="my profile"
              height={250}
              width={250}
              className="rounded-full shadow-xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:animate-wiggle"
              data-aos="zoom-in"
              data-aos-easing="ease-in-cubic"
              data-aos-duration="2000"
            />
            
            <div className="absolute inset-0 bg-gradient-to-br opacity-20 rounded-full"></div>
          </div>


          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className="ml-3 text-5xl font-serif font-bold text-black hover:text-white cursor-pointer transition-colors duration-500">About Me</h1>
            <h2
              className="title-font sm:text-4xl text-3xl mb-4 text-white font-serif font-semibold relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >

              <div className="absolute inset-x-0 bottom-0 h-1 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </h2>
            <p
              className="mb-8 leading-relaxed text-lg text-white hover:text-black transition-opacity duration-700 ease-in-out group-hover:opacity-90"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
            As a driven front-end developer, I am advancing my skills through a governor-initiated program, focused on mastering cutting-edge technologies. With hands-on experience in HTML, CSS, TypeScript, JavaScript, React, Next.js, and Tailwind, I have built a wide array of real-world projects that reflect both creativity and a solid grasp of modern development practices. My background in digital marketing further strengthens my ability to create user-focused solutions that not only perform well but also resonate with audiences. I am committed to continuous growth and contributing impactful solutions in the tech and marketing landscapes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;