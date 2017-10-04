'use strict';
var gulp       = require('gulp'),
    pug        = require('gulp-pug'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefix = require('gulp-autoprefixer'),
    connect    = require('gulp-connect'),
    concat     = require('gulp-concat'),
    cssmin     = require('gulp-cssmin'),
    rename     = require('gulp-rename'),
    minify     = require('gulp-minify'),
    swig       = require('gulp-swig'),
    data       = require('gulp-data'),
    fs         = require('fs'),
    sass       = require('gulp-sass');

//json and pug
gulp.task('json-data', function() {
  return gulp.src('./dev/source/pages/index.pug')
    .pipe(data(function(file) {
        return JSON.parse(
            fs.readFileSync('./language/en.json')
          );
    }))
    .pipe(pug())
    .pipe(gulp.dest('./dev/bundle'));
});

//sass
gulp.task('sass', function () {
    return gulp.src('./dev/source/style.sass')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dev/source/cosmetic'));
});

//css concat
gulp.task('css-concat', function() {
  return gulp.src(['./dev/source/cosmetic/*.css','./dev/source/cosmetic/**/*.css' ])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dev/bundle/style'));
});

//css minify
gulp.task('css-compress', function () {
    gulp.src('dev/bundle/style/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dev/bundle/style/'));
});

//js concat
gulp.task('js-concat', function() {
  return gulp.src('./dev/source/**/*.js')
    .pipe(concat('script.js', {newLine: ';'}))
    .pipe(gulp.dest('./dev/bundle/js'));
});

//js minify
gulp.task('js-compress', function() {
  gulp.src('dev/bundle/js/script.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('dev/bundle/js'))
});

//pug
gulp.task('pug', function () {
    return gulp.src('./dev/source/pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dev/bundle/'));
});

//connect server
gulp.task('connect', function() {
    connect.server({
        root: 'dev/bundle',
        port: 8888,
        livereload: true
    });
});

gulp.task('html-watch', function () {
    gulp.src('dev/bundle/*.html')
        .pipe(connect.reload());
});

gulp.task('css-watch', function () {
    gulp.src('dev/bundle/style/*.css')
        .pipe(connect.reload());
});

gulp.task('js-watch', function () {
    gulp.src('dev/bundle/*.js')
        .pipe(connect.reload());
});

gulp.task('default', ['connect','json-data'], function () {
    gulp.watch(['dev/source/**/*.sass', './dev/source/*.sass'], ['sass']);
    gulp.watch(['dev/source/**/*.pug','./language/*.json'], ['json-data']);
    gulp.watch(['dev/source/cosmetic/*.css', 'dev/source/cosmetic/**/*.css'], ['css-concat']);
    gulp.watch(['dev/source/**/*.js'], ['js-concat']);
    gulp.watch(['dev/bundle/js/*.js'], ['js-compress','js-watch']);
    gulp.watch(['dev/bundle/*.html'], ['html-watch']);
    gulp.watch(['dev/bundle/style/*.css'], ['css-compress','css-watch']);
});
