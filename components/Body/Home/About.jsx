import Image from "next/image";
import React from "react";
import aboutMe from "../../../assets/images/aboutMe.png";

const About = () => {
  return (
    <div id="about">
      <h2 className="text-center text-4xl text-basic my-20">About Me</h2>
      <div className="w-full h-[600px] flex justify-center">
        <div className="w-10/12 h-full flex items-center">
          <div className="w-2/4 h-full">
            <Image
              src={aboutMe}
              alt="man-computer"
              className="w-full h-full"
            ></Image>
          </div>

          <div className="w-2/4 h-full flex items-center justify-center">
            <div className="h-3/4 w-10/12">
              <p className="">{``}</p>
              <p className="text-[18px] text-justify text-basic">
                My name is Faridul Haque Murshed. I live in Sylhet, Bangladesh.
                I was born in 1991.
                <br></br>I had to leave my school in 2003 due to some personal
                issues and started again after a long time in 2017.
                <br></br>
                When the Covid-19 pandemic is over, I thought to start a new
                life so I decided to be a MERN developer. I started learning
                that in January 2022 and after seven months of learning I
                started my new career as a React developer in the Dhaka-based IT
                company <q>aide Business Solution</q>. Apart from that, I
                learned Basic TypeScript, Basic Redux, and Next JS.
                <br></br>I love reading books, learning new languages, exploring
                new technologies, and playing chess. My favorite author is
                Sharatchandra Chattopathay and my favorite chess player is
                Mikhail Taal. My this (2023) year goals are: to be proficient in
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
