import { Outlet, Link } from "@remix-run/react";
import "app/css/navbar.css";
import "assets/fonts/fonts.css";
import CGDLogo from "assets/icons/cgd-transparent.png";

export default function Dashboard() {
  return (
    <div className="header-footer">
      <div className="header">
        <img
          src={CGDLogo}
          alt="Concordia-Game-Dev club logo"
          className="cgd-logo"
        />
        <div className="navbar">
          <Link to="/dashboard" className="nav">
            <h3 className="home nav-item">Home</h3>
          </Link>
          <Link to="/dashboard/about" className="nav">
            <h3 className="about nav-item">About</h3>
          </Link>
          <Link to="/dashboard/events" className="nav">
            <h3 className="events nav-item">Events</h3>
          </Link>
          <Link to="/dashboard/sponsor" className="nav">
            <h3 className="sponsors nav-item">Sponsors</h3>
          </Link>
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
