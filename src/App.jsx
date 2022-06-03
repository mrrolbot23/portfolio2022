import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// import {ImSun} from 'react-icons/im'  //<----These icons are to switch between dark and light mode.
// import {FaRegMoon} from 'react-icons/fa'
import './index.css'

const App = () => {
  return (
    <>
      <div className='bg'/>
      {/* <button className='btn-primary btn theme-mode'><ImSun className='theme-icon'/> <FaRegMoon className='theme-icon' /></button> */}
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App