import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectInfo } from "../User";

function Projects() {
  return (
    <div >
        <div className='px-16 mx-20 my-10 font-mono'>
            <h1 className='text-4xl font-bold text-center text-white'><span className='text-primaryColor'>02.&nbsp;</span>Projects</h1>
            <div className='flex flex-wrap justify-around mt-10'>
            {
                ProjectInfo.map((project:any , index:number)=>{
                    return <ProjectCard key={index} title={project.title} desc={project.desc} image={project.image} live={project.live} link={project.link} github={project.github} technologies={project.technologies}/>
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Projects