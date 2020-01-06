import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  output: {
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs({
      include: [/node_modules/],
      namedExports: {
        'react': ['Children', 'Component', 'PropTypes', 'createElement'],
        'react-dom': ['render']
      }
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    })
  ],
};