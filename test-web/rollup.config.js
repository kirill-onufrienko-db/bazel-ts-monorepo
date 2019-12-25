// TODO: those plugins are obsolet
const node = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

// TODO: look into https://github.com/rollup/rollup/issues/487#issuecomment-485660918

module.exports = {
  plugins: [
    node({
      mainFields: ['browser', 'es2015', 'module', 'jsnext:main', 'main']
    }),
    commonjs()
  ],
};