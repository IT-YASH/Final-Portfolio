import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../Css/Contact.css";
import profileImage from "../images/css.png"; // Replace with your actual profile image path

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "PatelYash@2003",
        "fh4r50d",
        form.current,
        "kC9HdTC99t25kimn1sP34"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
      <div className="contact-section">
      <h2 className="section-title">Connect with Me</h2>
      <div className="contact-left">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
      <div className="contact-right">
        <img src={profileImage} alt="Yash Patel" className="profile-image" />
      </div>
    </div>
  );
};

export default Contact;
