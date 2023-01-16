import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../pages/_app';
import Navbar from '../shared/Navbar';
import ProjectCarousel from './ProjectCarousel';

const ProjectIndex = () => {
    const [carouselSl, setCarouselSL] = useState(1)

    const [blockCarousel, setBlockCarousel] = useState(false)

    const router = useRouter()
    const projectId = router.query.project


    const { projectsInfo, modalData } = useContext(GlobalContext);

    const {
        setFeatureModalOpen,
        featureModalOpen
    } = modalData

    const { data, error } = projectsInfo


    const project = data?.find(d => d?.id === projectId)


    const features = project?.features.map((feature, i) => {
        return { ...feature, sl: i + 1 }
    });

    const handleBlockCarousel = (method) => {
        setBlockCarousel(true)
        if (method === "forward") {
            if (carouselSl >= parseInt(features?.length)) {
                setCarouselSL(1)

            }
            else {
                setCarouselSL(carouselSl + 1)
            }
        }
        if (method === "back") {
            if (carouselSl <= 1) {
                setCarouselSL(parseInt(features?.length))

            }
            else {
                setCarouselSL(carouselSl - 1)
            }
        }
        setTimeout(() => {
            setBlockCarousel(false)
        }, 10000)
    }


    useEffect(() => {
        setFeatureModalOpen(false);

        if (!featureModalOpen) {
            document.body.style.overflowY = "scroll"

        }


        if (!blockCarousel) {
            const interval = setInterval(() => {
                setCarouselSL(carouselSl => {
                    if (carouselSl >= parseInt(features?.length)) {
                        setCarouselSL(1);
                    } else {
                        return carouselSl + 1;
                    }
                });
            }, 10000);
            return () => clearInterval(interval);

        }

    }, [features, blockCarousel])




    const feature = features?.find(f => f.sl === carouselSl)





    if (error) {
        return (
            <h2 className="text-center text-4xl text-basic">An error has occurred</h2>
        );
    }


    if (!data) {
        return <h2 className="text-center text-4xl text-basic">Loading...</h2>;
    }
    console.log(carouselSl)



    return (
        <div className="app lg:h-[600px] xl:h-[100vh] lg:pb-10">
            <Navbar></Navbar>
            <ProjectCarousel project={project} feature={feature} handleBlockCarousel={handleBlockCarousel}></ProjectCarousel>

        </div>
    );
};

export default ProjectIndex;