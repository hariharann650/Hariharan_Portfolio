import React, { useState } from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { mywork_data, newing } from "../../assets/mywork_data.js";
import arrow from "../../assets/arrow_icon.svg";
import PixelTransition from "../Animations/PixelTransition.jsx";
import Particles from "../Animations/Parcicles.jsx";
import Icon from "@mdi/react";
import { mdiOpenInNew, mdiGithub } from "@mdi/js";

const ProjectCard = ({ work }) => (
  <div className="project-card">
    <a href={work.link} target="_blank" rel="noopener noreferrer" className="project-img-wrap">
      <PixelTransition
        firstContent={
          <img
            src={work.w_img}
            alt={work.w_name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#111",
            }}
          >
            <p
              className="VisitText"
              style={{
                fontWeight: 900,
                fontSize: "2rem",
                color: "#ffffff",
                textAlign: "center",
                display: "flex",
                columnGap: "3px",
              }}
            >
              Visit <Icon path={mdiOpenInNew} size={1.6} />
            </p>
          </div>
        }
        gridSize={12}
        pixelColor="#ffffff"
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
    </a>
    <div className="project-info">
      <div className="project-info-top">
        <h3 className="project-name">{work.w_name}</h3>
        <a
          href={work.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-btn"
          title="View source code on GitHub"
        >
          <Icon path={mdiGithub} size={1} />
          Code
        </a>
      </div>
      <p className="project-desc">{work.w_desc}</p>
      <p className="project-tech">{work.w_tech}</p>
    </div>
  </div>
);

const Mywork = () => {
  const [naming, setNaming] = useState("Show More");

  return (
    <div id="work" className="mywork" style={{ position: "relative" }}>
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
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={130}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <ProjectCard key={index} work={work} />
        ))}

        {newing.map((works, index) => (
          <div key={index} className="blocking" style={{ display: "none" }}>
            <ProjectCard work={works} />
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          document.querySelectorAll(".blocking").forEach((element) => {
            if (element.style.display === "block") {
              element.style.display = "none";
              setNaming("Show More");
            } else {
              element.style.display = "block";
              setNaming("Show Less");
            }
          });
        }}
        className="mywork-showmore"
      >
        <p>{naming}</p>
        <img className="arrow-style" src={arrow} alt="" />
        <div className="background-btn"></div>
      </button>
    </div>
  );
};

export default Mywork;
