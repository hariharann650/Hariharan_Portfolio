import React from "react";
import "./Contact.css";
import theme from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import Particles from "../Animations/Parcicles";

const Contact = () => {
const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const message = formData.get("textarea").trim();

  // Basic validation
  if (!name || !email || !message) {
    alert("Please fill in all required fields: Name, Email, and Message.");
    return;
  }

  formData.append("access_key", "4371914d-2242-4662-900c-bef2d8316315");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    alert(res.message);
    event.target.reset(); // Clear form after successful submit
  } else {
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div id="contact" className="contact" style={{position:"relative"}}>
            <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -20,
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
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme} alt="theming" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am open to discussing potential positions and exploring how my
            skills and experience align with your organization's needs. Your
            message regarding job opportunities is welcomed and appreciated.
            Looking forward to connecting with you soon
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mailicon" />{" "}
              <p>hariharann650@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="callicon" />
              <p>8072114401</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location icon" />
              <p>Chennai</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="text" placeholder="Enter your E-mail" name="email" />
          <label htmlFor="textarea">Write your message here</label>
          <textarea
            name="textarea"
            row="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
