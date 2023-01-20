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
      <div
        className="grid desktop:grid-cols-2  laptop:grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 
      desktop:gap-4 laptop:gap-3 tablet:gap-2 mobile:gap-1
      desktop:mt-20 laptop:mt-10 tablet:mt-5 mobile:mt-0 w-10/12 m-auto"
      >
        <div className="w-full desktop:h-[60vh] laptop:h-[40vh] mobile:h-auto tablet:h-auto  flex items-center">
          <div className="h-3/4 w-full mt-10">
            <h3 className="text-3xl text-basic desktop:mt-10 laptop:mt-10 tablet:mt-5 mobile:mt-2 mb-2">
              Hello! I am a
            </h3>

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

            <p className="text-basic desktop:mt-5 laptop:mt-3 tablet:mt-2 mobile:mt-2 text-[16px] desktop:w-3/4 laptop:3/4 tablet:w-full mobile:w-full">
              Hi! I am Faridul Haque! I am a self-motivated web developer with
              good knowledge of HTML, CSS, JavaScript and React JS.
            </p>
            <div className='xs:flex mobile:flex tablet:flex desktop:hidden laptop:hidden xl:hidden items-center justify-center w-full h-auto mt-5'>
                        <a className="btn w-full bg-primary text-white py-2 px-3 flex items-center justify-center rounded shadow-md hover:shadow-xl cursor-pointer">
                            Download Resume
                        </a>
                    </div>
            <p className="desktop:w-3/4 laptop:w-11/12 mobile:w-full tablet:w-full xs:w-full h-[75px] mt-10 flex items-center justify-between">
              <Link
                className="bg-[#24292F] p-3  rounded-full shadow-xl"
                href="https://github.com/faridulhaque"
                target="_blank"
              >
                <BsGithub className="text-[25px] text-white"></BsGithub>
              </Link>

              <Link
                className="bg-[#0A66C2] p-3  rounded-full shadow-xl"
                href="https://www.linkedin.com/in/faridulhaquemurshed/"
                target="_blank"
              >
                <BsLinkedin className="text-[25px] text-white"></BsLinkedin>
              </Link>

              <Link
                className="bg-[#B92B27] p-3  rounded-full shadow-xl"
                href="https://www.quora.com/profile/Faridul-Haque-Murshed"
                target="_blank"
              >
                <SiQuora className="text-[25px] text-white"></SiQuora>
              </Link>

              <Link
                className="bg-[#1877F2] p-3  rounded-full shadow-xl"
                href="https://www.facebook.com/faridhaque911/"
                target="_blank"
              >
                <FaFacebook className="text-[25px] text-white"></FaFacebook>
              </Link>
            </p>
          </div>
        </div>

        <div className="w-full xl:mt-0 desktop:mt-0 tablet:mt-20 mobile:mt-10 xs:mt-20">
          <div className="xl:h-[60vh] desktop:h-[60vh] laptop:[40vh] mobile:h-auto tablet:h-auto flex items-center justify-center w-full relative">
            <Image
              className="shadow-xl rounded-lg laptop:mt-5"
              src={intro}
              alt="man_vector"
              // width={500}
              // height={500}
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Intro;
