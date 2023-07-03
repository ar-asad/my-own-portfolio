import React from 'react';
import './HomeProject.css';
import { Link } from 'react-router-dom';

const HomeProjectCard = ({ project }) => {
    const { mainImage, name, link, id } = project;

    return (
        <div className="card bg-black rounded-md shadow-xl shadow-amber-600">
            <figure><img src={mainImage} alt="project" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title mb-4">{name}</h2>
                <div className="card-actions justify-between">
                    <a href={link} target="_blank"
                        rel="noreferrer"><button className="btn-move flex items-center gap-1 bg-transparent border-none hover:text-amber-500 ease-in duration-150">View Live <span className='enty-move'>  &rarr;</span></button></a>
                    <Link to={`/project/${id}`}>
                        <button className="btn-move flex items-center gap-1 bg-transparent border-none hover:text-amber-500 ease-in duration-150">View Details <span className='enty-move'> &rarr;</span></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeProjectCard;