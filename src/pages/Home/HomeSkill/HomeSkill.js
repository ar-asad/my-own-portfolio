import React from 'react';
import html from '../../../images/logos/html-5.png';
import css from '../../../images/logos/css-3.png';
import bootstrap from '../../../images/logos/bootstrap.png';
import javascript from '../../../images/logos/java-script.png';
import Reactjs from '../../../images/logos/physics.png';
import node from '../../../images/logos/icons8-nodejs-480.png';
import mongo from '../../../images/logos/database-storage.png';
import redux from '../../../images/logos/icons8-redux-480.png';
import firebase from '../../../images/logos/icons8-firebase-480.png';
import tailwind from '../../../images/logos/icons8-tailwind-css-480.png';
import figma from '../../../images/logos/icons8-figma-480.png';
import github from '../../../images/logos/github.png';
import vscode from '../../../images/logos/icons8-visual-studio-code-2019-480.png';
import netlify from '../../../images/logos/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-96.png';
import reactapi from '../../../images/logos/api.png';
import express from '../../../images/logos/icons8-express-js-512.png';
import '../Home/Home.css';

const HomeSkill = () => {
    return (
        <div className='lg:w-10/12 lg:mx-auto text-sky-100 lg:px-0 px-6 lg:py-10'>
            <div className=' text-start text-sky-100'>
                <p className='lg:mb-2 sub-title'>check out</p>
                <h1 className="text-2xl lg:text-3xl font-semibold mb-3">TECHNICAL SKILL</h1>
            </div>
            <div className='pt-6'>
                <div className='grid lg:grid-cols-6 grid-cols-4 gap-3 bg-white text-black lg:p-12 p-6 shadow-xl shadow-amber-600 rounded'>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={html} alt="logo" />
                        <p className=''>HTML</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={css} alt="logo" />
                        <p className=''>CSS</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-12 w-10' src={bootstrap} alt="logo" />
                        <p className=''>Bootstrap</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={tailwind} alt="logo" />
                        <p className=''>Tailwindcss</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-12 w-10' src={javascript} alt="logo" />
                        <p className=''>JavaScript</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={Reactjs} alt="logo" />
                        <p className=''>React</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={node} alt="logo" />
                        <p className=''>node js</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={express} alt="logo" />
                        <p className=''>Express js</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={mongo} alt="logo" />
                        <p className=''>Mongo DB</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={redux} alt="logo" />
                        <p className=''>Redux</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='w-14' src={firebase} alt="logo" />
                        <p className=''>Firebase</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={figma} alt="logo" />
                        <p className=''>Figma</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={github} alt="logo" />
                        <p className=''>GitHub</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={vscode} alt="logo" />
                        <p className=''>VS code</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={netlify} alt="logo" />
                        <p className=''>netlify</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img className='lg:w-14 w-10' src={reactapi} alt="logo" />
                        <p className=''>REST API</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSkill;