import Image from 'next/image';
import React, { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiGlobe } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import TooltipContainer from '../ToolTip/TooltipContainer';
import Link from 'next/link';
import { GlobalContext } from '../../pages/_app';

const ProjectCard = ({ project }) => {
    const { modalData } = useContext(GlobalContext)
    const { featureModalOpen,
        setFeatureModalOpen,
        gitModalOpen,
        setGitModalOpen, } = modalData;

console.log(gitModalOpen)
console.log(featureModalOpen)


    return (

        <div className="w-full h-[500px] bg-[#ECECEC] shadow-xl transition-all duration-700 hover:shadow-2xl rounded-xxl hover:scale-105">
            <div className="w-full h-3/4 relative">
                <Image className='w-10/12 h-full' src={project?.image} alt="screen-shot" width={550} height={500}></Image>
                <div className="w-2/12 absolute right-0 top-0 h-full bg-[#ECECEC] flex flex-col items-center justify-around">
                    <TooltipContainer modalOpen={setGitModalOpen} dataTip="Git" icon={<BsGithub className='text-white text-[2vh]'></BsGithub>} cn="bg-git"></TooltipContainer>

                    <Link href={project?.live} target="_blank">
                        <TooltipContainer dataTip="Live Site" cn="bg-web" icon={<BiGlobe className='text-white text-[2vh]'></BiGlobe>}></TooltipContainer>
                    </Link>

                    <TooltipContainer modalOpen={setFeatureModalOpen} dataTip="Features" cn="bg-features" icon={<AiOutlineInfoCircle className='text-white text-[2vh]'></AiOutlineInfoCircle>}></TooltipContainer>
                </div>
            </div>

            <div className="w-full h-1/4">
                <h1 className="text-basic text-3xl mt-5 ml-4">{project?.name}</h1>
            </div>
        </div>
    );
};

export default ProjectCard;