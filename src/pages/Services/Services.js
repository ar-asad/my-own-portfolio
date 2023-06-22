import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

const Services = () => {
    return (
        <div className='bg-sky-950 '>
            <div className='pt-20 ps-10 text-start text-sky-100'>
                <p id='sub-title' className='mb-3 '>I PROVIDE</p>
                <h1 className="text-2xl lg:text-4xl font-semibold mb-3">SERVICES</h1>

                <div className=' py-10 w-5/6 mx-auto'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>
                        <div className='text-start py-20 px-10 bg-cyan-900  rounded'>
                            <h2 className='text-xl font-semibold mb-5'>Web Design</h2>
                            <p>Develop pixel perfect fully responsive websites with HTML and CSS from provided figma or photoshop design.</p>
                        </div>
                        <div className='text-start py-20 px-10 bg-cyan-900  rounded'>
                            <h2 className='text-xl font-semibold mb-5'>Web Design</h2>
                            <p>Develop pixel perfect fully responsive websites with HTML and CSS from provided figma or photoshop design.</p>
                        </div>
                        <div className='text-start py-20 px-10 bg-cyan-900  rounded'>
                            <h2 className='text-xl font-semibold mb-5'>Web Design</h2>
                            <p>Develop pixel perfect fully responsive websites with HTML and CSS from provided figma or photoshop design.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;