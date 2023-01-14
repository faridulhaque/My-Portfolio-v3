import Image from 'next/image';
import React from 'react';

const ProjectCard = ({project}) => {
    return (

        <div className="w-full h-[500px] bg-[#ECECEC] shadow-xl transition-all duration-700 hover:shadow-2xl rounded-xxl hover:scale-105">
            <div className="w-full h-3/4 relative">
                <Image className='w-10/12 h-full' src={project?.image} alt="screen-shot" width={550} height={500}></Image>
                <div className="w-2/12 absolute right-0 top-0 h-full bg-[#ECECEC]">

                </div>
            </div>
        </div>
    );
};

export default ProjectCard;