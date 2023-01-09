//Rest operator vai fazer o parametro passar todos os nomes, não apenas o primeiro
//usamos o rest operator da mesma forma, com 3 pontos

function MinhaLista(...numeros){
    console.log(numeros)
}

MinhaLista("Matheus", "Lucas", "João", "Guilherme");

MinhaLista(1, 2, 3, 4 ,5 );