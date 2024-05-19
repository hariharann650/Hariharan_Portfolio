import React from 'react'
import './Mywork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork from '../../assets/mywork_data';
import arrow from '../../assets/arrow_icon.svg';
const Mywork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
    {mywork.map((work,index)=>{
      return <a href={work.link} target='_blank'> <img key={index} src={work.w_img} /></a>
    })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default Mywork