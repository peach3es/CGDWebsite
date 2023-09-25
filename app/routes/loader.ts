// src/routes/loader.ts

import { json, LoaderFunction } from "@remix-run/node";

export let loader: LoaderFunction = async ({ request }) => {
  // Your data loading logic goes here
  const data = { message: "Hello, World!" };

  return json(data);
};
