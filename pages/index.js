import React from 'react';
import About from '../components/Body/Home/About';
import Intro from '../components/Body/Home/Intro';
import ScrollToTop from '../components/Body/Home/ScrollToTop';
import Navbar from '../components/shared/Navbar';

const index = () => {
    return (
        <div id="app">
            <Navbar></Navbar>
            <Intro></Intro>
            <About></About>
            <ScrollToTop></ScrollToTop>
        </div>
    );
};

export default index;