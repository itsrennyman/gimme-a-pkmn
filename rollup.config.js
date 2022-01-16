import { babel } from "@rollup/plugin-babel";

const packageJson = require("./package.json");

/* eslint-disable */
export default {
  input: "index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
    },
  ],
  plugins: [babel({ babelHelpers: "bundled", presets: ["@babel/preset-env"] })],
};
