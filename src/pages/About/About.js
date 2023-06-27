import React from 'react';
import heroImg from '../../images/banner/hero.jpg';
import '../Home/Banner/Banner.css';
import { BiAward, BiBriefcaseAlt2, BiSupport } from "react-icons/bi";

const About = () => {
    return (
        <div id='about' className='lg:w-10/12 lg:mx-auto lg:px-0 px-8 lg:pt-0 pt-10'>
            <div className=' text-start text-sky-100'>
                <p id='sub-title' className='lg:mb-2'>some info</p>
                <h1 className="text-2xl lg:text-3xl font-semibold mb-3">ABOUT ME</h1>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 items-center">
                {/* <div className='flex justify-center pb-10 mt-0 '> */}
                {/* <div className="hero lg:min-h-screen w"> */}
                {/* <div className="hero-content flex-col lg:flex-row lg:gap-8 "> */}
                <div className='max-w-sm flex justify-end w-4/5'>
                    <img src={heroImg} className=" lg:w-10/12 text-end mask mask-squire rounded " alt='Asad' />
                </div>
                <div className='  text-sky-100 lg:w-11/12'>
                    <div className='grid lg:grid-cols-3 gap-5 lg:mt-10'>
                        <div className='text-center p-6  bg-cyan-900  rounded'>
                            <div className='flex justify-center'><BiAward className='w-6 text-amber-500 h-6 mb-2'></BiAward></div>
                            <p className='text-lg'>Experience</p>
                            <p className='text-slate-400'>2+ years</p>
                        </div>
                        <div className='text-center p-6 bg-cyan-900 rounded'>
                            <div className='flex justify-center'><BiBriefcaseAlt2 className='w-6 text-amber-500 h-6 mb-2'></BiBriefcaseAlt2></div>
                            <p className='text-lg'>Completed</p>
                            <p className='text-slate-400'>60+ projects</p>
                        </div>
                        <div className='text-center p-6 bg-cyan-900 rounded'>
                            <div className='flex justify-center'><BiSupport className='w-6 text-amber-500 h-6 mb-2'></BiSupport></div>
                            <p className='text-lg'>Support</p>
                            <p className='text-slate-400'>Online 24/7</p>
                        </div>
                    </div>
                    <p className="py-6 lg:text-lg font-medium mb-12 tracking-wide text-justify text-sky-100">Hello, My name is Asaduzzaman Asad. I'm always looking for new challenges and opportunities to grow my skills. I have a strong foundation in HTML, CSS, JavaScript, ReactJS, ExpressJS and MongoDB, and I'm always looking to learn more about emerging technologies. In my spare time, I enjoy designing and building personal projects. I believe that the key to success in this field is a willingness to constantly learn and adapt, and that's a mindset that I bring to every project I work on.</p>
                </div>
            </div>
        </div >
        // </div>
    );
};

export default About;