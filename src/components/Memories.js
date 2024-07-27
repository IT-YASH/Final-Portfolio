import React from "react";
import ReactPlayer from "react-player";
import "../Css/Memories.css";
import T20wc from "../video/T20wc.mp4";
import T20wc1 from "../video/T20wc1.mp4";
import CollegeFriendsPhoto from "../images/friendsclg.jpg";
import OldFriendsPhoto from "../images/friendsold.jpeg";
import TravelPhoto1 from "../images/me1.jpeg";
import TravelPhoto2 from "../images/me2.jpeg";
import Teamindia from "../images/teamindia.png";

const MemoriesAndFriends = () => {
  return (
    <div className="memories-friends-section">
      {/* Memories Section */}
      <div className="memories-section">
        <h1 className="title">
          <span className="orange">Moments</span>
          <span className="white"> of</span>
          <span className="green"> July</span>
        </h1>
        <div className="content-container">
          <div className="video-container">
            <div className="video-wrapper top-video">
              <ReactPlayer
                url={T20wc1}
                playing
                muted
                width="100%"
                height="100%"
              />
            </div>
            <div className="video-wrapper bottom-video">
              <ReactPlayer
                url={T20wc}
                playing
                muted
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="text-container">
            <p>
              <span className="orange">"Thanks for</span>
              <span className="white"> bringing cup</span>
              <span className="green"> back to home"</span>
            </p>
          </div>
        </div>
        <div className="friends-content-container">
          <div className="friends-text-container">
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
            </p>
          </div>
          <div className="friends-photo-container">
            <img src={Teamindia} alt="teamindia" className="friend-photo" />
          </div>
        </div>
      </div>

      {/* Friends Section */}
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
        {/* College Friends */}
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
        {/* Old Friends */}
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
      </div>

      {/* Travel Section */}
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
          </div>
          <div className="travel-photo-container">
            <img src={TravelPhoto1} alt="photo1" className="travel-photo" />
            <img src={TravelPhoto2} alt="photo2" className="travel-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesAndFriends;
