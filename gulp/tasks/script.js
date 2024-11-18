const { series, parallel, src, dest, watch, lastRun } = require('gulp');
const gulp = require("gulp");

const plumber = require('gulp-plumber')
const webpackStream = require('webpack-stream')
// const CircularDependencyPlugin = require('circular-dependency-plugin')
// const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")
// const eslint = require('gulp-eslint')

const mode = process.env.MODE || 'development';
const path = require('path');

module.exports = function script() {
    const entryList = {
        'bundle': `./src/js/entry.js`,
    };
    return src(`./src/js/entry.js`)
    .pipe(plumber())
    .pipe(webpackStream({
        mode: mode,
        entry: entryList,
        devtool: mode === 'development' ? 'inline-source-map' : false,
        output: {
          filename: '[name].js',
        },
        resolve: {
          alias: {
            Utils: path.resolve(__dirname, '../../src/js/utils/'),
          },
        },
        module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env']
            }
          }
        ]
        },
        // externals: {
        //   jquery: 'jQuery'
        // }
    }))
    .pipe(dest(`build/js`));
}
