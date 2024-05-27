let arr = [1,2,3]
console.log(arr.reverse()) //usado para inverter o fluxo original do array, lembrar que ao usar ele o seu array original é modificado

let soma = arr.reduce(function(acumulador, atual){ // O método .reduce(function(acumulador, atual){}) é usado para reduzir os valores do array em apenas um número. É usado geralmete para fazer soma, tirar média.
    return acumulador + atual
})

console.log(soma)

/* 

nomesPorOrdem
nomes
nomeAtual
primeiraLetra

*/

const nomes = [ "Pablo", "Thiago", "Deyvson", "David"]


let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual){
    let primeiraLetra = nomeAtual[0]

    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++

    }else{
        nomes[primeiraLetra] = 1
    }
    return nomes

}, {})

console.log(nomesPorOrdem)

const numeros = [1,3,4,1,4,5,3,5,8,9]

const numerosUnicos = numeros.reduce(function(numerosUnicos, numerosAtuais){
    if(numerosUnicos.indexOf(numerosAtuais) < 0){
        numerosUnicos.push(numerosAtuais)
    }
    return numerosUnicos
}, [])

console.log(numerosUnicos)
