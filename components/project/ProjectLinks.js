import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
import TooltipContainer from '../ToolTip/TooltipContainer';


const ProjectLinks = ({project}) => {
    return (
        <div className="absolute px-10 bg-white w-[60px] h-[400px] shadow-xl z-[10] right-20 top-10 flex flex-col items-center justify-around">
                        <Link href={project?.live} target="_blank">
                            <TooltipContainer
                                dataTip="Live Site"
                                cn="bg-web"
                                icon={<BiGlobe className="text-white text-[2vh]"></BiGlobe>}
                            ></TooltipContainer>
                        </Link>

                        <Link href={project?.git?.client} target="_blank">
                            {" "}
                            <TooltipContainer
                                dataTip="Client Side"
                                icon={<BsGithub className="text-white text-[2vh]"></BsGithub>}
                                cn="bg-git"
                            ></TooltipContainer>
                        </Link>
                        <Link href={project?.git?.server} target="_blank">
                            {" "}
                            <TooltipContainer
                                dataTip="Server Side"
                                icon={<BsGithub className="text-white text-[2vh]"></BsGithub>}
                                cn="bg-git"
                            ></TooltipContainer>
                        </Link>
                    </div>
    );
};

export default ProjectLinks;