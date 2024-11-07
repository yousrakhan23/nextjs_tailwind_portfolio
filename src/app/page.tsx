"use client";

import Aos from "aos";
import 'aos/dist/aos.css';
import React from 'react'
import Home from "./Home/page";
import About from "./About/page";
import Projects from "./Projects/page";
import Services from "./Services/page";
import Skills from "./Skills/page";
import Contact from "./Contact/page";

import { useEffect } from "react";
const HeroPage = () => {
    useEffect(() => {
        Aos.init();
    }, [])
  return (
    <div>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        
    </div>
  );
}

export default HeroPage;