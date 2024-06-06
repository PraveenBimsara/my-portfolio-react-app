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
              Hi, I'm Praveen Bimsara, a dedicated full-stack developer with a
              passion for building dynamic and responsive web and mobile
              applications. Proficient in both front-end and back-end
              technologies, I create user-friendly interfaces with HTML, CSS,
              JavaScript, and frameworks like React, while
              developing robust server-side solutions using Node.js. My expertise extends to mobile app development using React
              Native and Flutter. I manage databases such as MySQL and MongoDB. I love solving complex problems and continuously
              learning to stay at the forefront of technology. Let’s connect and
              create something amazing together!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Flutter</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>Figma</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
