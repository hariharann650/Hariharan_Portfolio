import React from 'react'
import './Footer.css';
import footer from '../../assets/footer-img.jpg';
import usericon from '../../assets/user_icon.svg';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={footer} alt="" />
            <p> I'am Front-end and Back-end developer</p>
          </div>
          {/* <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={usericon} alt="" />
              <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div> */}
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