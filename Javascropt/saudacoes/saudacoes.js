/* Usando o .textcontent a gente não consegue adicionar tags ao que está sendo escrito */
/* Já usando o innerHTML, conseguimos adicionar tags ao HTML */



(function(){
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")
    if(nomeUsuario){
        elemento.innerHTML += `<b> ${nomeUsuario}</b>`
    }else{
        elemento.style.display = "none"
    }
/* elemento.textContent = `${elemento.textContent} ${nomeUsuario}!` */
/* elemento.textContent =+ nomeUsuario */ 

})()