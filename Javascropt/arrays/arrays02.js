let arr = [1,4,5,6,3,4,5,10,11,12];
console.log(arr.indexOf(4)) // .indexof(valor que quer que encontre), esse método retorna o indice do primeiro valor encontrado no array

console.log(arr.lastIndexOf(4)) // .indexof(valor que quer que encontre), esse método retorna o indice do último valor encontrado no array

console.log(arr.includes(4)) // .includes(valor que quer saber se existe no array) é usado para saber se esse valor que foi colocado existe dentro do array, retornando true ou false para o valor

console.log(arr.find(function(el){ // .find, vai retorna o primeiro item conforme foi socilitado no return, se o mesmo não tiver no array, ele vai retornar undefined
    return el > 10
}))

console.log(arr.findIndex(function(el){ // .find, vai retorna o primeiro item conforme foi socilitado no return, se o mesmo não tiver no array, ele vai retornar -1
    return el > 10
}))

