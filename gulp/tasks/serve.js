const gulp = require('gulp')

const styles = require('./styles')
const pug2html = require('./pug2html')
const script = require('./script')
const imagesCopy = require('./imagesCopy')
const svgSprite = require('./svgSprite')

const server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('src/sass/**/*.scss', gulp.series(styles, readyReload))
    gulp.watch('src/pages/blocks/**/*.scss', gulp.series(styles, readyReload))
    gulp.watch('src/pages/**/*.pug', gulp.series(pug2html, readyReload))
    gulp.watch('src/pages/blocks/**/*.js', gulp.series(script, readyReload))
    gulp.watch('src/js/**/*.js', gulp.series(script, readyReload))
    gulp.watch("src/img/**/*.*", gulp.series(imagesCopy, readyReload))
    gulp.watch("src/img/**/*.*", gulp.series(svgSprite, readyReload))

    return cb()
}
