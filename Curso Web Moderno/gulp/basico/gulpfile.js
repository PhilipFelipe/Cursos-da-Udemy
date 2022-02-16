const gulp = require('gulp')
const {series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2!')
    return cb()
}

function copiar(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    gulp.src('pastaA/**/*.txt')
    /* .pipe(imagePelaMetade())
        .pipe(imageEmPretoEBranco())
        .pipe(transformacaoA())
        .pipe(transformacaoB())
        .pipe(transformacaoC()) */
        .pipe(gulp.dest('pastaB'))
    cb()
}

const fim = cb => {
    console.log('Fim!')
    return cb()
}

exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)