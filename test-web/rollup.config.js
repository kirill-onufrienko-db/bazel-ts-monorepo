const node = require('rollup-plugin-node-resolve');

module.exports = {
  plugins: [
    node({
      mainFields: ['browser', 'es2015', 'module', 'jsnext:main', 'main']
    }),
  ],
};