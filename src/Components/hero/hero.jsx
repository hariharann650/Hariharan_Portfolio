import React from 'react'
import './hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import hero from '../../assets/file.png';
import rotate from '../../assets/hari_rotate.png';
import hero1 from '../../assets/profile_img.svg';
import resume from '../../assets/Hariharan-JavaFull-Stack developer.pdf';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='editing-img' src={hero} alt="" />
      <h1><span>I'm Hariharan</span>, Java FullStack Developer</h1>
      <p>I am a Frontend Developer in Chennai, and Looking for Job Opporunity</p>
      <div className="hero-action">
      <AnchorLink  className='anchor-link' offset={50} href='#contact'>
        <div className="hero-connect">Connect With Me</div>
        </AnchorLink>
        <a className='anchorlink'  href="" download={resume}><div className="hero-resume">My resume</div></a>
      </div>
    </div>
  )
}

export default Hero