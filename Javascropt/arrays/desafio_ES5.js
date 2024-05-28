function sum(){ 
    const numbers = []
    for(let i = 0; i < arguments.length; i++){
        numbers.push(arguments[i])
    }
    console.log(numbers)
}

/*sum(1,2,3,4,5) */



function avarege(){
    const soma = sum.apply(null, arguments);
    return soma / arguments.length;
}

console.log(avarege(1,2,3,4,5,6,7,8,9,10))