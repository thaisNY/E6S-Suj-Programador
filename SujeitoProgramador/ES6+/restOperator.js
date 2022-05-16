function minhaLista(... nomes){
    console.log(nomes);
}
minhaLista("Matheus", "Lucas","João","Maria");

//sem rest operator
function minhaLista2(numeros){
    console.log(numeros);
}
minhaLista2 (1,2,3,4,5)
//1

//com rest operator
function minhaLista3(...numeros){
    console.log(numeros);
}
minhaLista3 (1,2,3,4,5)
//1 2 3 4 5

//************************************************************************************* */

function cadastrar(usuarios, ... novosUsuarios){
    let totalUsuarios = [
        ... usuarios,
        ...novosUsuarios
    ]
    return console.log(totalUsuarios);
};
let usuarios = ["Matheus", "João"];
let novosUsuarios =  cadastrar(usuarios, "Henrique" , "Lucas");