import React from "react";
import "./Services.css";
import theme from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import Particles from "../Animations/Parcicles";
// import arrow from '../../assets/arrow_icon.svg';

const Services = () => {

  return (
    <div id="services" className="services" style={{ position: "relative" }}>
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
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme} alt="theme's" />
      </div>
      <div className="services-container">
        {Services_Data.map((services, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{services.s_no}</h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              <div className="services-readmore">
                {/* <p>read more</p> */}
                {/* <img src={arrow} alt="arrow icon" /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
