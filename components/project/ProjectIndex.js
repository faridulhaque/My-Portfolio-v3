import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../pages/_app';
import Navbar from '../shared/Navbar';
import TooltipContainer from '../ToolTip/TooltipContainer';
import ProjectCarousel from './ProjectCarousel';
import { BsGithub } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const ProjectIndex = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [carouselSl, setCarouselSL] = useState(1)

    const [blockCarousel, setBlockCarousel] = useState(false)

    const router = useRouter()
    const projectId = router.query.project


    const { modalData, projectsInfo } = useContext(GlobalContext);

    const {
        setFeatureModalOpen,
        featureModalOpen
    } = modalData


    useEffect(() => {
        setLoading(true)
        fetch('https://raw.githubusercontent.com/faridulhaque/My-json-data/main/my_protfolio3.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .then(error => {
                setError(error?.message)
                setLoading(false)
            })
    }, [])


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
            }, 7500);
            return () => clearInterval(interval);

        }

    }, [features, blockCarousel, featureModalOpen, setFeatureModalOpen])




    const feature = features?.find(f => f.sl === carouselSl)


    if (error) {
        return (
            <h2 className="text-center text-4xl text-basic mt-10">An error has occurred</h2>
        );
    }


    if (loading) {
        return <h2 className="text-center text-4xl text-basic mt-10">Loading...</h2>;
    }





    return (
        <div className="app lg:h-[600px] xl:h-[100vh] lg:pb-10">
            <Navbar></Navbar>
            <div className="relative">

                <ProjectCarousel project={project} feature={feature} handleBlockCarousel={handleBlockCarousel}></ProjectCarousel>


                {
                    project?.id && <div className="absolute px-5 bg-white w-[60px] h-[400px] shadow-xl z-[10] right-20 top-10 flex flex-col items-center justify-around">
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
                }
            </div>


        </div>
    );
};

export default ProjectIndex;