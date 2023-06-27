import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../About/About';
import HomeSkill from '../HomeSkill/HomeSkill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HomeSkill></HomeSkill>
        </div>
    );
};

export default Home;