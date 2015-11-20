/**
 * Created by hxucaa on 2015-11-19.
 */

"use strict";

var gulp = require("gulp");
var runSequence = require("run-sequence");
var gutil = require("gulp-util");
var eslint = require("gulp-eslint");
var shell = require("gulp-shell");
var pkg    = require("./package.json");

gulp.task("default", function() {

});

gulp.task("lint", function () {
  // ESLint ignores files with "node_modules" paths.
  // So, it"s best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return gulp.src(["models/**/*.js", "index.js"])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint({
      warnFileIgnored: true,
      fix: true,
      useEslintrc: true
    }))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format());
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failAfterError last.
  //.pipe(eslint.failAfterError());
});

gulp.task("lint:w", ["lint"], function() {
  gulp.watch(["models/**/*.js", "index.js"], ["lint"]);
});

gulp.task("jsdoc", function() {
  return gulp
    .src(["models/**/*.js", "README.md"], {read: false})
    .pipe(shell(["./node_modules/.bin/jsdoc -t ./node_modules/ink-docstrap/template -c jsdoc.conf.json"]));
});

gulp.task("watch", ["lint:w"]);

gulp.task("help", function() {
  gutil.log("");
  gutil.log("--- " + pkg.name + " Version: "+ pkg.version + " ---");
  gutil.log("");
  gutil.log("See all of the available tasks:");
  gutil.log("$ gulp -T");
  gutil.log("");
  gutil.log("Run eslint:");
  gutil.log("$ gulp lint");
  gutil.log("");
  gutil.log("Watch lint");
  gutil.log("$ gulp lint:w");
  gutil.log("");
  gutil.log("Watch lint");
  gutil.log("$ gulp watch");
  gutil.log("");
  gutil.log("Generate jsdoc");
  gutil.log("$ gulp jsdoc");
  gutil.log("");
  gutil.log("--- " + pkg.name + " Version: "+ pkg.version + " ---");
  gutil.log("");
});