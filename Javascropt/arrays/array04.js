let arr = [1,3,5,7,9]

arr.push(4, 5) // o método .push()serve para adicionar valores ao array, sendo eles colocados no final do array


teste = arr.unshift(12 ,6) // adiciona valores a array, só que em vez de ser no final como o método push, o unshift adiciona no inicio



let arr2 = arr.slice(1, 4) // faz um recorte da array, de acordo com os parametros que foi passado dentro do .slice()


let arr3 = arr.splice(2)
console.log(arr3)