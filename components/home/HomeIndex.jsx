import React, { useContext } from "react";
import { GlobalContext } from "../../pages/_app";
import Navbar from "../shared/Navbar";
import ScrollToTop from "../shared/ScrollToTop";
import About from "./About";
import Intro from "./Intro";
import Projects from "./Projects";

const HomeIndex = () => {
  const {modalData} = useContext(GlobalContext)

  const {gitModalOpen, featureModalOpen} = modalData

  return (
    <div className={gitModalOpen || featureModalOpen ? "app-lock" : "app"}>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default HomeIndex;


