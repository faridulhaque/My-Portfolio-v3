import Link from "next/link";
import React from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { TbBrandTelegram } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";

const ContactInfo = () => {
  return (
    <div className="w-4/12 h-full bg-white">
      
      <h2 className="text-4xl mt-5 text-basic">Any Query?</h2>
      <p className="text-[16px] text-basic mt-5 text-justify mr-5">
        If you have any questions or want to know more about me, feel free to
        contact me via email, phone, Whatsapp. Also, you can send me an email
        directly from here.
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
      <p className="text-basic flex items-center my-5 justify-between w-2/4">
        <Link href="https://t.me/faridmurshed9" className="bg-[#0088cc] py-4 px-4 rounded-full shadow-xl">
          <TbBrandTelegram className="text-white text-[22px]"></TbBrandTelegram>
        </Link>
        <Link href="https://whatsapp.com/dl/" className="bg-[#19BF33] py-4 px-4 rounded-full shadow-xl">
          <BsWhatsapp className="text-white text-[22px]"></BsWhatsapp>
        </Link>
      </p>
    </div>
  );
}; 

export default ContactInfo;
