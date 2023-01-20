
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../pages/_app';
import Navbar from '../shared/Navbar';

import Footer from '../shared/Footer';
import NavbarSmall from '../../responsiveComponents/small/NavbarSmall';
import ProjectFeatures from './ProjectFeatures';

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
            {
                features?.map((feature, index) => (<ProjectFeatures key={feature?.title} features={features} feature={feature} index={index}></ProjectFeatures>))
            }

            <Footer></Footer>

        </div>
    );
};

export default ProjectIndex;