import React from 'react'
import Header from './Header'
import Mail from './Mail'
import Social from './Social'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

function HomePage() {
  return (
    <div>
        <Header/>
        <About/>
        <Projects/>
        <Skills/>  
        <Contact/> 
        <Mail/>
        
        <Social/>

        <Footer/>

           
    </div>
  )
}

export default HomePage