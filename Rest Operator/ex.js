//Rest operator
function cadastrar(usuarios, ...novosUsuarios){
    //Spread Operator
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];
    return console.log(totalUsuarios)
}

let users = ["Matheus", "Guilherme"];

let newUsers = cadastrar(users, "Henrique", "Lucas");