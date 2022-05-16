let pessoa = {
    nome : "Matheus" ,
    sobrenome : "Fraga",
    idade : 10 ,
    cargo : "Desenvolvedor"
}; 
console.log(pessoa);
let {nome} = pessoa;
console.log(nome);
let {idade, cargo} = pessoa;
console.log(idade, cargo);
let {cargo: programador} = pessoa; // não altera o obj
console.log(programador);
cargo = "Louco";
console.log(cargo);
console.log(pessoa);

//Array
//********************************************************************************** */

let nomes = ['Matheus', 'Fraga',10];
let {1 : segundoNome} = nomes;
console.log(segundoNome);
let {0: primeiroNome , 2 : idadee} = nomes;
console.log(primeiroNome, idadee);

let [nomee, sobrenome, idadeee] = nomes; //n precisa passar o array td poderia ter sido 2 elem
console.log(nomee);
console.log(sobrenome);
console.log(idadeee);