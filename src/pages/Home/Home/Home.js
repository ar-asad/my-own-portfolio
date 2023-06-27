import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../About/About';
import HomeSkill from '../HomeSkill/HomeSkill';
import ContactMe from '../ContactMe/ContactMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HomeSkill></HomeSkill>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;