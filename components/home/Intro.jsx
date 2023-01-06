import Image from "next/image";
import React from "react";
import intro from "../../assets/images/intro.png";
import Typewriter from "typewriter-effect";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiQuora } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Intro = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-20 w-10/12 m-auto">
        <div className="w-full h-[60vh] flex items-center">
          <div className="h-3/4 w-full mt-10">
            <h3 className="text-3xl text-basic mt-10 mb-2">Hello! I am a</h3>

            <h2 className="text-4xl text-primary font-bold uppercase">
              <Typewriter
                options={{
                  strings: ["Web Developer"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 5000,
                }}
              />
            </h2>

            <p className="text-basic mt-5 text-[16px] w-3/4">
              Hi! I am Faridul Haque! I am a self-motivated web developer with
              good knowledge of HTML, CSS, JavaScript and React JS.
            </p>
            <p className="w-3/4 h-[75px] mt-10 flex items-center justify-between">
              <Link className="bg-primary p-3  rounded-full group relative" href="https://github.com/faridulhaque" target="_blank">
                <BsGithub className="text-[25px] text-white"></BsGithub>
                
              </Link>

              <Link className="bg-primary p-3  rounded-full" href="https://www.linkedin.com/in/faridulhaquemurshed/" target="_blank">
                <BsLinkedin className="text-[25px] text-white"></BsLinkedin>
              </Link>

              <Link className="bg-primary p-3  rounded-full" href="https://www.quora.com/profile/Faridul-Haque-Murshed" target="_blank">
                <SiQuora className="text-[25px] text-white"></SiQuora>
              </Link>

              <Link className="bg-primary p-3  rounded-full" href="https://www.facebook.com/faridhaque911/" target="_blank">
                <FaFacebook className="text-[25px] text-white"></FaFacebook>
              </Link>
             
            </p>
          </div>
        </div>

        <div className="w-full ">
          <div className="h-[60vh] flex items-center justify-center w-full relative">
            <Image
              src={intro}
              alt="man_vector"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
