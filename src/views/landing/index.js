import React from 'react';
import BoughtCTA from './components/bought-cta';
import Graphs from './components/graphs';
import Header from './components/header';
import Stats from './components/stats';

const Landing = () => {
    return(
        <>
            <Header />
            <BoughtCTA />
            <Stats />
            <Graphs />
        </>
    );
}

export default Landing;