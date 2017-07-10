const gulp = require('gulp');
const server = require('gulp-server-livereload');
const path = require('path');

gulp.task('webserver', function () {
    gulp.src(path.resolve(__dirname, '../src'))
        .pipe(server({
            livereload: true,
            open: true
        }));
});