import "./About.css";
import hari from "../../assets/Profile.png"
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
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={130}
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
                Hi, I'm Hariharan — a React Full Stack Developer with 1.5 years
                  of professional experience building robust and scalable web
                  applications. With expertise in both front-end and back-end
                  technologies, I thrive on solving real-world problems with clean,
                  efficient code.
              </span>
            </p>
            <p>
              <span>
                 Currently working at a Chennai-based startup, developing and
                  maintaining production web apps using React, Material UI, .NET
                  Web APIs, and MySQL. I enjoy turning complex requirements into
                  smooth user experiences.
              </span>
            </p>
          </div>
<div className="about-skills">

  {/* Row 1 */}
  <div className="about-skill">
    <div className="skill-header">
      <p>HTML & CSS</p>
    </div>
  </div>

  <div className="about-skill">
    <div className="skill-header">
      <p>Javascript</p>
    </div>
  </div>

  {/* Row 2 */}
  <div className="about-skill">
    <div className="skill-header">
      <p>Vite + React Js</p>
    </div>
  </div>

  <div className="about-skill">
    <div className="skill-header">
      <p>Dot Net</p>
    </div>
  </div>

  {/* Row 3 — single centered */}
  <div className="about-skill" style={{ flex: "0 0 calc(50% - 8px)" }}>
    <div className="skill-header">
      <p>My SQL</p>
    </div>
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
