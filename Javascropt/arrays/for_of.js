const arr = [1,2,3]
const obj = {
    nome: "Maria",
    idade: "28",
    email: "maria@server.com"
}

for(let prop in obj){ // O loop for of é usado para acessar diretamente as propriedades/chave de uma Array
    console.log(`${prop}: ${obj[prop]}`)
}

for(n of arr){ // O loop for in é usado para acessar diretamente os valores de uma Array
    console.log(n)
}