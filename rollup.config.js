module.exports = {
  entry: 'main.js',
  targets: [
    {dest: 'bundle.js', format: 'es'}
  ],
  plugins: [
    require('rollup-plugin-node-resolve')(),
    require('rollup-plugin-commonjs')()
  ]
};
