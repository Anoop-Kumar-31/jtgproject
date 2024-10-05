import React, { useState, useEffect} from 'react';
import Skills from './Skills';
import Main from './Main';
import Projects from './Projects';
import Recommendations from './Recommendations';
import Contact from './Contact';
import Footer from './Footer';
import style from './Navbar.module.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const sections = ['Home', 'Skills', 'Education', 'Projects', 'Recommendations', 'Contacts'];
  const [activeSection, setActiveSection] = useState('home');
  const [theeshold, setTheeshold] = useState(0);
  useEffect(() => {
    const updateTheeshold = () => {
      setTheeshold(window.innerHeight * 0.3);
    };
    updateTheeshold();
    window.addEventListener('resize', updateTheeshold);
    return () => window.removeEventListener('resize', updateTheeshold);
  }, []);
  const handleScroll = () => {
    if (activeSection === 'skills') {
      return;
    }

    let foundSection = ' ';
    for (const section of sections) {
      const sectionElement = document.getElementById(section.toLowerCase());
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        if (window.scrollY >= sectionTop - theeshold && window.scrollY < sectionTop + sectionHeight - theeshold) {
          foundSection = section.toLowerCase();
          break;
        }
      }
    }
    setActiveSection(foundSection);
  };

  const handleLinkClick = (sectionId) => (event) => {
    event.preventDefault();
    window.removeEventListener('scroll', handleScroll);
  
    const sectionElement = document.getElementById(sectionId.toLowerCase());
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const adjustScroll = () => {
          const targetPosition = sectionElement.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        };
        requestAnimationFrame(adjustScroll);
        setActiveSection(sectionId.toLowerCase());
        window.addEventListener('scroll', handleScroll);
      }, 600);
    } else {
      setActiveSection(sectionId.toLowerCase());
      window.addEventListener('scroll', handleScroll);
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <>
      <nav className={style.nav}>
        <img src={logo} alt="logo" />
        <ul className={style.navLinks}>
          {sections.map((section) => (
            <li
              key={section}
              className={
                activeSection === section.toLowerCase() ||
                (section === 'Home' && activeSection === 'start')
                  ? style.active
                  : ''
              }
            >
              {
                section!='Skills' && section!='education'
                  ?
                    <a href={`#${section.toLowerCase()}`} onClick={handleLinkClick(section.toLowerCase())}>
                      {section}
                    </a>
                  :
                    <a onClick={handleLinkClick(section.toLowerCase())}>
                      {section}
                    </a>
              }
            </li>
          ))}
        </ul>
      </nav>
      {activeSection == 'skills' ? (
        <>
          <Skills />
          <Footer />
        </>
      ) : (
        <>
          <Main />
          <Projects />
          <Recommendations />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default Navbar;