import React from 'react';
import { useEffect } from 'react';
import Banner from '../Home/Banner/Banner'
import PopularPackages from '../Home/PopularPackages/PopularPackages'
import Influence from './Influence/Influence';
import Contact from './Contact/Contact'

const Home = () => {
    useEffect(() => {
        document.title = 'TourMama : Your Trusted Travel Partner'
     },[]);

    return (
        <>
         <Banner></Banner>
         <PopularPackages></PopularPackages>
         <Influence></Influence>
         <Contact></Contact>
        </>
    );
};

export default Home;