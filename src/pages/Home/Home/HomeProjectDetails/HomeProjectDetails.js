import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HomeProjectDetails = () => {
    const [projectData, setProjectData] = useState({});
    const { name, description, link, overView = [], technology = [], gitHubFrontEnd, gitHubBackEnd, images = [] } = projectData;
    const { id } = useParams();

    // setLoading(true)
    useEffect(() => {
        fetch('/projectdata.json')
            .then(res => res.json())
            .then(data => {
                const projectDatas = data.find(value => value.id === id);
                setProjectData(projectDatas);
            })
    }, [id])

    return (
        <div className='lg:pt-32 pt-24 pb-10 lg:px-0 px-6 text-sky-100 lg:w-10/12 lg:mx-auto'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold mb-3'>{name}</h2>
                <p>{description}</p>
            </div>
            <div className='lg:w-11/12 lg:mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-16 text-sky-100 lg:pt-20 pt-10'>
                <div className='flex flex-col gap-10'>
                    {
                        images.map(img =>
                            <div key={img.id}>
                                <h3 className='text-xl mb-5 font-semibold'>{img.title} : </h3>
                                <figure>
                                    <img src={img.image} alt="project-img" />
                                </figure>
                            </div>
                        )
                    }
                </div>
                <div>
                    <a href={link} target="_blank"
                        rel="noreferrer"><button className="btn-move flex items-center gap-1 bg-transparent border-none hover:text-amber-500 ease-in duration-150 text-xl">Live Preview <span className='enty-move'>  &rarr;</span></button></a>
                    <div className='mt-6'>
                        <h3 className='text-xl font-bold  mb-4'>Project Overview:</h3>
                        <ul className='lg:text-lg'>
                            {overView.map((val, i) => (
                                <li className='mb-2' key={i}>{val}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-xl font-bold mb-4'>Technology Used:</h3>
                        <ul className='lg:text-lg'>
                            {technology.map((val, i) => (
                                <span className='mr-3' key={i}>{val}</span>
                            ))}
                        </ul>

                    </div>
                    <div className='flex justify-between mt-8'>
                        {gitHubFrontEnd && <a href={gitHubFrontEnd} target="_blank"
                            rel="noreferrer"><button className="btn-move flex items-center gap-1 bg-transparent border-none hover:text-amber-500 ease-in duration-150 text-xl">GitHub Frontend <span className='enty-move'>  &rarr;</span></button></a>}
                        {gitHubBackEnd && <a href={gitHubBackEnd} target="_blank"
                            rel="noreferrer"><button className="btn-move flex items-center gap-1 bg-transparent border-none hover:text-amber-500 ease-in duration-150 text-xl">GitHub Backend <span className='enty-move'>  &rarr;</span></button></a>}
                    </div>
                </div>
            </div>
        </div >
        // <h2>amr sonar bangla</h2>
    );
};

export default HomeProjectDetails;