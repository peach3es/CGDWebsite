import cgdpink from "assets/icons/cgd-transp-pink.png";
import type { MetaFunction } from "@remix-run/node";
import EventCard from "app/components/eventcard";
import ggj from "assets/icons/ggj2024.png";
import cgd2023 from "assets/icons/cgdfall2023.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Events | CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
  ];
};

export default function DashboardEvents() {
  return (
    <div className="page">
      <h1 className="sm:text-8xl text-6xl align-middle pb-11">Events</h1>
      <h2 className="ourteam sm:text-7xl text-5xl my-10 ml-80">Past Events</h2>

      <div className="flex flex-col gap-3 items-center w-full mb-10">
        <EventCard
          title="Global Game Jam 2024"
          date="Jan 26-28, 2024"
          description="Hosted by Concordia Game Dev Club, Global Game Jam is a 48-hour event where the theme is 'Make me Laugh'."
          image={ggj}
        />
        <EventCard
          title="CGD Jam Fall 2023"
          date="Nov 3-5, 2023"
          description="Organized by Concordia Game Dev, this 48 hour Jam event's theme was 'Space Between'."
          image={cgd2023}
        />
      </div>
      {/* <div className="background h-full">
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
      </div> */}
    </div>
  );
}
