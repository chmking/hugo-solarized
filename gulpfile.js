var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./theme/static/css/'))
});

gulp.task('watch',function() {
    gulp.watch('./src/sass/**/*.scss',['styles']);
});

gulp.task('default', ['watch']);
