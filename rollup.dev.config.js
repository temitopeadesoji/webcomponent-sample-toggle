import commonJs from "rollup-plugin-commonjs";
import image from 'rollup-plugin-img';
import json from 'rollup-plugin-json';
import litHtml from "rollup-plugin-lit-html";
import litSass from "@ponday/rollup-plugin-lit-sass";
import nodeResolve from "rollup-plugin-node-resolve";
import typescriptPlugin from "rollup-plugin-typescript";
import typescript from "typescript";

export default {
  input: "src/toggle-switch/toggle-switch.ts",
  output: {
    file: "./dist/toggle-switch.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    commonJs(),
    typescriptPlugin({
      exclude: "node_modules/**",
      importHelpers: true,
      typescript,
    })
  ],
  treeshake: true,
};
