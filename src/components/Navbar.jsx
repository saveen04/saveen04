import React from 'react';

const Navbar = ({ activeSection }) => {
  return (
    <nav className="navbar">
      <div className="logo">Saveen Kumar</div>
      <ul className="navlist">
        <li><a href="#home" className={`navlink ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
        <li><a href="#about" className={`navlink ${activeSection === 'about' ? 'active' : ''}`}>About</a></li>
        <li><a href="#skills" className={`navlink ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a></li>
        <li><a href="#projects" className={`navlink ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
        <li><a href="#experience" className={`navlink ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a></li>
        <li><a href="#education" className={`navlink ${activeSection === 'education' ? 'active' : ''}`}>Education</a></li>
        <li><a href="#contact" className={`navlink ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
      </ul>
      <a href="/document/Saveen Kumar resume.pdf" className="btn" download>Resume</a>
    </nav>
  );
};

export default Navbar;
