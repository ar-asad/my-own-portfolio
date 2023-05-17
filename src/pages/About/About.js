import React from 'react';
import heroImg from '../../images/banner/hero.jpg';
import '../Home/Banner/Banner.css';

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
                        <p className="py-6 lg:text-lg font-medium mb-12 tracking-wide text-justify">Hello, My name is Asaduzzaman Asad. I'm always looking for new challenges and opportunities to grow my skills. I have a strong foundation in HTML, CSS, JavaScript, ReactJS, ExpressJS and MongoDB, and I'm always looking to learn more about emerging technologies. In my spare time, I enjoy designing and building personal projects. I believe that the key to success in this field is a willingness to constantly learn and adapt, and that's a mindset that I bring to every project I work on.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;