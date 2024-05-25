let arr1 = [1,2,3]
let arr2 = [5,6,7]


console.log(typeof arr1.toString()) // pega os valores que estão no array e transforma em string
console.log(arr2.join(' - '))// .join(aqui pode ser adicionado o parametro que você quer usar para ficar separando os valores do array), também muda os valores do array para string, só que a diferença dele para o .toString é que no .join podemos passar parametros

let arr3 = arr1.concat(arr2,2 ,4) // o .concat() é usado para juntar os arrays, você pode adicionar valores ao array simplesmente colocando eles, e se quiser também pode adicionar arrays usando a virgula

console.log(arr3)