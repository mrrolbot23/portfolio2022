import React, {useState, useEffect} from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { createContext } from 'react';
import './index.css'

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <ThemeContext.Provider>
      <div id={theme}>
      <div className='bg'/>
      <Header themeSwitch={toggleTheme}/>
      <Navbar/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App