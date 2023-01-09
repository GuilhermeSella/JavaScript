const lista = [ 1,2,3,4,5]

// A operação .map() vai percorrer cada item da array, chamando uma funcção que vai retornar algo em cada um desses itens
const novaLista = lista.map(function(item, index){
    return item + index
})

console.log(novaLista)


//Reduce ira pegar o total e o proximo item seguindo a ordem e retornando a function 
const soma = lista.reduce(function(total, proximo){
    return total + proximo;
})
console.log(soma)



//Find chama uma function a qual ira verificar se o item existe na lista
const find = lista.find(function(item){
    return item == 2
})
console.log(find)

