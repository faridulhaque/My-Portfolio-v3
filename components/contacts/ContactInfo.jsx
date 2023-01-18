import Link from "next/link";
import React from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { TbBrandTelegram } from "react-icons/tb";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-4/12 mt-5">
      <h2 className="text-4xl text-basic">Any Query?</h2>
      <p className="text-[16px] text-basic mt-5 text-justify mr-5">
        If you have any questions feel free to
        contact me via email, phone, Whatsapp, Telegram, Linked In or Facebook.
        Also, you can send me a message directly using the form on the right.
      </p>
      <p className="text-basic flex items-center my-3">
        <span className="bg-primary p-2 rounded-full">
          <HiOutlineMail className="text-white text-[18px]"></HiOutlineMail>
        </span>
        <span className="ml-3">faridmurshed9@gmail.com</span>
      </p>
      <p className="text-basic flex items-center my-3">
        <span className="bg-primary p-2 rounded-full">
          <HiOutlinePhone className="text-white text-[18px]"></HiOutlinePhone>
        </span>
        <span className="ml-3">+880 1996 438234</span>
      </p>
      <p className="text-basic flex items-center mt-10 justify-between w-full">
        <Link
          href="https://t.me/faridmurshed9"
          className="bg-[#0088cc] p-4 rounded-full shadow-xl"
        >
          <TbBrandTelegram className="text-white text-[22px]"></TbBrandTelegram>
        </Link>
        <Link
          href="https://whatsapp.com/dl/"
          className="bg-[#19BF33] p-4 rounded-full shadow-xl"
        >
          <BsWhatsapp className="text-white text-[22px]"></BsWhatsapp>
        </Link>
        <Link
          className="bg-[#0A66C2] p-4  rounded-full shadow-xl"
          href="https://github.com/faridulhaque"
          target="_blank"
        >
          <BsLinkedin className="text-[25px] text-white"></BsLinkedin>
        </Link>
        <Link
          className="bg-[#1877F2] p-4   rounded-full shadow-xl"
          href="https://www.facebook.com/faridhaque911/"
          target="_blank"
        >
          <FaFacebook className="text-[25px] text-white"></FaFacebook>
        </Link>
      </p>
    </div>
  );
};

export default ContactInfo;
