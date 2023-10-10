import cgdpink from "assets/icons/cgd-transp-pink.png";
import "app/css/aboutus.css";
import type { MetaFunction } from "@remix-run/node";
import blob from "assets/pics/blob-aboutus.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "About | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
    { icon: "./favicon.ico" },
  ];
};

export default function DashboardAbout() {
  return (
    <div className="page">
      <div className="about-us-container">
        <h1 className="sm:text-8xl text-6xl pb-4">About Us</h1>
        <div className="aboutus-container flex flex-col md:flex-row justify-center items-center gap-20 px-20">
          <div className="aboutus-text font-bold my-10 text-lg pl-16">
            We are Concordia's gamedev community and we focus on the technical
            and development aspects of video games in all disciplines, such as,
            programming, art, game design, storytelling, sound engineering and
            more.
          </div>
          {/* <div className="blob"> */}
          <img
            src={blob}
            className="blob w-2/5"
            alt="about us blob that holds a picture of the staff team"
          />
          {/* </div> */}
        </div>
      </div>
      <div className="ourteam-container">
        <h2 className="ourteam sm:text-7xl text-5xl my-7">Meet Our Team</h2>
        <div className="staff-section"></div>
      </div>

      <div className="background h-full">
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
