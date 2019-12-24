import typeScript from 'rollup-plugin-typescript2';

export default {
    input: 'index.js',
    output: {
        format: 'iife',
        file: 'bundle.js'
    },
    plugins: [
        typeScript({ tsconfig: "tsconfig.json" })
    ]
};