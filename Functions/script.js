function Entrar(){
    var area = document.getElementById('area')
    var txt = prompt('Digite seu nome:')

    if(txt == '' || txt == null){
        alert('Campo não preenchido')
        area.innerHTML = 'Bem vindo'
    } else{
        area.innerHTML = 'Olá ' + txt
    }

}



function Entrar2(nome){
    var area = document.getElementById('area')
    var Sobrenome = prompt('Digite seu Sobrenome:')
    area.innerHTML = `Olá ${nome} ${Sobrenome}`
}