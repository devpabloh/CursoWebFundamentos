const arr = [1,2,3]
const obj = {
    nome: "Maria",
    idade: "28",
    email: "maria@server.com"
}

for(let prop in obj){
    console.log(`${prop}: ${obj[prop]}`)
}