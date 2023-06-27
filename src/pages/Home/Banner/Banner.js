import React from 'react';
import face from '../../../images/banner/face.jpg';
import './Banner.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FcDownload } from "react-icons/fc";

const Banner = () => {
    return (
        <div className="hero lg:min-h-screen lg:pt-12 pt-20 lg:w-full">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20  ">
                <img src={face} className="max-w-sm rounded-lg lg:w-1/2 w-4/5 mask mask-squircle lg:mb-0 mb-6" alt='face' />
                <div className='lg:w-1/2 w-4/5 text-sky-100'>
                    <p className='lg:text-2xl text-base uppercase font-semibold lg:mb-3'>Hi there! I'M</p>
                    <h1 className="text-2xl lg:text-5xl font-bold mb-3">Asaduzzaman <span className='text-amber-500' >Asad</span></h1>
                    <p className='sub-title text-2xl font-semibold text-slate-400 mb-4'>Web Developer</p>
                    <p className='lg:text-lg font-medium lg:mb-12 mb-8 lg:tracking-wide text-justify tracking-normal'>Learning <span className='text-amber-500'>Back-End Web Development</span> passionate about creating interactive applications and experiences on the web.</p>
                    <div className='flex gap-3 lg:mb-5 mb-3'>
                        <FaGithub className='w-6 text-amber-500 h-6'></FaGithub>
                        <FaLinkedin className='w-6 text-amber-500 h-6'></FaLinkedin>
                        <FaInstagram className='w-6 text-amber-500 h-6'></FaInstagram>
                        <FaFacebook className='w-6 text-amber-500 h-6'></FaFacebook>
                    </div>
                    <button className="btn btn-sm btn-warning text-sky-100 font-semibold bg-amber-500 rounded-full lg:px-12 px-12 mb-4 mr-5 ">Get In Touch</button>
                    <button className="btn btn-sm btn-outline rounded btn-warning "> Download Resume <FcDownload className='ms-2 w-5 h-5 '></FcDownload></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;