import cjs from '@rollup/plugin-commonjs';
import node from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'main.js',
  output: [
    {file: 'bundle.js', format: 'iife', sourcemap: true, inlineDynamicImports: true}
  ],
  plugins: [
    node({browser: true}),
    cjs(),
    production && terser()
  ],
};
