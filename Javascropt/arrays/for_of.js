const arr = [1,2,3]
const obj = {
    nome: "Maria",
    idade: "28",
    email: "maria@server.com"
}

for(let prop in obj){ // usado para acessar diretamente as propriedades/chave de uma Array
    console.log(`${prop}: ${obj[prop]}`)
}

for(n of arr){ // usado para acessar diretamente os valores de uma Array
    console.log(n)
}