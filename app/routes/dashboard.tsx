import { Outlet, Link } from "@remix-run/react";
import "app/css/navbar.css";
import "assets/fonts/fonts.css";
import CGDLogo from "assets/icons/cgd-transparent.png";
import homeicon from "assets/icons/home-icon.svg";
import abouticon from "assets/icons/abtus-nav.svg";
import eventsicon from "assets/icons/event-icon.svg";
import sponsorsicon from "assets/icons/sponsor-icon.svg";
import ig from "assets/icons/IG.svg";
import fb from "assets/icons/facebook.svg";
import itch from "assets/icons/itch.svg";
import ln from "assets/icons/linked.svg";

export default function Dashboard() {
  return (
    <div className="header-footer">
      <div className="header">
        <a href="/dashboard">
          <img
            src={CGDLogo}
            alt="Concordia-Game-Dev club logo"
            className="cgd-logo"
          />
        </a>

        <div className="navbar">
          <Link to="/dashboard" className="nav">
            <img
              src={homeicon}
              alt="home icon that brings you back to gamedev main page"
              className="svg-icon"
            />
            <h3 className="home nav-item">Home</h3>
          </Link>
          <Link to="/dashboard/about" className="nav">
            <img
              src={abouticon}
              alt="icon that brings you to gamedev about us page"
              className="svg-icon"
            />
            <h3 className="about nav-item">About</h3>
          </Link>
          <Link to="/dashboard/events" className="nav">
            <img
              src={eventsicon}
              alt="icon that brings you to gamedev upcoming events page"
              className="svg-icon"
            />
            <h3 className="events nav-item">Events</h3>
          </Link>
          <Link to="/dashboard/sponsor" className="nav">
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

      <Outlet />
      <footer className="footer">
        <div className="info-wrapper-footer">
          <div className="info">Concordia Game Development</div>
          <a
            href="https://goo.gl/maps/22J1SBAVLrBCwsHk7"
            className="address"
            target="_blank"
          >
            2020 Mackay St, Unit P-105, Montreal, QC H3G 2M2
          </a>
        </div>
        <div className="contact-wrapper-footer">
          <div className="contact">Contact Us</div>
          <a href="mailto:game.development@concordia.ca" className="email">
            game.development@concordia.ca
          </a>
        </div>
        <div className="social-wrapper-footer">
          <div className="social">Follow</div>
          <a
            href="https://www.instagram.com/concordiagamedev/?hl=en"
            className="ig"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/concordiagamedev/"
            target="_blank"
            className="fb"
          >
            Facebook
          </a>
          <a
            href="https://concordiagamedev.itch.io/"
            className="itch"
            target="_blank"
          >
            Itch
          </a>
          <a
            href="https://www.linkedin.com/company/concordia-game-development/?original_referer="
            className="linked"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
