import React from 'react';
import { BsCheckCircle } from "react-icons/bs";

const Skills = () => {
    return (
        <div className='bg-sky-950 text-sky-100'>
            <div className='pt-32 ps-10 text-start '>
                <p id='sub-title' className='mb-3 '>Fundamental</p>
                <h1 className="text-2xl lg:text-4xl font-semibold mb-3">SKILL</h1>
            </div>
            <div className='flex justify-center py-10'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>
                    {/* Skill card___1 */}
                    <div className='text-start py-6 px-20 bg-cyan-900  rounded'>
                        <p className='text-xl font-semibold mb-5'>Frontend Skills</p>
                        <div className='flex gap-3 items-center mb-4 justify-start'>
                            <BsCheckCircle></BsCheckCircle>
                            <div>
                                <p className='text-xl font-semibold'>HTML</p>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center mb-4 justify-start'>
                            <BsCheckCircle></BsCheckCircle>
                            <div>
                                <p className='text-xl font-semibold'>CSS</p>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center mb-4 justify-start'>
                            <BsCheckCircle></BsCheckCircle>
                            <div>
                                <p className='text-xl font-semibold'>JAVASCRIPT</p>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center mb-4 justify-start'>
                            <BsCheckCircle></BsCheckCircle>
                            <div>
                                <p className='text-xl font-semibold'>REACT JS</p>
                                <p>Intermediate</p>
                            </div>
                        </div>
                    </div>

                    {/* Skill card___2 */}
                    <div className='text-start py-6 px-20 bg-cyan-900  rounded'>
                        <p className='text-xl font-semibold mb-5'>Backend Skills</p>
                        <div className='flex gap-3 items-center mb-4 jusstart'>
                            <BsCheckCircle></BsCheckCircle>
                            <div>
                                <p className='text-xl font-semibold'>Node JS</p>
                                <p>Basic</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center mb-4 justify-start'>
                            <BsCheckCircle></BsCheckCircle>
                            <div>
                                <p className='text-xl font-semibold'>Express JS</p>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center mb-4 justify-start'>
                            <BsCheckCircle></BsCheckCircle>
                            <div>
                                <p className='text-xl font-semibold'>MongoDB</p>
                                <p>Intermediate</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center py-6 px-20 bg-cyan-900  rounded'>
                        <p className='text-xl font-semibold mb-5'>Interested Skills</p>
                        <div className='flex gap-3 items-center mb-4 justify-center'>
                            <BsCheckCircle></BsCheckCircle>
                            <div>
                                <p className='text-xl font-semibold'>Redux</p>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center mb-4 justify-center'>
                            <BsCheckCircle></BsCheckCircle>
                            <div>
                                <p className='text-xl font-semibold'>Next JS</p>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center mb-4 justify-center'>
                            <BsCheckCircle></BsCheckCircle>
                            <div>
                                <p className='text-xl font-semibold'>TypeScript</p>
                                <p>Intermediate</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;