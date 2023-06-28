import React from 'react';
import './HomeProject.css';

const HomeProjectCard = ({ project }) => {
    const { mainImage, name } = project;
    console.log(project)
    console.log(project.mainImage)
    console.log(name)
    return (
        <div className="card bg-black rounded-md shadow-xl shadow-amber-600">
            <figure><img src={mainImage} alt="project" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title mb-4">{name}</h2>
                <div className="card-actions justify-between">
                    <button className="btn-move flex items-center gap-1 bg-transparent border-none hover:text-amber-500 ease-in duration-150">View Live <span className='enty-move'>  &rarr;</span></button>
                    <button className="btn-move flex items-center gap-1 bg-transparent border-none hover:text-amber-500 ease-in duration-150">View Details <span className='enty-move'> &rarr;</span></button>
                </div>
            </div>
        </div>
    );
};

export default HomeProjectCard;