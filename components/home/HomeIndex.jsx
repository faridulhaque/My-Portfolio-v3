import React from "react";
import Navbar from "../shared/Navbar";
import ScrollToTop from "../shared/ScrollToTop";
import About from "./About";
import Intro from "./Intro";

const HomeIndex = () => {
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <ScrollToTop></ScrollToTop>
    </>
  );
};

export default HomeIndex;
