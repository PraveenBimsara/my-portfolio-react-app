import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" className="pic" />
      <h1><span>I'm Praveen Bimsara,</span> frontend developer based in Sri Lanka.</h1>
      <p>
        I am a Passionate frontend developer with a keen eye for design and a commitment to crafting seamless user experiences.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
