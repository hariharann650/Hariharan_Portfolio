import React, { useState,useRef } from 'react'
import './navbar.css';
// import logo from '../../assets/HARI BLACK LOGO.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_close from '../../assets/menu_close.svg';
import menu_open from '../../assets/menu_open.svg';
import logo1 from '../../assets/footer-img-Photoroom.png';
import videos from '../../../public/3.mp4';

const Navbar = () => {

  const [menu,setMenu]=  useState("home");
  const menuRef = useRef();

  const openMenu =()=>{
    menuRef.current.style.right ='0';
  }
  const closeMenu =()=>{
    menuRef.current.style.right ='-350px';
  }


  return (
    <div className='Nav-bar'>
          <video autoPlay loop muted playsInline className="back-video" id="responsiveVideo">

<source id="videoSource" className="source-vid" src={videos} type="video/mp4" />
</video>
      <img className='logo' src={logo1} alt="" />
      <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink  className='anchor-link' href='#home'><p onClick={()=>{setMenu('home')}}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/> : <></>}</li>
        <li><AnchorLink  className='anchor-link' offset={50} href='#about'><p onClick={()=>{setMenu('about')}}>About me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/> : <></>}</li>
        <li><AnchorLink  className='anchor-link' offset={50} href='#services'><p onClick={()=>{setMenu('services')}}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/> : <></>}</li>
        <li><AnchorLink  className='anchor-link' offset={50} href='#work'><p onClick={()=>{setMenu('portfolio')}}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} alt=''/> : <></>}</li>
        <li><AnchorLink  className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setMenu('contact')}}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/> : <></>}</li>
      </ul>
      <div className="connect-with-me"><AnchorLink  className='anchor-link' offset={50} href='#contact'>
        Connect With Me </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar