import typeScript from 'rollup-plugin-typescript2';
import html from 'rollup-plugin-bundle-html';

export default {
    input: 'index.js',
    output: {
        format: 'iife'
    },
    plugins: [
        typeScript({ tsconfig: "tsconfig.json" }),
        html({
            template: 'test-web/index.html',
            dest: "",
            filename: 'index.html',
            inject: 'head'
        })
    ]
};