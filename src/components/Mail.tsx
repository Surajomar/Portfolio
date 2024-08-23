import React from 'react'

function Mail() {
  return (
    <div className='flex items-center text-textColor gap-7 fixed bottom-72 -right-44 rotate-90 m-2 '>

            <a href="mailto:surajomar56@gmail.com" className='font-mono hover:text-primaryColor tracking-widest hover:-translate-x-2 transition-all duration-300 ease-in-out'>surajomar56@gmail.com  </a>
            <hr className='border-[2px] text-textColor w-40 bg-textColor my-2 border-textColor rounded-full '  />
        
    </div>
  )
}

export default Mail