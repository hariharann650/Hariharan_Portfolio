import React from "react";
import "./About.css";
import hari from '../../assets/file.png';
import theme from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <div id="about" className="about"> 
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={hari} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            Hi, I'm Hariharan , a passionate Java full stack developer with interest in building robust and scalable web applications. 
            With a solid foundation in Java programming and expertise in front-end and back-end development technologies, I thrive on tackling complex
             challenges and delivering elegant solutions that exceed expectations.
            </p>
            <p>
            On the front-end, I am skilled in HTML, CSS, and JavaScript, with additional expertise in modern libraries
             like React. Additionally, I have experience with database management systems such as MySQL
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML $ CSS</p><hr className="percentage1" style={{width:'80%'}} /></div>
            <div className="about-skill"><p>Javascript</p><hr className="percentage2" style={{width:'60%'}} /></div>
            <div className="about-skill"><p>React Js</p><hr className="percentage3" style={{width:'50%'}} /></div>
            <div className="about-skill"><p>Java</p><hr className="percentage4" style={{width:'60%'}} /></div>
            <div className="about-skill"><p>My Sql</p><hr className="percentage5" style={{width:'70%'}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Front-End Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>Java Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>MySQL projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
