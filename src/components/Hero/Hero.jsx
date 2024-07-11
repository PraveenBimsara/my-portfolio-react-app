import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="pic" />
      <h1><span>I'm Praveen Bimsara,</span> fullstack developer based in Sri Lanka.</h1>
      <p>
        I am a dedicated full-stack developer with a passion for creating dynamic and responsive web applications and mobile applications. My expertise spans both front-end and back-end development, allowing me to bring complete solutions to life from concept to deployment.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume"><a href="/Praveen Bimsara Resume(Software Engineer).pdf" target="_blank" rel="noopener noreferrer" alt=''>My Resume</a></div>
      </div>
    </div>
  );
};

export default Hero;
