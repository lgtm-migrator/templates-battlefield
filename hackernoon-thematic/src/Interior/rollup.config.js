import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';

// import includePaths from "rollup-plugin-includepaths";

import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.js';
const OUTPUT_NAME = 'Example';

const extensions = [
  ".js",
  ".jsx"
];

//// packages that should be treated as external dependencies, not bundled
//// e.g. ['axios']
//const external = ["os", "atherdon-newsletter-js-layouts", "atherdon-newsletter-react"];

//const includePathOptions = {
//  include: {},
//  paths: ["src"],
//  external: [],
//  extensions
//};

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
};

const PLUGINS = [
  postcss({
    extract: true,
    plugins: [
      autoprefixer,
    ],
  }),
  babel({
    extensions,
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
  }),
  resolve({
    browser: true,
    resolveOnly: [
      /^(?!react$)/,
      /^(?!react-dom$)/,
      /^(?!prop-types)/,
    ],
  }),
  commonjs(),
  filesize(),
  //  includePaths(includePathOptions),
];

const EXTERNAL = [
  'react',
  'react-dom',
  'prop-types',
];

// https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: 'umd',
  },
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: ['cjs', 'es'].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
  plugins: PLUGINS,
}));

export default config;
