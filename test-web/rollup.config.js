import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

// TODO: look into https://github.com/rollup/rollup/issues/487#issuecomment-485660918

module.exports = {
  plugins: [
    injectProcessEnv({
      NODE_ENV: 'production'
    }),
    resolve({
      browser: true
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
      }
    })
  ],
};