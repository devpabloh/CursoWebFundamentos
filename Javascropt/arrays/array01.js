const arr = [1, 5, 10, "olá", true]

let soNumeros = arr.some(function(el){
    return typeof el === "number"

})

console.log(soNumeros)