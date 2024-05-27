let arr = [1,2,3]
console.log(arr.reverse()) //usado para inverter o fluxo original do array, lembrar que ao usar ele o seu array original é modificado

let soma = arr.reduce(function(acumulador, atual){ // O método .reduce(function(acumulador, atual){}) é usado para reduzir os valores do array em apenas um número. É usado geralmete para fazer soma, tirar média.
    return acumulador + atual
})

console.log(soma)

const nomes = [ "Pablo", "Thiago", "Deyvson", "David"]
