import cgdpink from "assets/icons/cgd-transp-pink.png";
import "app/css/aboutus.css";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "About | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
  ];
};

export default function DashboardAbout() {
  return (
    <div className="page">
      <div className="about-us-container">
      <h1>About Us</h1>
      <div className="aboutus-text">
        We are Concordia's gamedev community and we focus on the technical and development aspects of video games in all disciplines, such as, programming, art, game design, storytelling, sound engineering and more.
      </div>
      </div>
      <div className="ourteam-container">
        <h2 className="ourteam">Meet Our Team</h2>
      </div>
      
      <div className="background">
        <span>
          <img
            src={cgdpink}
            alt="cgd pink alternate logo"
            className="floaties"
          />
        </span>
        <span>
          <img
            src={cgdpink}
            alt="cgd pink alternate logo"
            className="floaties"
          />
        </span>
        <span>
          <img
            src={cgdpink}
            alt="cgd pink alternate logo"
            className="floaties"
          />
        </span>
        <span>
          <img
            src={cgdpink}
            alt="cgd pink alternate logo"
            className="floaties"
          />
        </span>
        <span>
          <img
            src={cgdpink}
            alt="cgd pink alternate logo"
            className="floaties"
          />
        </span>
      </div>
    </div>
  );
}
