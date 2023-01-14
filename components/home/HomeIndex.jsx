import React from "react";
import Navbar from "../shared/Navbar";
import ScrollToTop from "../shared/ScrollToTop";
import About from "./About";
import Intro from "./Intro";
import Projects from "./Projects";

const HomeIndex = () => {
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <ScrollToTop></ScrollToTop>
    </>
  );
};

export default HomeIndex;


