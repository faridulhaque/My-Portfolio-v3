import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../../assets/images/t_logo.png";
import styles from "../../styles/Navbar.module.css"

const Navbar = () => {
  const router = useRouter();


  return (
    <nav className={`w-full h-20 flex m-auto shadow-xl bg-[#B1E6DA] ${styles.navbar} sticky top-0 z-10`}>
      <div className="h-full xl:w-10/12 desktop:w-11/12 laptop:w-11/12 flex align-center m-auto cursor-pointer">
        <div
          onClick={() => router.push("/")}
          className="flex h-full w-2/12 items-center justify-start"
        >
          <span className="w-1/4 h-3/4 flex items-center">
            <Image
              src={logo}
              alt="Landscape picture"
              width={"100%"}
              height={"100"}
            />
            <h3 className="text-4xl ml-2 text-basic">Farid</h3>
          </span>
        </div>

        <div className="flex h-full desktop:w-8/12 xl:w-9/12 laptop:w-6/12">
          <ul className="w-full h-full flex items-center justify-evenly text-basic">
            <li
              className="text-basic hover:text-primary"
            
            >
              <Link href="/">Home</Link>
            </li>


            <li
              className="text-basic hover:text-primary"
            >
              <Link href="/home#about">
                About Me
              </Link>
            </li>


            <li
             className=
             "text-basic hover:text-primary"
            >
              <Link href="/home#projects">Projects</Link>
            </li>


            <li
              className=
                "text-basic hover:text-primary"
              
            >
              <Link href="/home#contact">Contact</Link>
            </li>

            
            
          </ul>
        </div>

        <div className="flex h-full desktop:w-4/12 xl:w-3/12 laptop:w-4/12 items-center justify-end">
          <a download href="resume_me_27_01_23.pdf" className="w-full btn bg-primary text-white py-2 xl:px-3 desktop:px-2 flex items-center justify-center rounded shadow-md hover:shadow-xl cursor-pointer">
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
