import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "| CGD" },
    { name: "description", content: "Welcome to Concordia Game Dev Club!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Concordia Game Development</h1>
    </div>
  );
}
