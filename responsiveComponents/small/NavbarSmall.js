import Image from 'next/image';
import React, { useState } from 'react';
import logo from "../../assets/images/t_logo.png";
import styles from "../../styles/Navbar.module.css"
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import Link from 'next/link';

const NavbarSmall = () => {
    const [menu, setMenu] = useState(false)
    return (
        <nav className={`${styles.navbarSmall} w-full h-20 shadow-xl bg-[#97dece80]`}>
            <div className='w-full h-full'>
                <AiOutlineMenuUnfold onClick={() => setMenu(!menu)} className='absolute top-0 bottom-0 left-3 m-auto text-4xl text-basic cursor-pointer'></AiOutlineMenuUnfold>


                <div className='w-10/12 h-full m-auto flex items-center'>

                    <div className='flex items-center w-2/4 h-full'>
                        <Image src={logo} alt="logo" width="80" height="80"></Image>
                        <h2 className='text-4xl text-basic ml-3'>Farid</h2>
                    </div>
                    
                </div>




                <div className={`${styles.menu} ${menu ? styles.menuTrue : styles.menuFalse}`}>

                    <ul>
                        <li
                            className=""

                        >
                            <Link href="/">Home</Link>
                        </li>


                        <li
                            className=""
                        >
                            <Link href="/home#about">
                                About Me
                            </Link>
                        </li>


                        <li
                            className=
                            ""
                        >
                            <Link href="/home#projects">Projects</Link>
                        </li>


                        <li
                            className=
                            ""

                        >
                            <Link href="/home#contact">Contact</Link>
                        </li>



                    </ul>
                </div>

            </div>





        </nav>
    );
};

export default NavbarSmall;