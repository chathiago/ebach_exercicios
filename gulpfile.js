const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

function compilaSass () {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function comprimeJavascript() {
    return gulp.src('./source/script/*')
    .pipe(uglify())
    .pipe(gulp.dest('./build/script'))
}

function comprimeImagem () {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

exports.default = function() {
    gulp.watch('./source/styles/main.scss', {ignoreInitial:false}, gulp.series(compilaSass))
    gulp.watch('./source/script/*', {ignoreInitial:false}, gulp.series(comprimeJavascript))
    gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(comprimeImagem))
}