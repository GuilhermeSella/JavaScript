//Constantes
var pi = Math.PI
console.log(pi)

//Numero de Euler
var e = Math.E
console.log(e)

//Raiz quadrada DE DOIS
console.log(Math.SQRT2)
//Raiz quadrada de 1 sobre 2
console.log(Math.SQRT1_2)




//MÉTODOS Arredondamento

var valor = -10;
//Math.abs retorna o valor absoluto 
console.log(Math.abs(valor))

//Math.ceil arredonda para cima
console.log(Math.ceil(9.3))

//Math.floor arredonda para baixo
console.log(Math.floor(5.8))

//Math.round arredondamento padrão
console.log(Math.round(5.6))



//Metodo potencia
var i = 10
console.log(Math.pow(i , 2))


//Metodo raiz quadrada
console.log(Math.sqrt(9))


//Metodo para gerar numero aleatorios
// Declaramos um número aleatorio entre 0 e 10 e arredondamos colocando o metodo dentro do metodo de arredondamento .round
console.log(Math.round(Math.random() * 10))
for(let i=0; i< 5; i++ ){
    document.write(Math.round(Math.random()*10)+ '<br>')
}


//Metodos para Seno Cosseno
var angulo = 45;
var seno = Math.sin(angulo * Math.PI/180);
var cosseno = Math.cos(angulo * Math.PI/180);

document.write(`
    Angulo: ${angulo}
    Seno: ${seno}
    Cosseno: ${cosseno}
`)


//Metodos max e mim
console.log('Minimo:' + Math.min(1,2,3,4));
console.log('Maximo:' + Math.max(1,2,3,4));