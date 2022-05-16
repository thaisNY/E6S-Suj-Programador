//1 forma
function adicionar(... numeros){
    let total = numeros.reduce(function(total, proximo){
        return total + proximo;
    });

    console.log(total);
};
adicionar(1,2,3,4,5);

//2 forma

function adicionar2(...numeros){
    let total = numeros.reduce((total, proximo) => {return total + proximo});

    console.log(total)
}
adicionar(10,20,10,5,5);

//3 forma

function adicionar3(...numeros){
    let total = numeros.reduce((total, proximo) => total + proximo);
    console.log(total);
}

adicionar(100,200,100,50,50);