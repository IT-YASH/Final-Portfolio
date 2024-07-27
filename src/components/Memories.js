import React from "react";
import ReactPlayer from "react-player";
import "../Css/Memories.css";
import T20wc from "../video/T20wc.mp4";
import T20wc1 from "../video/T20wc1.mp4";
import CollegeFriendsPhoto from "../images/friendsclg.jpg"; 
import OldFriendsPhoto from "../images/friendsold.jpeg"; 

const MemoriesAndFriends = () => {
  return (
    <div className="memories-friends-section">
      {/* Memories Section */}
      <div className="memories-section">
        <h1 className="title">
          <span className="orange">Memories</span>
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
      </div>

      {/* Friends Section */}
      <div className="friends-section">
        <h1 className="friends-title">
          <span className="f">F</span>
          <span className="r1">R</span>
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
              "Friendship isn't about whom you have known the longest... It's about who came, and never left your side."
            </p>
          </div>
          <div className="friends-photo-container">
            <img src={CollegeFriendsPhoto} alt="College Friends" className="friend-photo" />
          </div>
        </div>
        {/* Old Friends */}
        <div className="friends-content-container">
          <div className="friends-photo-container">
            <img src={OldFriendsPhoto} alt="Old Friends" className="friend-photo" />
          </div>
          <div className="friends-text-container">
            <p>
              "Good friends are like stars. You don't always see them, but you know they're always there."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesAndFriends;