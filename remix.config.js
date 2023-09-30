/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverModuleFormat: "esm",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};

// const baseConfig =
//   process.env.NODE_ENV === "production"
//     ? // when running the Netify CLI or building on Netlify, we want to use
//       {
//         server: "./server.js",
//         serverBuildPath: ".netlify/functions-internal/server.js",
//       }
//     : // otherwise support running remix dev, i.e. no custom server
//       undefined;

// /** @type {import('@remix-run/dev').AppConfig} */
// module.exports = {
//   ...baseConfig,
//   ignoredRouteFiles: ["**/.*"],
//   // See https://remix.run/docs/en/main/file-conventions/route-files-v2
//   future: {
//     v2_routeConvention: true,
//   },
//   // add your own custom config here if you want to.
//   //
//   // See https://remix.run/docs/en/v1/file-conventions/remix-config
// };
