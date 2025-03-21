"use client";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

interface SkillCardProps {
  title: string;
  description: string;
  colorClass: string;
  svgIcon: React.ReactNode;
  dataAos?: string;
  dataAosDelay?: string;
}

function SkillCard({
  title,
  description,
  colorClass,
  svgIcon,
  dataAos,
  dataAosDelay
}: SkillCardProps) {
  return (
    <div
      className={`flex flex-col items-center p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-2 hover:shadow-xl ${colorClass} text-white relative`}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <div
        className={`flex items-center justify-center w-24 h-24 rounded-full text-6xl mb-6 ${colorClass} bg-opacity-80 border-4 border-white`}
      >
        {svgIcon}
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-black mb-3">{title}</h2>
        <p className="text-base">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-10 transition-opacity duration-300 ease-in-out hover:opacity-40" />
    </div>
  );
}

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="text-black body-font py-24">
      <div className="container px-6 mx-auto">
        <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-white hover:text-black cursor-pointer">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <SkillCard
            title="HTML"
            description="HTML is the standard markup language for Web pages.With HTML you can create your own Website.Easy to learn."
            colorClass="bg-gradient-to-r from-orange-300 to-orange-600"
            svgIcon={
              <div className="text-white">
                <FaHtml5 size={80} />
              </div>}
            dataAos="fade-up"
          />
          <SkillCard
            title="CSS"
            description="CSS stands for Cascading Style Sheets.It describes how HTML elements are to be displayed on screen, paper, or in other media.and it saves a lot of work. It can control the layout of multiple web pages all at once."
            colorClass="bg-gradient-to-r from-blue-300 to-blue-600"
            svgIcon={
              <div className="text-white">
                <FaCss3Alt size={80} />
              </div>}
            dataAos="fade-up"
            dataAosDelay="100"
          />
          <SkillCard
            title="Tailwind CSS"
            description="Rapidly build modern websites without ever leaving your HTML."
            colorClass="bg-gradient-to-r from-teal-300 to-teal-600"
            svgIcon={
              <div className="text-white">
                <SiTailwindcss size={80} />
              </div>}
            dataAos="fade-up"
            dataAosDelay="200"
          />
          <SkillCard
            title="JavaScript"
            description="JavaScript is the world's most popular programming language.It is the programming language of the Web and easy to learn.."
            colorClass="bg-gradient-to-r from-green-500 to-green-800" 
            svgIcon={
              <div className="text-white">
                <FaJsSquare size={80} />
              </div>}
            dataAos="fade-up"
            dataAosDelay="300"
          />
       
          <SkillCard
            title="TypeScript"
            description="TypeScript is a syntactic superset of JavaScript which adds static typing."
            colorClass="bg-gradient-to-r from-blue-400 to-indigo-800"
            svgIcon={
              <div className="text-white">
                <SiTypescript size={80} />
              </div>}
            dataAos="fade-up"
            dataAosDelay="400"
          />
          <SkillCard
            title="React.js"
            description="React is a JavaScript library for building user interfaces.It is used to build single-page applications.It allows us to create reusable UI components.."
            colorClass="bg-gradient-to-r from-cyan-300 to-cyan-600"
            svgIcon={
              <div className="text-white">
                <FaReact size={80} />
              </div>}
            dataAos="fade-up"
            dataAosDelay="500"
          />
          <SkillCard
            title="Next.js"
            description="Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations."
            colorClass="bg-gradient-to-r from-gray-700 to-gray-900"
            svgIcon={
              <div className="text-white">
                <SiNextdotjs size={80} />
              </div>}
            dataAos="fade-up"
            dataAosDelay="600"
          />
          <SkillCard
            title="Python"
            description="Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable."
            colorClass="bg-gradient-to-r from-yellow-300 to-yellow-600"
            svgIcon={
              <div className="text-white">
                <FaPython size={80} />
              </div>}
            dataAos="fade-up"
            dataAosDelay="700"
          />
        </div>
      </div>



    </section>
  );
}

