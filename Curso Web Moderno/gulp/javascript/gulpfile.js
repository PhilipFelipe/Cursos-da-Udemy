const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify') 
const babel = require('gulp-babel')


function transformacaoJs(cb) {
    gulp.src("src/**/*.js")
        .pipe(babel({
            comments: false,
            presets: ["babel-preset-env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    cb()
}


exports.default = series(transformacaoJs)