import React, { useContext } from "react";
import { GlobalContext } from "../../pages/_app";
import Navbar from "../shared/Navbar";
import ScrollToTop from "../shared/ScrollToTop";
import About from "./About";
import Intro from "./Intro";
import Projects from "./Projects";

const HomeIndex = () => {

  const {modalData} = useContext(GlobalContext)

  const {featureModalOpen} = modalData

  return (
    <div className="app">
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default HomeIndex;
