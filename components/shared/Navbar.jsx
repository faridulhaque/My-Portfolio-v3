import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../../assets/images/t_logo.png";

const Navbar = () => {
  const router = useRouter();

  console.log(router.pathname)

  return (
    <nav className="w-full h-20 flex m-auto">
      <div className="h-full w-10/12 flex align-center m-auto cursor-pointer">
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

        <div className="flex h-full w-8/12 ">
          <ul className="w-full h-full flex items-center justify-evenly text-basic">
            <li
              className="text-basic hover:text-primary"
            
            >
              <Link href="/">Home</Link>
            </li>

            <li
              className=
                "text-basic hover:text-primary"
              
            >
              <Link href="#blog">Blog</Link>
            </li>

            <li
             className=
             "text-basic hover:text-primary"
            >
              <Link href="#projects">Projects</Link>
            </li>

            <li
              className="text-basic hover:text-primary"
            >
              <Link scroll={false} href="#about" smooth>
                About Me
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex h-full w-2/12 items-center justify-end">
          <a className="btn bg-primary text-white py-2 px-3 flex items-center justify-center rounded shadow-md hover:shadow-xl cursor-pointer">
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
