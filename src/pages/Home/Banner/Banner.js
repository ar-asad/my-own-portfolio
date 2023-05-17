import React from 'react';
import face from '../../../images/banner/face.jpg';
import './Banner.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, IconName } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero lg:min-h-screen bg-sky-950 ">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
                <img src={face} className="max-w-sm rounded-lg w-1/2  mask mask-squircle" alt='face' />
                <div className='w-1/2 text-sky-100'>
                    <p className='lg:text-2xl text-base uppercase font-semibold lg:mb-3'>Hi there! I'M</p>
                    <h1 className="text-2xl lg:text-5xl font-bold mb-3">Asaduzzaman <span className='text-amber-500' >Asad</span></h1>
                    <p id='sub-title' className='text-2xl font-semibold text-slate-400 mb-4'>Web Devloper</p>
                    <p className='lg:text-lg font-medium mb-12'>Learning <span className='text-amber-500'>Back-End Web Development</span> passionate about creating interactive applications and experiences on the web.I'm always up for a challenge and driven to exceed expectations.</p>
                    <div className='lg:flex gap-14 items-center'>
                        <button className="btn btn-warning text-sky-100 font-semibold bg-amber-500 rounded px-12 mb-4 ">Download Resume</button>
                        <div className='flex gap-3'>
                            <FaGithub className='w-6 text-amber-500 h-6'></FaGithub>
                            <FaLinkedin className='w-6 text-amber-500 h-6'></FaLinkedin>
                            <FaInstagram className='w-6 text-amber-500 h-6'></FaInstagram>
                            <FaFacebook className='w-6 text-amber-500 h-6'></FaFacebook>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;