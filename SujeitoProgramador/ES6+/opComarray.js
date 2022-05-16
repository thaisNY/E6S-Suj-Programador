const lista = [1,2,3,4,5,6];
const novaLista = lista.map(
    function(item){
        return item * 5;
    }
);
console.log(novaLista);
//[ 5, 10, 15, 20, 25, 30 ]

const novaLista2 = lista.map(
    function(item, index){
        return item + index;
    }
)
console.log(novaLista2);
//[ 1, 3, 5, 7, 9, 11 ]

const soma = lista.reduce(
    function(total, proximo){
        return total + proximo;
    }
);

console.log(soma); //21

const find = lista.find(function(item){
        return item === 6;
    }
);
console.log(find); //6

const find2 = lista.find(function(item){
    return item === 66;
}
);
console.log(find2); //undefined
