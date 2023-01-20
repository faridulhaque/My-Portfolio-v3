import React from 'react';
import {AiOutlineToTop} from "react-icons/ai"

const ScrollToTop = () => {
    return (
        <div onClick={()=>window.scrollTo(0, 0)} className='xl:w-55px  desktop:w-[55px] laptop:w-[45px] tablet:w-[40px] mobile:w-[40px] xs:w-[40px] xl:h-[60px] desktop:h-[60px] laptop:h-[50px] tablet:h-[50px] mobile:h-[50px] xs:h-[50px] rounded-full bg-primary text-white flex justify-center items-center fixed xl:bottom-[50px] xl:right-[50px] desktop:bottom-[50px] desktop:right-[50px] laptop:bottom-[40px] laptop:right-[40px] tablet:bottom-[30px] tablet:right-[30px] mobile:bottom-[30px] mobile:right-[20px] xs:bottom-[30px] xs:right-[20px] cursor-pointer shadow-xl'>
            <AiOutlineToTop className='text-white text-4xl font-bold'></AiOutlineToTop>
        </div>
    );
};

export default ScrollToTop;