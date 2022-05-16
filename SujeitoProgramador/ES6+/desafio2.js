lista = [ 1,3,5,7,0,9];
ordenado = lista.sort();
console.log(ordenado);

lista2 = ordenado.splice(1, 5);
console.log(lista2);

lista3 = lista2.splice(0).reverse();
console.log(lista3);