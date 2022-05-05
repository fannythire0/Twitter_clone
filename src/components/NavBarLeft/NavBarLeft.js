import React from "react";
import "./NavBarLeft.css";
import { FaTwitter } from "react-icons/fa";
import {
  BiHash,
  BiHomeCircle,
  BiMessageSquareDetail,
  BiBookmark,
} from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiFileList2Line, RiContactsFill } from "react-icons/ri";
import { CgMoreO, CgMoreAlt } from "react-icons/cg";

const NavBarLeft = () => {
 

  return (
    <div id="Left">
      <div id="TwitterBox">
        <FaTwitter id="TwitterLogo" />
      </div>
      <button id="box">
        <BiHomeCircle id="icon" />
        <p id="text-navbar-left">Accueil</p>
      </button>
      <button id="box">
        <BiHash id="icon" />
        <p id="text-navbar-left">Explorer</p>
      </button>
      <button id="box">
        <IoNotificationsOutline id="icon" />
        <p id="text-navbar-left">Notifications</p>
      </button>
      <button id="box">
        <BiMessageSquareDetail id="icon" />
        <p id="text-navbar-left">Messages</p>
      </button>
      <button id="box">
        <BiBookmark id="icon" />
        <p id="text-navbar-left">Favoris</p>
      </button>
      <button id="box">
        <RiFileList2Line id="icon" />
        <p id="text-navbar-left">Liste</p>
      </button>
      <button id="box">
        <RiContactsFill id="icon" />
        <p id="text-navbar-left" className="bold">Profile</p>
      </button>
      <button id="box">
        <CgMoreO id="icon" />
        <p id="text-navbar-left">Voir plus</p>
      </button>

      <button id="Tweet">Tweet</button>
      <div id="user">
        <img
          src="https://scontent.fcdg1-1.fna.fbcdn.net/v/t39.30808-6/269965514_1441261096267765_7112838138733038395_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Q1NyNgxnk8MAX87Xj8C&_nc_ht=scontent.fcdg1-1.fna&oh=00_AT9NoVwHR6q9SGQSYP2Vjo25HtuKeZJ0_u5XGCxlgfRBxg&oe=6275FCA6"
          alt=""
          id="user-img"
        />
        <div id="box-user-names">
          <p id="name">Fanny Thiré</p>
          <p id="user-name">@fannythire</p>
        </div>
        <CgMoreAlt id="cg" />
      </div>
    </div>
  );
};

export default NavBarLeft;
