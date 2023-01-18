import Image from 'next/image';
import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,  } from "react-icons/bs"

const ProjectCarousel = ({ feature, project, handleBlockCarousel }) => {
    return (
        <div id="carousel" className='w-3/4 shadow-2xl m-auto bg-white text-basic h-auto mt-10 pt-10 pb-20'>
            <div className='w-11/12 m-auto'>
                <h2 className='text-3xl text-basic'>{project?.name}</h2>
                <p className='text-basic text-[18px]'>{project?.description}</p>
                <p className='text-red text-[16px]'>{project?.credentials}</p>
            </div>
            <Image className='w-11/12 m-auto h-3/4 mt-5' src={feature?.img} width={1000} height={1000} alt="screen-shot"></Image>
            <h2 className='text-3xl text-basic w-full mt-5 flex items-center justify-center'>
                <span onClick={() => handleBlockCarousel("back")}><BsChevronCompactLeft className='mr-5 text-2xl text-center cursor-pointer text-basic hover:text-primary'></BsChevronCompactLeft></span>

                <span>{feature?.title}</span>
                <span onClick={() => handleBlockCarousel("forward")}>
                    <BsChevronCompactRight className='ml-5 text-2xl text-center cursor-pointer text-basic hover:text-primary'></BsChevronCompactRight>
                </span>
            </h2>
            <p className='text-center text-basic mt-5 w-3/4 m-auto text-[18px]'>{feature?.des}</p>
        </div>
    );
};

export default ProjectCarousel;