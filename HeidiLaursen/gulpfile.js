var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');

var files = ['index.js', 'lib/**/*.js', 'bin/**/*.js', 'gulpfile.js'];
var testFiles = ['./test/**/*test.js'];

gulp.task('lint:test', () => {
  return gulp.src(testFiles)
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

gulp.task('mocha', () => {
  return gulp.src(testFiles)
  .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('watchFiles', () => {
  gulp.watch(files, ['lint:nontest', 'lint:test']);
});

gulp.task('lint', ['lint:nontest', 'lint:test']);
gulp.task('default', ['lint', 'mocha']);
