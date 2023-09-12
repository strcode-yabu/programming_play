const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const compileScss = () => {
  src('./src/scss/prog_play.scss')
    .pipe(
      sass()
    )
    .pipe(dest('./dist/css'));
}

const copyJavaScript = () => {
  src('./src/js/prog_play.js')
    .pipe(dest('./dist/js'));
}

const buildDist = async () => {
  compileScss();
  copyJavaScript();
}

const buildDemo = async () => {
  src('./dist/**/**')
    .pipe(dest('./demo/assets/'));
}

exports.dist = buildDist;
exports.demo = buildDemo;