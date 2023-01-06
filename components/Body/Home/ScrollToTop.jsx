import React from 'react';
import {AiOutlineToTop} from "react-icons/ai"

const ScrollToTop = () => {
    return (
        <div onClick={()=>window.scrollTo(0, 0)} className='w-[55px] h-[60px] rounded-full bg-primary text-white flex justify-center items-center fixed bottom-[50px] right-[50px] cursor-pointer'>
            <AiOutlineToTop className='text-white text-4xl font-bold'></AiOutlineToTop>
        </div>
    );
};

export default ScrollToTop;