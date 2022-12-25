import Image from "next/image";
import React from "react";
import intro from "../../../assets/images/intro.png";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-20 w-10/12 m-auto">
        <div className="w-full h-[60vh] flex items-center">

          <div className="h-3/4 w-full">
            <h3 className="text-3xl text-basic mt-10 mb-2">Hello! I am a</h3>

            <h2>
              <span className="text-basic text-4xl font-bold uppercase">Web</span>{" "}
              <span className="text-4xl text-primary font-bold uppercase">Developer</span>
            </h2>

            {/* <Typewriter 
options={{
    strings: [""],
    autoStart: true,
    loop: true,
    pauseFor: 5000
}}
/> */}
          </div>
        </div>

        <div className="w-full h-[60vh] flex items-center">
          <Image src={intro} alt="man_vector" width={"100%"} height={"100%"} />
        </div>
      </div>
    </>
  );
};

export default Intro;
