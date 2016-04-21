'use strict'; // eslint-disable-line strict
const args = require('yargs').argv;
const config = require('./gulp.config');
const del = require('del');
const gulp = require('gulp');
const karma = require('karma');
const $ = require('gulp-load-plugins')({lazy: true});
// const eslint = require('gulp-eslint');
// const debug = require('gulp-debug');
// const if = require('gulp-if');
// const nodemon = require('gulp-nodemon');
// const plumber = require('gulp-plumber');
// const print = require('gulp-print');
// const sassLint = require('gulp-sass-lint');
// const taskListing = require('gulp-task-listing');
// const watch = require('gulp-watch');

gulp.task('help', $.taskListing);

gulp.task('default', ['help']);

gulp.task('clean', done => {
  clean(config.build, done);
});

gulp.task('lint', ['lint-sass', 'lint-js']);

gulp.task('lint-js', () => {
  log('ESLinting...');

  return gulp
    .src(config.js.all)
    .pipe($.if(args.verbose, $.print()))
    .pipe($.eslint())
    .pipe($.eslint.format());
});

gulp.task('lint-sass', () => {
  log('SASSLinting...');

  let src = gulp.src(config.sass);

  if (args.watch) {
    src = src.pipe($.watch(config.sass)).pipe($.plumber());
  }

  return src
    .pipe($.sassLint({'config-file': './.sass-lint.yml'}))
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError());
});

gulp.task('serve', () => {
  $.nodemon({script: config.server});
});

gulp.task('test', ['lint'], done => {
  const server = new karma.Server({configFile: `${__dirname}/karma.conf.js`}, exitCode => {
    if (exitCode !== 0) {
      return done(`Karma: tests failed with code ${exitCode}`);
    }

    log('Karma: tests completed successfully');

    return done();
  });

  server.start();
});

/************************
*       FUNCTIONS       *
************************/

function clean(path, done) {
  del(path).then(paths => {
    log(`Cleaned: ${$.util.colors.yellow(path)}`);
    done();
  });
}

function log(msg) {
  if (typeof msg === 'object') {
    for (const item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.yellow(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.yellow(msg));
  }
}
