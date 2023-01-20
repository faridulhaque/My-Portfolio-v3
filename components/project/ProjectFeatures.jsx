import Image from "next/image";
import React from "react";

const ProjectFeatures = ({ feature, index }) => {
  return (
    <>
      <hr className="w-10/12 text-primary my-20 mx-auto"/>

      <div
        className={`mb-20 xl:w-11/12 desktop:w-11/12 laptop:w-11/12 tablet:w-11/12 mobile-w-11/12 xs:w-11/12 xl:block desktop:block laptop:block tablet:block mobile:block xs:block items-center justify-evenly m-auto ${
          index % 2 === 0 ? "flex-row-reverse" : ""
        }`}
      >
        <div className="xl:w-full desktop:w-full laptop:w-full tablet:w-full mobile:w-full  flex items-center justify-center bg-white shadow-2xl">
          <Image
            className="w-full h-full"
            src={feature?.img}
            alt="ss"
            width="1000"
            height="1000"
          ></Image>
        </div>
        <div className="xl:w-full desktop:w-full laptop:w-full tablet:w-full mobile:w-full xs:w-full flex items-center justify-center tablet:mt-10 mobile:mt-10 xs:mt-10">
          <p className="desktop:text-1xl laptop:text-1xl mobile:text-1xl tablet:text-1x xl:text-1xl xs:text-1xl text-basic bg-white p-5 shadow-2xl rounded-sm w-full">
            {feature?.des}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectFeatures;
