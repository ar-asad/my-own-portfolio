import React from 'react';
import heroImg from '../../images/banner/hero.jpg';
import '../Home/Banner/Banner.css';
import { BiAward, BiBriefcaseAlt2, BiSupport } from "react-icons/bi";

const About = () => {
    return (
        <div className='bg-sky-950'>
            <div className='pt-20 ps-10  text-start text-sky-100'>
                <p id='sub-title' className='mb-3'>some info</p>
                <h1 className="text-2xl lg:text-4xl font-semibold mb-3">ABOUT ME</h1>
            </div>
            <div className="hero lg:min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse  lg:gap-20 ">
                    <img src={heroImg} className="max-w-sm  w-1/2  mask mask-squircle rounded " alt='Asad' />
                    <div className='w-1/2 text-sky-100'>
                        <div className='flex lg:gap-10 lg:justify-around'>
                            <div className='text-center p-6 bg-cyan-900  rounded'>
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
            </div>
        </div>
    );
};

export default About;