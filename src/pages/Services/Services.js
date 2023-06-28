import React from 'react';
import '../Home/Home/Home.css';
import { MdOutlineWeb } from "react-icons/md";
import { BsWebcam } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Services = () => {
    return (
        <div id='service' className='lg:w-10/12 lg:mx-auto lg:mt-16 pt-6 lg:px-0 px-8 text-sky-100'>
            <div className=' text-start'>
                <p data-aos="fade-left" className='mb-3 sub-title'>i provide</p>
                <h1 data-aos="fade-right" className="text-2xl lg:text-3xl font-semibold mb-3">SERVICES</h1>
            </div>
            <div className=' py-10 '>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1500"
                    className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>
                    <div className='text-start pb-20 pt-16 px-10 bg-cyan-900 shadow-lg shadow-amber-600  rounded'>
                        <p className='mb-6'><MdOutlineWeb className='w-16 h-16 text-amber-500'></MdOutlineWeb></p>
                        <h2 className='text-xl font-semibold mb-5'>Web Design</h2>
                        <p>Develop pixel perfect fully responsive websites with HTML and CSS from provided figma or photoshop design.</p>
                    </div>
                    <div className='text-start pb-20 pt-16 px-10 bg-cyan-900 shadow-lg shadow-amber-600  rounded'>
                        <p className='mb-6 flex'><FaAngleLeft className='w-16 h-16 text-amber-500'></FaAngleLeft><FaAngleRight className='w-16 h-16 text-amber-500'></FaAngleRight></p>
                        <h2 className='text-xl font-semibold mb-5'>Single-page
                            Application</h2>
                        <p>Develop fast and fully responsive single page React web apps with routing, authentication and many more.</p>
                    </div>
                    <div className='text-start pb-20 pt-16 px-10 bg-cyan-900 shadow-lg shadow-amber-600  rounded'>
                        <p className='mb-6'><BsWebcam className='w-16 h-16 text-amber-500'></BsWebcam></p>
                        <h2 className='text-xl font-semibold mb-5'>Full-stack
                            Web Application</h2>
                        <p>Develop a full stack web app using MongoDB, Express, React and NodeJS. With authentication and authorization, payment system, dashboard and many more.</p>
                    </div>

                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Services;