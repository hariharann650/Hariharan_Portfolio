import React from "react";
import "./About.css";
import hari from "../../assets/file.png";
import theme from "../../assets/theme_pattern.svg";
import Particles from "../Animations/Parcicles.jsx";
import CountUp from "../Animations/CountUp.jsx";

const About = () => {
  return (
    <div
      id="about"
      className="about"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "visible",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={350}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="theme" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={hari} alt="hari" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              <span>
                Hi, I'm Hariharan , a passionate React Front-End developer with
                interest in building robust and scalable web applications.
                Expertise in front-end and back-end development technologies, I
                thrive on tackling complex challenges and delivering elegant
                solutions that exceed expectations.
              </span>
            </p>
            <p>
              <span>
                On the front-end, I am skilled in HTML, CSS, and JavaScript,
                with additional expertise in modern libraries like React.
                Additionally, I have experience with database management systems
                such as MySQL
              </span>
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr className="percentage1" style={{ width: "95%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr className="percentage2" style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Vite + React Js</p>
              <hr className="percentage3" style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Dot Net</p>
              <hr className="percentage4" style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>My SQL</p>
              <hr className="percentage5" style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>
            <CountUp
              from={0}
              to={25}
              separator=","
              direction="up"
              duration={3}
              className="count-up-text countanimation"
            />
            +
          </h1>
          <p>Front-End Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>
            <CountUp
              from={0}
              to={4}
              separator=","
              direction="up"
              duration={3}
              className="count-up-text countanimation"
            />
            +
          </h1>
          <p>Dot Net Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>
              <CountUp
              from={0}
              to={12}
              separator=","
              direction="up"
              duration={3}
              className="count-up-text countanimation"
            />
            +
          </h1>
          <p>MySQL projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
