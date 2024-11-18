const gulp = require('gulp')

module.exports = function imagesCopy() {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('build/img'))
}


