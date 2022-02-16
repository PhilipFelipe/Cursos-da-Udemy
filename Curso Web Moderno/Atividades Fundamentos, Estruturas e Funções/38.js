const min = Math.min(0)
const max = Math.max(100)

function minMax(min, max) {
    if (min > max) {
        let troca = min
        min = max
        max = troca
    }
    for (let i = min; i <= max; i++) {
        if(i % 2 != 0) {
            console.log(i)
        }
    }
}
minMax(3, 19)