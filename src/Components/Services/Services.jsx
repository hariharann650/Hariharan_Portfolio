import React from 'react'
import './Services.css';
import theme from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme} alt="theme's" />
      </div>
      <div className="services-container">
      {Services_Data.map((services,index)=>{
        return <div key={index} className='services-format'>
          <h3>{services.s_no}</h3>
          <h2>{services.s_name}</h2>
          <p>{services.s_desc}</p>
          <div className="services-readmore">
            {/* <p>read more</p> */}
            {/* <img src={arrow} alt="arrow icon" /> */}
          </div>
        </div>
      })}
      </div>
    </div>
  )
}

export default Services