import React from 'react';
import '../Home/Home/Home.css';

const Services = () => {
    return (
        <div id='service' className='lg:w-10/12 lg:mx-auto lg:mt-14 pt-6 lg:px-0 px-8 text-sky-100'>
            <div className=' text-start'>
                <p className='mb-3 sub-title'>i provide</p>
                <h1 className="text-2xl lg:text-3xl font-semibold mb-3">SERVICES</h1>
            </div>
            <div className=' py-10 '>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>
                    <div className='text-start py-20 px-10 bg-cyan-900 shadow-lg shadow-amber-600  rounded'>
                        <h2 className='text-xl font-semibold mb-5'>Web Design</h2>
                        <p>Develop pixel perfect fully responsive websites with HTML and CSS from provided figma or photoshop design.</p>
                    </div>
                    <div className='text-start py-20 px-10 bg-cyan-900 shadow-lg shadow-amber-600  rounded'>
                        <h2 className='text-xl font-semibold mb-5'>Single-page
                            Application</h2>
                        <p>Develop fast and fully responsive single page React web apps with routing, authentication and many more.</p>
                    </div>
                    <div className='text-start py-20 px-10 bg-cyan-900 shadow-lg shadow-amber-600  rounded'>
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