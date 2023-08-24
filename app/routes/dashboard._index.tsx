import type { V2_MetaFunction } from "@remix-run/node";
import "app/css/homepage.css";
import "assets/fonts/fonts.css";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "| CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
  ];
};

export default function Index() {
  return (
    <div className="gameclub">
      <h1>Concordia Game Development</h1>
    </div>
  );
}
