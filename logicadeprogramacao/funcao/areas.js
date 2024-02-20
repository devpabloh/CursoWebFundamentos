function calcularAreaRetangulo(l, a){

    if(typeof l !== "number" || typeof a !== "number"){
        throw new Error ("calculadoraAreaTriangulo aceita dois parâmetros do tipo number")
    }
    return  l * a
}

