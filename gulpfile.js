const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function styles(cb) {
  return src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('./theme/static/css/'));

  cb();
}

exports.default = function() {
  styles();
  watch('./src/sass/**/*.scss', styles);
};
