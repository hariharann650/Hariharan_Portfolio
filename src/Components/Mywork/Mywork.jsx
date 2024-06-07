import React,{useState} from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { mywork_data, newing } from "../../assets/mywork_data.js";
import arrow from "../../assets/arrow_icon.svg";
// import newing from '../../assets/mywork_data';
const Mywork = () => {
  const [naming ,setNaming] = useState("Show More");
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a href={work.link} target="_blank " key={index}>
              {" "}
              <img key={index} src={work.w_img} />
            </a>
          );
        })}
        {newing.map((works, index) => {
          return (
            <a key={index}
              className="blocking"
              style={{ display: "none" }}
              href={works.link}
              target="_blank"
            >
              {" "}
              <img key={index} src={works.w_img} />
            </a>
          );
        })}
      </div>
      
      <button
        onClick={() => {
          document.querySelectorAll('.blocking').forEach(element =>{
           if( element.style.display == 'block') {
            element.style.display = 'none'
            // naming = 'Show More '
            setNaming("Show More")
           } 
           else{
            element.style.display = 'block';
            // naming = "Show Less"
            setNaming("Show Less")
           } 
            return element;
          })
        }}
        className="mywork-showmore"
      > 
        <p>{naming}</p>
        <img className="arrow-style" src={arrow} alt="" />
        <div className="background-btn">
        </div>
      </button>
    </div>
  );
};

export default Mywork;
