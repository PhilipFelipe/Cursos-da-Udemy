let play = document.getElementById('meuVideo')
let pause = document.getElementById('meuVideo')

function playVideo() {
    play.play()
}

function pauseVideo() {
    pause.pause()
}

const progressBar = document.getElementById('progress')
const timer = document.getElementById('timer')

function progressLoop() {
    setInterval(function(){
        progressBar.value = Math.round((meuVideo.currentTime / meuVideo.duration) * 100)
        timer.innerHTML = Math.round(meuVideo.currentTime) + ' segundos'
    })
}

progressLoop();