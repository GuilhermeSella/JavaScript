//localstorage salva localmente no seu navegador 
//sessionstorage funciona enquanto o navegador está aberto

var nome = ''

if( typeof localStorage.name == 'undefined') {
    localStorage.name = prompt('Digite seu nome:')
}

nome = localStorage.name;

document.getElementById('area').innerHTML = nome

localStorage.frutas = ["Maça", "Banana", "Pera"]

