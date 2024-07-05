import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../Css/Contact.css";
import profileImage from "../images/css.png"; // Replace with your actual profile image path

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message.");
            });

        e.target.reset();
    };

    return (
        <div className="contact-section">
            <div className="contact-left">
                <img src={profileImage} alt="Yash Patel" className="profile-image" />
            </div>
            <div className="contact-right">
                <h2 className="section-title">Connect with Me</h2>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <label>Name</label>
                    <input type="text" name="user_name" required />
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                    <label>Message</label>
                    <textarea name="message" required />
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
