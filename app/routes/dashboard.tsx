import { Outlet, Link } from "@remix-run/react";
import "app/css/navbar.css";
import "assets/fonts/fonts.css";
import CGDLogo from "assets/icons/cgd-transparent.png";

export default function Dashboard() {
  return (
    <div>
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
    </div>
  );
}
