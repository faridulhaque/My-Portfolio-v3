import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../pages/_app";
import NavbarSmall from "../../responsiveComponents/small/NavbarSmall";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import ScrollToTop from "../shared/ScrollToTop";
import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Projects from "./Projects";

const HomeIndex = () => {
  const { modalData } = useContext(GlobalContext);

  const { featureModalOpen } = modalData;

 

  return (
    <div className="app">
      <Navbar></Navbar>
      <NavbarSmall></NavbarSmall>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </div>
  );
};

export default HomeIndex;
