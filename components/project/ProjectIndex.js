import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../pages/_app';
import Navbar from '../shared/Navbar';

const ProjectIndex = () => {
    const [carouselSl, setCarouselSL] = useState(1)

    const router = useRouter()
    const projectId = router.query.project


    const { projectsInfo } = useContext(GlobalContext);

    const { data, error } = projectsInfo


    const project = data?.find(d => d?.id === projectId)


    const features = project.features

    if (error) {
        return (
            <h2 className="text-center text-4xl text-basic">An error has occurred</h2>
        );
    }


    if (!data) {
        return <h2 className="text-center text-4xl text-basic">Loading...</h2>;
    }



    return (
        <div className="app">
            <Navbar></Navbar>
            <h1 className='text-4xl text-center'>hello{features?.length} </h1>
        </div>
    );
};

export default ProjectIndex;