const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sourcemaps = require('gulp-sourcemaps')
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename")

module.exports = function styles() {
  return gulp.src('src/sass/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(gulp.dest("build/css"))
    .pipe(postcss([
        autoprefixer(),
        csso()
    ]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('build/css'))
}
