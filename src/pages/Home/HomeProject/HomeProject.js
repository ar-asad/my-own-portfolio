import React, { useEffect, useState } from 'react';
import HomeProjectCard from '../Home/HomeProjectCard/HomeProjectCard';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import '../Home/Home.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const HomeProject = () => {
    const [projects, setProjects] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        fetch('/projectdata.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    const allProjects = projects;
    const frontEnd = projects.filter(project => project.category === 'frontend');
    const fullStact = projects.filter(project => project.category === 'fullstack');
    const backend = projects.filter(project => project.category === 'backend');

    return (
        <div id='project' className='lg:w-10/12 lg:mx-auto mt-16 lg:px-0 px-8'>
            <div className=' text-start text-sky-100 mb-10'>
                <p data-aos="fade-left" className='lg:mb-2 sub-title'>take a look my</p>
                <h1 data-aos="fade-right" className="text-2xl lg:text-3xl font-semibold mb-3">PROJECTS</h1>
            </div>
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='text-white flex lg:gap-6 text-lg lg:w-2/5 lg:mx-auto'>
                        <Tab className='px-2'>All <span className='px-2 border rounded-full'>{allProjects.length}</span></Tab>
                        <Tab className='px-2'>Frontend</Tab>
                        <Tab className='px-2'>Bankend</Tab>
                        <Tab className='px-2'>Fullstack</Tab>
                    </TabList>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1500"
                        className='mt-14'>
                        <TabPanel className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 '>
                            {
                                allProjects.map(project => <HomeProjectCard key={project.id} project={project}></HomeProjectCard>)
                            }
                        </TabPanel>
                        <TabPanel className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 '>
                            {
                                frontEnd.map(project => <HomeProjectCard key={project.id} project={project}></HomeProjectCard>)
                            }
                        </TabPanel>
                        <TabPanel className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 '>
                            {
                                backend.map(project => <HomeProjectCard key={project.id} project={project}></HomeProjectCard>)
                            }
                        </TabPanel>
                        <TabPanel className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 '>
                            {
                                fullStact.map(project => <HomeProjectCard key={project.id} project={project}></HomeProjectCard>)
                            }
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default HomeProject;