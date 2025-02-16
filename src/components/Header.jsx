import React from 'react';

const Header = () => {
  const resumeData = {
    name: "Akhilesh Vishwakarma",
    role: "Web Developer",
    roleDescription: "Passionate about creating dynamic and responsive web applications using modern technologies like React, Firebase, and JavaScript.",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akkii7030/",
        className: "icon-linkedin" 
      },
      {
        name: "GitHub",
        url: "https://github.com/akkii7030",
        className: "icon-github" 
      }
    ]
  };

  return (
    <>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am {resumeData.name}.</h1>
            <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}. {resumeData.roleDescription}</h3>
            <hr/>
            <ul className="social">
              {
                resumeData.socialLinks && resumeData.socialLinks.map(item => (
                  <li key={item.name}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <i className={item.className}></i>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
    </>
  );
};

export default Header;
