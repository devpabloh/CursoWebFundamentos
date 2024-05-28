function sum(){
    const numbers = []
    for(let i = 0; i < arguments.length; i++){
        numbers.push(arguments[i])
    }
    console.log(numbers)
}

sum(1,2,3,4,5)