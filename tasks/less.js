const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

gulp.task('less', () = > {
    console.log(path.resolve(__dirname, '../src/less'));
return gulp.src(path.resolve(__dirname, '../src/less') + '/**/*.less')
    .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulp.watch(path.resolve(__dirname, '/src/less') + '/**/*', ['less']));
})
;