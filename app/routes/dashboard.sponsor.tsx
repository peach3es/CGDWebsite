import cgdpink from "assets/icons/cgd-transp-pink.png";
import sponsorpacklm from "assets/pics/light mode.png";
import "app/css/sponsors.css";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Sponsors | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
  ];
};

export default function DashboardSponsor() {
  return (
    <div className="page">
      <h1>Our Sponsors</h1>
      <div className="sponsor-container">
        <div className="sponsor-text">Thank you for our sponsors!</div>
        <div className="sponsor-text">
          We’ve set out to establish an environment which promotes interactions
          between club members and the game development industry at large. To
          better serve the CGD community, we have created a sponsorship package
          for any organization interested in helping us support the game
          developers of tomorrow!
        </div>
        <img src={sponsorpacklm} alt="concordia gamedev club sponsorship package overview light mode" className="sponsor-img" />
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
