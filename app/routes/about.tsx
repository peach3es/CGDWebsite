import cgdpink from "assets/icons/cgd-transp-pink.png";
import "app/css/aboutus.css";
import type { MetaFunction } from "@remix-run/node";
import blob from "assets/pics/blob-aboutus.svg";
import Profile from "app/components/profile";
import tuana from "assets/pictures/execs/tuana.png";
import charles from "assets/pictures/execs/charles_resized.png";
import benedict from "assets/pictures/execs/benedict_resized.png";
import hugo from "assets/pictures/execs/hugo_resized.png";
import maxx from "assets/pictures/execs/maxx_resized.png";
import peter from "assets/pictures/execs/peter_resized.png";
import nick from "assets/pictures/execs/nick_resized.png";
import carleen from "assets/pictures/execs/carleen_resized.png";

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
        <div className="aboutus-container flex flex-col md:flex-row justify-center items-center md:gap-20 gap-2 px-20">
          <div className="aboutus-text font-bold my-10 md:text-2xl text-lg">
            We are Concordia's gamedev community and we focus on the technical
            and development aspects of video games in all disciplines, such as,
            programming, art, game design, storytelling, sound engineering and
            more.
          </div>
          {/* <div className="blob"> */}
          <img
            src={blob}
            className="blob md:w-2/5 w-full"
            alt="about us blob that holds a picture of the staff team"
          />
          {/* </div> */}
        </div>
      </div>
      <div className="ourteam-container my-10">
        <h2 className="ourteam sm:text-7xl text-5xl my-7">Meet Our Team</h2>
        <div className="staff-section grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-8 md:px-20 px-10">
          <Profile name="Maxx Freund" position="President" image={maxx} />
          <Profile
            name="Charles Partous"
            position="VP Communication"
            image={charles}
          />
          <Profile name="Tuana Bicakci" position="Lead Artist" image={tuana} />
          <Profile name="Peter Tian" position="Lead Developer" image={peter} />
          <Profile name="Rev Nahabedian" position="Artist" image={tuana} />
          <Profile
            name="Charles Atanacio"
            position="Developer - Communication"
            image={benedict}
          />
          <Profile name="Hugo Morin" position="Developer" image={hugo} />
          <Profile
            name="Nicolas Boyer"
            position="Event Coordinator"
            image={nick}
          />
          <Profile
            name="Carleen Loney"
            position="Event Coordinator - Artist"
            image={carleen}
          />
        </div>
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
