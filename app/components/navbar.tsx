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
  let Links = [
    {
      name: "Home",
      link: "/",
      img: homeicon,
      alt: "home icon that brings you back to gamedev main page",
    },
    {
      name: "About",
      link: "/about",
      img: abouticon,
      alt: "icon that brings you to gamedev about us page",
    },
    {
      name: "Events",
      link: "/events",
      img: eventsicon,
      alt: "icon that brings you to gamedev upcoming events page",
    },
    {
      name: "Sponsors",
      link: "/sponsor",
      img: sponsorsicon,
      alt: "icon that brings you to gamedev sponsor page",
    },
  ];

  return (
    <div className="navbar md-flex shadow-md w-full fixed top-0 left-0 justify-between">
      <div className="flex-shrink-0">
        <a href="/">
          <img
            src={CGDLogo}
            alt="Concordia-Game-Dev club logo"
            className="cgd-logo h-16 w-16 p-3 "
          />
        </a>
      </div>

      <div className="hidden sm:items-center sm:flex w-full justify-between">
        <ul className="page-links ">
          {Links.map((link) => (
            <li key={link.name}>
              <Link to={link.link} className="nav">
                <img src={link.img} alt={link.alt} className="svg-icon" />
                <h3 className="nav-item">{link.name}</h3>
              </Link>
            </li>
          ))}
        </ul>

        <div className="socials-menu flex-shrink-0 ">
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
    </div>
  );
};

export default Navbar;
