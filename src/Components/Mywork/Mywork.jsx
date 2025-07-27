import React, { useState } from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { mywork_data, newing } from "../../assets/mywork_data.js";
import arrow from "../../assets/arrow_icon.svg";
import PixelTransition from "../Animations/PixelTransition.jsx";
import Particles from "../Animations/Parcicles.jsx";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { mdiOpenInNew } from '@mdi/js';

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
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <PixelTransition
              firstContent={
                <img
                  src={work.w_img}
                  alt={`work-${index}`}
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
                    alignItems:'center'
                  }}
                >
                  <p className="VisitText"
                    style={{
                      fontWeight: 900,
                      fontSize: "2rem",
                      color: "#ffffff",
                      textAlign:'center',
                      display:'flex',
                      columnGap:"3px"
                    }}
                  >
                    Visit{" "}
           
               <Icon path={mdiOpenInNew} size={1.6} />
                      </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
            
          </a>
        ))}

        {newing.map((works, index) => (
          <a
            key={index}
            className="blocking"
            style={{ display: "none" }}
            href={works.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PixelTransition
              firstContent={
                <img
                  src={works.w_img}
                  alt={`new-${index}`}
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
                    style={{
                      fontWeight: 900,
                      fontSize: "2rem",
                      color: "#ffffff",
                    }}
                  >
                    View
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </a>
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
