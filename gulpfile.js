const gulp = require('gulp');
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

gulp.task('build', () => {
  return gulp.src('src/index.js')
    .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(gulp.dest('dist/'));
});