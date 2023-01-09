function CadastroPessoa(info){
    let NovosDados = {
        ...info,
        cargo:"programador",
        cidade:"São Paulo"
    }

    return NovosDados
}
console.log(
    CadastroPessoa({
        nome: "Matheus",
        sobrenome:"Fraga",
        idade: 28,
    }))