function acao(){
    document.write('Executando... <br/>')
}

//Executa infinitamente primeiro parametro a função ou o que ele irá fazer, segundo o intervalo de tempo em milisegundos
//setInterval(acao, 1000);


// Executa apenas uma vez a ação após o tempo determinado em milisegundos
setTimeout(acao, 3000)


//Se atribuimos o setInterval a uma variavel conseguimos interromper ele atraves do console através do clearInterva(var) com a variavel em paranteses;

var y = setInterval(acao, 1000)
