import Image from "next/image";
import React from "react";
import aboutMe from "../../assets/images/aboutMe.png";

const About = () => {
  return (
    <div id="about">
      <h2 className="text-center text-4xl text-basic desktop:my-20 laptop:my-5 tablet:my-5 mobile:my-5 xs:my-5">About Me</h2>
      <div className="w-full desktop:h-[550px] laptop:h-[450px] tablet:h-auto mobile:h-auto flex justify-center ">
        <div className="desktop:w-10/12 laptop:w-full h-full desktop:flex laptop:flex tablet:block mobile:block items-center">
          <div className="w-2/4 h-full desktop:block laptop:hidden tablet:hidden mobile:hidden xs:hidden">
            <Image
              src={aboutMe}
              alt="man-computer"
              className="w-full h-full shadow-xl rounded-lg"
            ></Image>
          </div>

          <div className="desktop:w-2/4 laptop:w-full tablet:w-full mobile:w-full h-full flex items-center justify-center">
            <div className="desktop:h-3/4 laptop:h-auto tablet:h-full mobile:h-full desktop:w-10/12 laptop:w-10/12 tablet:w-full mobile:w-11/12 xs:w-11/12">
              
              <p className="text-[18px] text-justify text-basic">
                My name is Faridul Haque Murshed. I live in Sylhet, Bangladesh.
                I was born in 1991.
                <br></br>I had to leave my school in 2003 due to some personal
                issues and started again after a long time in 2017.
                <br></br>
                When the Covid-19 pandemic was over, I thought to start a new
                life so I decided to be a MERN developer. I started learning
                that in January 2022 and after seven months of learning I
                started my new career as a React developer in the Dhaka-based IT
                company <q>aide Business Solution</q>. Apart from that, I
                learned Basic TypeScript, Basic Redux, and Next JS.
                <br></br>I love reading books, learning new languages, exploring
                new technologies, and playing chess. My favorite author is
                Sharatchandra Chattopathay and my favorite chess player is
                Mikhail Taal. 
                <br></br>
                My this (2023) year goals are: to be proficient in
                English, Arabic, and Assamese language, to achieve a 1500+
                rating in chess, to read at least 12 books, and above all to
                gain more knowledge about Redux, Node JS, and Data Structure and
                algorithm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
