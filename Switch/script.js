//Switch





function Pedir(){

    x = Number(prompt("O que deseja?"))


    switch(x){
        case 0:
            alert('O X vale 0')
            break;
        case 1:
            alert('O x vale 1')
            break;
        case 2:
            alert('0 X vale 2')
            break;
        default:
            alert('Não vai pedir nada?')
            break;
    }

    if(x > 2){
        alert('Não temos essa opção')
    }
    
}