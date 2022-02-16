function crescimento (altura1, txCrescAnual1, altura2, txCrescAnual2) {
        crianca1 = altura1 + txCrescAnual1
        crianca2 = altura2 + txCrescAnual2
        anos = 0;
            if (crianca1 < crianca2 || crianca2 < crianca1){
                do
                {
                    crianca1 += txCrescAnual1
                    crianca2 += txCrescAnual2
                    anos += 1

                } while (crianca1 <= crianca2 || crianca2 <= crianca1 && anos <= 20)
            }
console.log(anos, crianca1, crianca2)
            
}


crescimento(120, 2, 115, 6)