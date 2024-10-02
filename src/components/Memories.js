import React from "react";
import ReactPlayer from "react-player";
import "../Css/Memories.css";
import T20wc from "../video/T20wc.mp4";
import T20wc1 from "../video/T20wc1.mp4";
import CollegeFriendsPhoto from "../images/friendsclg.jpg";
import OldFriendsPhoto from "../images/friendsold.jpeg";
import TravelPhoto1 from "../images/me1.jpeg";
import TravelPhoto2 from "../images/me2.jpeg";
import TravelPhoto3 from "../images/flower.jpg";
import Teamindia from "../images/teamindia.png";
import BlogPost1Image from "../images/blog.png";
import TravelPhoto4 from "../images/IITG.jpg";
import TravelPhoto5 from "../images/IITG1.jpg";
// import BlogPost2Image from "../images/blog.png";

const MemoriesAndFriends = () => {
  return (
    <div className="memories-friends-section">
      <div className="memories-section">
        <h1 className="title">
          <span className="orange">Moments</span>
          <span className="white"> of</span>
          <span className="green"> July</span>
        </h1>
        <div className="content-container">
          <div className="video-container">
            <div className="video-wrapper top-video">
              <ReactPlayer url={T20wc1} playing muted width="100%" height="100%" />
            </div>
            <div className="video-wrapper bottom-video">
              <ReactPlayer url={T20wc} playing muted width="100%" height="100%" />
            </div>
          </div>
          <div className="text-container">
            <p>
              <span className="orange">"Thanks for</span>
              <span className="white"> bringing the cup</span>
              <span className="green"> back home"</span>
            </p>
            <span className="credit-indian">
              Credits: Video from{" "}
              <a
                href="https://www.instagram.com/indiancricketteam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Indian Cricket Team
              </a>{" "}
              on Instagram.
            </span>
          </div>
        </div>
        <div className="india-content-container">
          <div className="india-text-container">
            <p>
              "If you know Team India just won the T20 World Cup recently, then
              you understand the sheer joy and pride that swept through the
              nation. That night felt like a mini Diwali, with fireworks
              lighting up the sky and celebrations erupting in every corner.
              Everyone's eyes were filled with tears of joy and happiness, as
              the triumph brought together millions of hearts, united in their
              love for cricket and their country. The victory was not just a
              sporting achievement but a moment of collective euphoria and
              national pride."
              <br />
              <span className="credit-indian">
                Credits: Image from{" "}
                <a
                  href="https://www.instagram.com/indiancricketteam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indian Cricket Team
                </a>{" "}
                on Instagram.
              </span>
            </p>
          </div>
          <div className="india-photo-container">
            <img src={Teamindia} alt="teamindia" className="friend-photo" />
          </div>
        </div>
      </div>

      <div className="friends-section">
        <h1 className="friends-title">
          <span className="f">F</span>
          <span className="r">R</span>
          <span className="i">I</span>
          <span className="e">E</span>
          <span className="n">N</span>
          <span className="d">D</span>
          <span className="s">S</span>
        </h1>
        <div className="friends-content-container">
          <div className="friends-text-container">
            <p>
              "College friends: the ones who laughed with us, cried with us, and
              made every moment unforgettable."
            </p>
          </div>
          <div className="friends-photo-container">
            <img
              src={CollegeFriendsPhoto}
              alt="College Friends"
              className="friend-photo"
            />
          </div>
        </div>

        <div className="friends-content-container">
          <div className="friends-photo-container">
            <img
              src={OldFriendsPhoto}
              alt="Old Friends"
              className="friend-photo"
            />
          </div>
          <div className="friends-text-container">
            <p>
              "We are three friends known as Rohit, Kohli, and Dhoni, and we
              also call ourselves the three Musketeers: one for all, all for
              one."
            </p>
          </div>
        </div>
        
        <div className="friends-content-container">
          <div className="friends-text-container">
            <p>
              "We are three friends known as Rohit, Kohli, and Dhoni, and we
              also call ourselves the three Musketeers: one for all, all for
              one."
            </p>
          </div>
          <div className="friends-photo-container">
            <img
              src={OldFriendsPhoto}
              alt="Old Friends"
              className="friend-photo"
            />
          </div>
        </div>
      </div>

      <div className="travel-section">
        <h1 className="travel-title">
          <span className="orange">Travel</span>
          <span className="white"> Memories</span>
        </h1>

        <div className="travel-content-container">
        <div className="travel-text-container">
            <p>
              "A visit to the Statue of Unity under a cloudy sky, with light
              rain adding a touch of magic to our adventure."
            </p>
            <p className="travel-details">
              <strong>Destination:</strong> Statue of Unity, Gujarat, India
              <br />
              <strong>Date:</strong> June 30, 2024
            </p>
          </div>
          <div className="travel-photo-container">
            <img
              src={TravelPhoto1}
              alt="Statue of Unity"
              className="travel-photo"
            />
            <img src={TravelPhoto2} alt="Cloudy Sky" className="travel-photo" />
          </div>
        </div>


        <div className="travel-content-container">
          <div className="travel-photo-container">
            <img
              src={TravelPhoto3}
              alt="Beautiful Flower"
              className="travel-photo"
            />
          </div>
          <div className="travel-text-container">
            <p>
              "A beautiful flower captured at the Narmada River in Bharuch
              during a visit with old school friends."
            </p>
            <p className="travel-details">
              <strong>Destination:</strong> Bharuch, Gujarat, India
              <br />
              <strong>Date:</strong> July 7, 2024
            </p>
          </div>
        </div>
        <div className="travel-content-container">
          <div className="travel-text-container">
            <p>
              "Our Team(Kappa) has secure 1st rank at FloodAIHackathon."
            </p>
            <p className="travel-details">
              <strong>Destination:</strong> IITGandhinagar, Gandhinagar, Gujarat, India
              <br />
              <strong>Date:</strong> August 25, 2024
            </p>
          </div>
          <div className="travel-photo-container">
            <img
              src={TravelPhoto4}
              alt="Statue of Unity"
              className="travel-photo"
            />
            <img src={TravelPhoto5} alt="Cloudy Sky" className="travel-photo" />
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog-section">
        <h1 className="blog-title">
          <span className="orange">My</span>
          <span className="white"> Blog</span>
        </h1>
        <div className="blog-content-container">
          <div className="blog-post">
            <div className="blog-post-image" style={{ backgroundImage: `url(${BlogPost1Image})` }}></div>
            <div className="blog-post-content">
              <h2 className="blog-post-title">Last Month Experience</h2>
              <p className="blog-post-excerpt">
                Blog website yet to be deoployed so wait...
              </p>
              <a href="/blog/post-1" className="read-more">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesAndFriends;
