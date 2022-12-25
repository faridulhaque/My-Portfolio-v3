import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../../assets/images/t_logo.png";


const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-full h-20 flex m-auto">
      <div className="h-full w-10/12 flex align-center m-auto">

        <div className="flex h-full w-2/12 items-center justify-start">
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
              className={router.pathname === "/home" ? "text-primary" : "text-basic"}
            >
              <Link href="/home">Home</Link>
            </li>

            <li
              className={router.pathname == "/blog" ? "text-primary" : "text-basic"}
            >
              <Link href="/blog">Blog</Link>
            </li>

            <li
            //   className={router.pathname == "/" ? "text-primary" : "text-basic"}
            >
              <Link href="#">Projects</Link>
            </li>

            <li
            //   className={router.pathname == "/" ? "text-primary" : "text-basic"}
            >
              <Link href="#">About Me</Link>
            </li>
          </ul>
        </div>

        <div className="flex h-full w-2/12 items-center justify-end">
            <a className="btn bg-primary text-white py-1 px-2 flex items-center justify-center rounded shadow-md hover:shadow-xl cursor-pointer">Download Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
