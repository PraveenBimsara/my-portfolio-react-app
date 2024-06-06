import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="pic" />
      <h1><span>I'm Praveen Bimsara,</span> frontend developer based in Sri Lanka.</h1>
      <p>
        I am a Passionate frontend developer with a keen eye for design and a commitment to crafting seamless user experiences.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume"><a href="/My CV.pdf" target="_blank" rel="noopener noreferrer" alt=''>Download CV</a></div>
      </div>
    </div>
  );
};

export default Hero;
