const gulp = require('gulp')
const webp = require('gulp-webp');

module.exports = function createWebp() {
    return gulp.src('src/img/**/*.{jpg,png}')
        .pipe(webp({quality: 80}))
        .pipe(gulp.dest('build/img'))
}
