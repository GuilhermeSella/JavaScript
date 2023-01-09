function somaContagem (...numeros){
    let total = numeros.reduce((total, proximo) => {
        let soma = total + proximo
        return soma
    } )
    console.log(total)
}
somaContagem(1, 2, 4, 5)


function tabuada(...numbers){
    let v = numbers.map((a, b) => {return a * 2} )
    console.log(v)
}
tabuada(1, 2, 3, 4, 5 , 6, 7, 8,9 )


function verificador(...n){
    let f = n.find((item) => {return item == 18} )
    console.log(f)
}

verificador(1, 2, 3, 4, 5 , 6, 7, 8, 18)
