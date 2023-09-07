import cgdpink from "assets/icons/cgd-transp-pink.png";
import sponsorpacklm from "assets/pics/light mode .png";
import cc2mtl from "assets/icons/cc2-mtl.png";
import cc2 from "assets/icons/cc2.png";
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
        <button className="button"></button>
        <div className="past-sponsors-container">
          <div className="sponsor-text">Special thanks to our previous sponsors!</div>
          <div className="past-sponsors">
            <img src={cc2mtl} alt="concordia gamedev club's past sponsor cyberconnect2 montreal logo" className="past-sponsor-img"/>
            <img src={cc2} alt="concordia gamedev club's past sponsor cyberconnect2 logo" className="past-sponsor-img" />
          </div>
        </div>
        
        
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
