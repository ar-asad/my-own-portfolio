import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../About/About';
import HomeSkill from '../HomeSkill/HomeSkill';
import ContactMe from '../ContactMe/ContactMe';
import HomeProject from '../HomeProject/HomeProject';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HomeSkill></HomeSkill>
            <HomeProject></HomeProject>
            <Services></Services>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;