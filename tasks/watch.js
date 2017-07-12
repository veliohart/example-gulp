const gulp = require('gulp');
const path = require('path');
const watch = require('gulp-watch');
const less = require('./less');

gulp.task('watch', function () {
    // Endless stream mode
    console.log('watch', path.resolve(__dirname, '../src/less'));
    gulp.watch(path.resolve(__dirname, '../src/less') + '/**/*', ['less']);
});