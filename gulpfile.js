const { src, dest } = require('gulp');

const copyCss = () => {
  src('./src/css/prog_play.css')
    .pipe(dest('./dist/css'));
}

const copyJavaScript = () => {
  src('./src/js/prog_play.js')
    .pipe(dest('./dist/js'));
}

const buildDist = async () => {
  copyCss();
  copyJavaScript();
}

const buildDemo = async () => {
  src('./dist/**/**')
    .pipe(dest('./demo/assets/'));
}

exports.dist = buildDist;
exports.demo = buildDemo;