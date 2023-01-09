let nomes = ['Guilherme', 'Isaque', 'Ryan']

console.log(nomes.some( item => item == 'Ryan' ))
//True pois existe algum 'Ryan' na array nomes


console.log(nomes.every(nome => nome == 'Isaque'))
//False pois não são todos os nomes na array nomes que são 'Isaque', apenas um

let pessoas = [
    {nome: 'Guilherme', idade: 17},
    {nome: 'Isaque', idade:17},
    {nome: 'Ryan', idade: 17}
]

console.log(pessoas.every(idades => idades.idade < 18))