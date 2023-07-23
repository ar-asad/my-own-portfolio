import React from 'react';
import face from '../../../images/banner/face.jpg';
import '../Home/Home.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FcDownload } from "react-icons/fc";

// // Import your resume PDF file
import ResumePDF from '../../../images/Resume of Asaduzzamn.pdf';

const Banner = () => {


    return (
        <div id='home' className="hero lg:min-h-screen lg:pt-12 pt-20 lg:w-full">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20  ">
                <img src={face} className="wavy-image max-w-sm rounded-lg lg:w-1/2 w-4/5 mask mask-squircle lg:mb-0 mb-6" alt='face' />
                <div className='lg:w-1/2 w-4/5 text-sky-100'>
                    <p className='lg:text-2xl text-base uppercase font-semibold lg:mb-3'>Hi there! I'M</p>
                    <h1 className="text-2xl lg:text-5xl font-bold mb-3">Asaduzzaman <span className='text-amber-500' >Asad</span></h1>
                    <p className='sub-title text-2xl font-semibold text-slate-400 mb-4'> Web Developer</p>
                    <p className='lg:text-lg font-medium lg:mb-12 mb-8 lg:tracking-wide text-justify tracking-normal lg:w-10/12'>Learning <span className='text-amber-500 '>Back-End Web Development</span> passionate about creating interactive applications and experiences on the web.</p>
                    <div className='flex gap-3 lg:mb-5 mb-3'>
                        <a
                            href='https://www.facebook.com/profile.php?id=100058188609342'
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaFacebook className='w-6 text-amber-500 h-6'></FaFacebook>
                        </a>
                        <a
                            href="https://github.com/ar-asad"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub className='w-6 text-amber-500 h-6'></FaGithub>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/asaduzzaman-asad-a39925275/' target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin className='w-6 text-amber-500 h-6'></FaLinkedin>
                        </a>
                        <FaInstagram className='w-6 text-amber-500 h-6' target="_blank"></FaInstagram>
                    </div>
                    <a href='#contact'>
                        <button className="btn btn-sm btn-warning text-sky-100 font-semibold bg-amber-500 rounded-full lg:px-12 px-12 mb-4 mr-5 ">Get In Touch</button></a>
                    <a download="" href={ResumePDF}>
                        <button className="btn btn-sm btn-outline rounded btn-warning "> Download Resume <FcDownload className='ms-2 w-5 h-5 '></FcDownload></button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;