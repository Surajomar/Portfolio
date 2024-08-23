import React from 'react'
import { SkillInfo } from '../User'
import ProjectCard from './ProjectCard'
import SkillCard from './SkillCard'

function Skills() {
  return (
    <div >
    <div className='px-16 mx-20 my-10 font-mono'>
        <h1 className='text-4xl font-bold text-center text-white'><span className='text-primaryColor'>03.&nbsp;</span>Skills</h1>
        <div className='flex flex-wrap justify-center mt-10'>
        {
            SkillInfo.map((skill : any , index:number)=>{
                return <SkillCard title={skill.title} skills={skill.skills} key={index}/>
            })
        }
        </div>
    </div>
</div>
  )
}

export default Skills