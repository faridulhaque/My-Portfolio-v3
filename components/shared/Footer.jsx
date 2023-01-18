import React from "react";

const Footer = () => {
    let date =  new Date().getFullYear();
  return (
    <>
    <div className="w-full footer-top"></div>
      <div className=" w-full h-[100px] shadow-xl bg-[#97dece80] flex items-center justify-center">
        <h2 className="text-basic">©Faridul Haque Murshed ~ {date}</h2>
      </div>

    </>
  );
};

export default Footer;
