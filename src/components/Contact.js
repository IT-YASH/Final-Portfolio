import React, { useState } from "react";
import "../Css/Contact.css";
import Contactlogo from "../images/contact.jpg"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/xzzpeqwo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({
        user_name: '',
        user_email: '',
        message: ''
      });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-left">
        <img src={Contactlogo} className="profile-vector" alt="" srcSet="" /> 
      </div>
      <div className="contact-right">
        <h2 className="section-title">Connect with Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
