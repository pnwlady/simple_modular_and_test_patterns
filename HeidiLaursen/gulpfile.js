'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var watch = require('gulp-watch');

var files = ['index.js', 'lib/**/*.js', 'bin/**/*.js', 'gulpfile.js'];

gulp.task('lint:test', () => {
  return gulp.src('./test/**/*test.js')
  .pipe(eslint({
    rules: {
      'indent': ['error', 2]
    },
    envs: [
      'es6',
      'mocha'
    ]
  }))
  .pipe(eslint.format());
});
gulp.task('lint:nontest', () => {
  return gulp.src(files)
  .pipe(eslint({
    rules: {
      'indent': ['error', 2]
    },
    envs: [
      'es6'
    ]
  }))
  .pipe(eslint.format());
});

gulp.task('watchFiles', () => {
  gulp.watch(files, ['lint:nontest', 'lint:test']);
});

gulp.task('lint', ['lint:nontest', 'lint:test']);
gulp.task('default', ['lint']);
