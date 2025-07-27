import React from 'react'
import './Footer.css';
import footer from '../../assets/footer-img.jpg';
import Particles from '../Animations/Parcicles';



const Footer = () => {
  return (
    <div className='footer' style={{position:'relative'}}>
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
          particleCount={100}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={130}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={footer} alt="footer" />
            <p> I'am Front-end and Back-end developer</p>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">@ 2025 HariHaran. All rights Reserved</p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With me</p>
          </div>
        </div>
    </div>
  )
}

export default Footer