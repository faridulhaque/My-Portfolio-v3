
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../pages/_app';
import Navbar from '../shared/Navbar';

import Footer from '../shared/Footer';
import NavbarSmall from '../../responsiveComponents/small/NavbarSmall';
import ProjectFeatures from './ProjectFeatures';
import ProjectLinks from './ProjectLinks';

const ProjectIndex = () => {




    const router = useRouter()
    const projectId = router.query.project


    const { modalData, projectsInfo } = useContext(GlobalContext);
    const { data, error } = projectsInfo

    const {
        setFeatureModalOpen,
        featureModalOpen
    } = modalData



    useEffect(() => {
        setFeatureModalOpen(false);

        if (!featureModalOpen) {
            document.body.style.overflowY = "scroll"

        }

    }, [featureModalOpen, setFeatureModalOpen])






    if (error) {
        return (
            <h2 className="text-center text-4xl text-basic mt-10">An error has occurred</h2>
        );
    }


    if (!data) {
        return <div className="h-[100vh]">

            <h2 className="text-center text-4xl text-basic mt-10">Loading...</h2>;
        </div>

    }



    const project = data?.find(d => d?.id === projectId)

    const features = project?.features;


    console.log(features)


    return (
        <div className="app lg:h-[600px] xl:h-[100vh] lg:pb-10">
            <Navbar></Navbar>
            <NavbarSmall></NavbarSmall>

            <div className="mx-auto mt-20 w-10/12 grid xl:grid-cols-2 desktop:grid-cols-2 laptop:grid-cols-1 tablet:grid-cols-1 mobile:grid-cols-1 xs:grid-cols-1 h-auto">
                <div className='w-full bg-white h-auto pb-10'>
                    <h2 className='text-basic text-4xl mt-5 ml-5'>{project.name}</h2>
                    <p className='text-basic mt-5 ml-5'>{project.description}</p>
                </div>

                <div className="w-full bg-white h-auto flex items-center justify-center xl:pb-0 desktop:pb-0 laptop:tb-10 tablet:pb-10  mobile:pb-10 xs:pb-10">
                    <ProjectLinks project={project}></ProjectLinks>
                </div>

            </div>
            <div className='w-10/12 bg-white h-auto text-center py-10 mt-5 m-auto text-red'><p className='w-11/12 m-auto'>{project.credentials}</p></div>

            {
                features?.map((feature, index) => (<ProjectFeatures key={feature?.title} features={features} feature={feature} index={index}></ProjectFeatures>))
            }

            <Footer></Footer>

        </div>
    );
};

export default ProjectIndex;