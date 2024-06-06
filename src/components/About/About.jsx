import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} className="aboutpic" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Praveen De Silva, a passionate frontend developer
              specializing in web and mobile app development. With a strong
              foundation in HTML, CSS, and JavaScript, I create responsive,
              user-friendly interfaces that deliver seamless experiences across
              various devices and platforms. My expertise includes working with
              modern frameworks like React for web development, as well as
              Flutter for mobile apps. I am committed to writing clean,
              efficient code and continuously learning new technologies to keep
              my skills up to date. Let's build something amazing together!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width : '75%'}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width : '65%'}}/></div>
            <div className="about-skill"><p>Flutter</p><hr style={{width : '70%'}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width : '60%'}}/></div>
            <div className="about-skill"><p>Figma</p><hr style={{width : '80%'}}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
