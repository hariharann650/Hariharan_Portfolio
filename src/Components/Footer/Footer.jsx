import React from 'react'
import './Footer.css';
import footer from '../../assets/footer-img.jpg';



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={footer} alt="footer" />
            <p> I'am Front-end and Back-end developer</p>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">@ 2024 HariHaran. All rights Reserved</p>
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