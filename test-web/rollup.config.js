import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const env = process.env.NODE_ENV || 'production';

export default {
  output: {
    format: 'iife'
  },
  plugins: [
    resolve(),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    commonjs({
      include: [/node_modules/],
      namedExports: {
        'react': ['Children', 'Component', 'PropTypes', 'createElement'],
        'react-dom': ['render']
      }
    })
  ],
};