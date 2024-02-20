function calcularAreaRetangulo(l, a){

    if(typeof l !== "number" || typeof a !== "number"){
        throw new Error ("calculadoraAreaTriangulo aceita dois parâmetros do tipo number")
    }
    return  l * a
}

function calcularAreaTriangulo(b, a){

    if(typeof l !== "number" || typeof a !== "number"){
        throw new Error ("calculadoraAreaTriangulo aceita dois parâmetros do tipo number")
    }
    return  b * a / 2
}

function calcularAreaCirculo (r) {
    if (typeof r !== "number"){
        throw new error ("calcularAreaCirculo: Raio precisa ser um número")
    }
    return Math.PI * r * r
}


