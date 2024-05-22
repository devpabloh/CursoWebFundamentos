/* Usando o .textcontent a gente não consegue adicionar tags ao que está sendo escrito */
/* Já usando o innerHTML, conseguimos adicionar tags ao HTML */



(function(){
    const nomeUsuario = 'Pablo'
   if (nomeUsuario){
    const topBarElemento = document.createElement("div")
    topBarElemento.className = "top-bar"
    topBarElemento.innerHTML = `<p> Olá, <b> ${nomeUsuario}</b></p>`
   }

})()