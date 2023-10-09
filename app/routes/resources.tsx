import cgdpink from "assets/icons/cgd-transp-pink.png";
import "app/css/resources.css";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Resources | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
  ];
};

export default function DashboardResources() {
  return (
    <div className="page">
      <h1 className="sm:text-8xl text-6xl align-middle pb-11">Resources</h1>
      <div className="resources-container">
        <div className="resources-text flex text-lg">
          <p>
            Find resources from previous presentations, workshops and more!!
          </p>
        </div>
        <div className="resources-text flex text-lg">
          <p>
            As a Concordia University student, learn how to add CGD to your
            Co-Curricular Record ✨
          </p>
          {/* Add link to click, which scrolls down to page to the co-curricular section */}
        </div>
        <div className="resources-downloadables">
          <h2 className="resource-subhead sm:text-7xl text-5xl">
            Past Presentations
          </h2>
        </div>
        <div className="resources-workshop-presenter-form">
          <h2 className="resource-subhead2 sm:text-7xl text-5xl">
            Want to give your own workshop?
          </h2>
        </div>
        <div className="resources-concordia-students"></div>
        <h2 className="resource-subhead sm:text-7xl text-5xl">Concordia</h2>
        <div className="resources-extra"></div>
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
