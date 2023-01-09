const lista = ["Matheus", "Lucas", "Henrique", 15]


//mostra o indice do item entre parenteses
lista.indexOf("Henrique")

//Entre parenteses voce escolhe algo que vai ficar entre cada item
lista.join("-")


//Exclui o ultimo item da array
lista.pop()
//Exclui o primeiro item da array
lista.shift()

console.log(lista)

lista[1] = "Guilherme Sella"

console.log(lista)

//adiciona item na array
lista.push(20)

console.log(lista)


//Condição para saber se existe um item na lista
if(lista.indexOf(20) > -1){
    console.log("Esse número não está na lista!")
}