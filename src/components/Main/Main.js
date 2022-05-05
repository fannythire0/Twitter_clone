import React, { useState } from "react";
import "./Main.css";
import { BiArrowBack } from "react-icons/bi";
import { CgCalendarDates, CgMoreAlt } from "react-icons/cg";
import Tweet from "../Tweets/Tweet";

const Main = () => {
  const [follow, setFollow] = useState(true);

  const FollowHandler = () => {
    if (follow === true) {
      setFollow(false);
    } else if (follow === false) {
      setFollow(true);
    }
  };

  return (
    <div id="Main">
      <div id="back-box-icon">
        <div id="box-user-name-back">
          <BiArrowBack id="back" />
          <div>
            <h1 id="matin">Fanny Thiré</h1>
            <p id="Tweets">6 Tweets</p>
          </div>
        </div>
      </div>
      <div id="header">
        <div id="user-img-box">
          <img
            id="user-img-g"
            src="https://scontent.fcdg1-1.fna.fbcdn.net/v/t39.30808-6/269965514_1441261096267765_7112838138733038395_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Q1NyNgxnk8MAX87Xj8C&_nc_ht=scontent.fcdg1-1.fna&oh=00_AT9NoVwHR6q9SGQSYP2Vjo25HtuKeZJ0_u5XGCxlgfRBxg&oe=6275FCA6"
            alt="avatar"
          />
        </div>
      </div>

      <div id="follow-box">
        <CgMoreAlt id="more" />
        <input
          type="button"
          value={follow ? "Follow" : "Following"}
          onClick={FollowHandler}
          className={follow === false ? "Following" : "Follow"}
        />
      </div>

      <div id="user-box">
        <h1 id="name-user">Fanny Thiré</h1>
        <p id="user-name-e">@fannythire</p>
        <p>👩‍💻 frontend</p>
        <p>👩‍🎨 UX/UI disigner</p> 
        <p>👩‍💼 Community manager</p>
        <br></br>
        <div id="dateBox">
          <CgCalendarDates />
          <p id="date">A rejoint Twitter en mai 2022</p>
        </div>
        <div id="following-followers">
          <span id="bold">{follow === false ? 151 : 150}</span>
          <p id="following">Following</p>
          <span id="bold">{follow === false ? 401 : 400}</span>
          <p id="followers">Followers</p>
        </div>
      </div>

      <div id="TweetsBox">
        <div id="boxs">
          <button id="tweets">Tweets</button>
          <div id="blue"></div>
        </div>
        <button id="btn">Retweets</button>
        <button id="btn">Media</button>
        <button id="btn">Likes</button>
      </div>

      <Tweet comment="501" like="1200" tweet="Hello React  " />
      <Tweet comment="2000" like="5000" tweet="10 ans dans la gymnastique 🤸‍♀️ 1 Médailles d'or 🏅, 3 d'argent 🥈 (dont une en nationale) et 1 bronze 🥉" />
      <Tweet comment="105" like="220" tweet="📖 Recherche alternance dans l'UX/UI design ou dans la communication digitale 📖" />
      <Tweet comment="654" like="825" tweet="Hâte d'avoir 15/20 en REACT 😂😂" /> 
      <Tweet comment="453" like="504" tweet="☀️ Vivement les vacances !!! ☀️" />
      <Tweet comment="210" like="403" tweet="🍙🍱🍣" />
    </div>
  );
};

export default Main;
