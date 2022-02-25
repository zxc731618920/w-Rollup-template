import babel from "rollup-plugin-babel"
import ts from "rollup-plugin-typescript2"
import { terser } from "rollup-plugin-terser"
import scss from 'rollup-plugin-scss';
import vue from 'rollup-plugin-vue';
import html from 'rollup-plugin-html';

export default {
    input: "./src/test.vue",

    output: {
        file: "./dist/index.js",
        format: "iife",
        globals: { vue: "Vue" },
    },

    plugins: [babel(), ts(), terser({ compress: true }), scss(), vue(), html()],
}

