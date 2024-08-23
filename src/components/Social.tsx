import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'

function Social() {
  return (
    <div className='flex items-center text-textColor gap-7 fixed bottom-72 -left-40 rotate-90 m-3 '>

            <a href="https://www.linkedin.com/in/suraj-omar-532904212/" target='_blank' className='font-mono hover:text-primaryColor -rotate-90 hover:-translate-x-2 transition-all duration-300 ease-in-out'>
            <IconBrandLinkedin size={40} stroke={1.5}/>
            
            </a>

            <a href="https://leetcode.com/u/Suraj_omar_/" target='_blank' className='font-mono hover:text-primaryColor -rotate-90 hover:-translate-x-2 transition-all duration-300 ease-in-out'>
            <IconBrandLeetcode size={40} stroke={1.5}/>
            
            </a>

            <a href="https://github.com/suraj5621" target='_blank' className='font-mono hover:text-primaryColor -rotate-90 hover:-translate-x-2 transition-all duration-300 ease-in-out'>
            <IconBrandGithub size={40} stroke={1.5}/>
            
            </a>


            
            
            <hr className='border-[2px] text-textColor w-40 bg-textColor my-2 border-textColor rounded-full '  />
        
    </div>
  )
}

export default Social