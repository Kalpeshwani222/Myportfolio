import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import About from './About/About'
import Education from './Educations/Education'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'
import Error from './Error/Error'


const Home = () => {
  return (
    <>
     <Navbar/>
     <Header />
     <About />
     <Education />
     <Skills />
     <Projects />
     <Footer />
    </>
  )
}

export default Home
