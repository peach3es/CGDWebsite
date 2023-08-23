import { Outlet } from "@remix-run/react";
import "app/css/navbar.css";

export default function Dashboard() {
  return (
    <div>
      <div className="navbar">
        <h2 className="home nav">Homepage</h2>
        <h2 className="about nav">About</h2>
        <h2 className="events nav">Events</h2>
        <h2 className="sponsors nav">Sponsors</h2>
      </div>

      <Outlet />
    </div>
  );
}
