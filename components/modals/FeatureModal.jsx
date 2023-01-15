import React from "react";
import TooltipContainer from "../ToolTip/TooltipContainer";
import { BsGithub } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";

const FeatureModal = ({ modalRef, setFeatureModalOpen, project}) => {
const {name, live, description, git, id} = project
const {client, server} = git


  return (
    <>
      <div className="fixed w-[100%] h-[100vh] bottom-0 left-0 bg-basic z-[10] bg-opacity-[0.3]">
        <div className="w-full h-full relative">
          <div
            ref={modalRef}
            className="w-4/12 h-[250px] bg-white absolute top-0 bottom-0 left-0 right-0 m-auto modal-motion"
          >
            <div className="w-full h-[125px] ">
              <h2 className="text-basic mt-5 ml-5 text-4xl">{name}</h2>
              <p className="mt-5 mx-5 text-[18px] text-basic">{description}</p>
            </div>

            <div className="w-full h-[100px]  flex items-center justify-around">
              <Link href={live} target="_blank">
                <TooltipContainer
                  dataTip="Live Site"
                  cn="bg-web"
                  icon={<BiGlobe className="text-white text-[2vh]"></BiGlobe>}
                ></TooltipContainer>
              </Link>

              <Link href={client}>
                {" "}
                <TooltipContainer
                  dataTip="Client Side"
                  icon={<BsGithub className="text-white text-[2vh]"></BsGithub>}
                  cn="bg-git"
                ></TooltipContainer>
              </Link>
              <Link href={server}>
                {" "}
                <TooltipContainer
                  dataTip="Server Side"
                  icon={<BsGithub className="text-white text-[2vh]"></BsGithub>}
                  cn="bg-git"
                ></TooltipContainer>
              </Link>

              <Link href={`/${id}`}>
                <TooltipContainer
                  dataTip="Features"
                  cn="bg-features"
                  icon={
                    <AiOutlineInfoCircle className="text-white text-[2vh]"></AiOutlineInfoCircle>
                  }
                ></TooltipContainer>
              </Link>
            </div>

            <span
              onClick={() => setFeatureModalOpen(false)}
              className="bg-basic rounded-full text-white absolute right-[-5px] top-[-5px] py-2 px-3 cursor-pointer shadow-xl"
            >
              X
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureModal;
