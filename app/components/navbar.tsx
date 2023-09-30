import React from "react";
import "app/css/navbar.css";
import { Link } from "@remix-run/react";
import CGDLogo from "assets/icons/cgd-transparent.png";
import homeicon from "assets/icons/home-icon.svg";
import abouticon from "assets/icons/abtus-nav.svg";
import eventsicon from "assets/icons/event-icon.svg";
import sponsorsicon from "assets/icons/sponsor-icon.svg";
import ig from "assets/icons/IG.svg";
import fb from "assets/icons/facebook.svg";
import itch from "assets/icons/itch.svg";
import ln from "assets/icons/linked.svg";

const Navbar = () => {
  return (
    <div className="header">
      <div>
        <a href="/">
          <img
            src={CGDLogo}
            alt="Concordia-Game-Dev club logo"
            className="cgd-logo"
          />
        </a>
      </div>

      <div className="navbar">
        <Link to="/" className="nav">
          <img
            src={homeicon}
            alt="home icon that brings you back to gamedev main page"
            className="svg-icon"
          />
          <h3 className="home nav-item">Home</h3>
        </Link>
        <Link to="/about" className="nav">
          <img
            src={abouticon}
            alt="icon that brings you to gamedev about us page"
            className="svg-icon"
          />
          <h3 className="about nav-item">About</h3>
        </Link>
        <Link to="/events" className="nav">
          <img
            src={eventsicon}
            alt="icon that brings you to gamedev upcoming events page"
            className="svg-icon"
          />
          <h3 className="events nav-item">Events</h3>
        </Link>
        <Link to="/sponsor" className="nav">
          <img
            src={sponsorsicon}
            alt="icon that brings you to gamedev sponsor page"
            className="svg-icon"
          />
          <h3 className="sponsors nav-item">Sponsors</h3>
        </Link>
      </div>

      <div className="socials-menu">
        <a
          href="https://www.instagram.com/concordiagamedev/?hl=en"
          target="_blank"
          className="nav-social-icons ig-icon svg"
        >
          <img
            src={ig}
            alt="ig icon that brings you to game dev concordia instagram"
            className="menu-svg"
          ></img>
        </a>
        <a
          href="https://www.facebook.com/concordiagamedev/"
          target="_blank"
          className="nav-social-icons fb-icon svg"
        >
          <img
            src={fb}
            alt="ig icon that brings you to game dev concordia facebook"
            className="menu-svg"
          ></img>
        </a>
        <a
          href="https://concordiagamedev.itch.io/"
          target="_blank"
          className="nav-social-icons itch-icon svg"
        >
          <img
            src={itch}
            alt="ig icon that brings you to game dev concordia itch.io"
            className="menu-svg"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/company/concordia-game-development/?original_referer="
          target="_blank"
          className="nav-social-icons linked-icon svg"
        >
          <img
            src={ln}
            alt="ig icon that brings you to game dev concordia linkedin"
            className="menu-svg"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
