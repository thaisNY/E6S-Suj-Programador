let primeiros = [1,2,3];
let numeros = [...primeiros, 4,5,6];
console.log(numeros);

let pessoa = {
    nome : "Matheus",
    idade : 45,
    cargo : "Programador"
};
let novaPessoa = {
    ... pessoa,
    anoAtual : 2050,
    cidade : "Campo Grande"
};
console.log(novaPessoa);

//************************************************************************************* */
//SPRED DENTRO DE UMA FUNÇÃO
function cadastroPessoa (info){
    let novoDado = {
        ... info,
        cargo : "Programador",
        satatus : 1,
        codigo : 6547823233
    };
    return novoDado;
}
console.log(cadastroPessoa({nome : "Matheus", sobrenome: "Fraga", anoInicio : 2075}));
