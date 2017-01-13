var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './style.scss';
var output = './';

gulp.task('sass', function() {
    return gulp.src(input)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output));
});

gulp.task('default', ['sass'], function() {
    gulp.watch(input, ['sass']);
})