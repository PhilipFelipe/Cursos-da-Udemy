const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function copiarHtml(cb) {
    return gulp.src('src/index.html')
            .pipe(gulp.dest('build'))
}

function transformacaoCss() {
    return gulp.src('src/sass/index.scss')
            .pipe(sass())
            .pipe(uglifycss({ "uglyComments":true }))
            .pipe(concat('estilo.min.css'))
            .pipe(gulp.dest('build/css'))
}

module.exports.default = series(transformacaoCss, copiarHtml)