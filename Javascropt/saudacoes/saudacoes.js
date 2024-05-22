(function(){
const nomeUsuario = "Pablo"
const elemento = document.querySelector(".top-bar p")
/* elemento.textContent = `${elemento.textContent} ${nomeUsuario}!` */
/* elemento.textContent =+ nomeUsuario */
elemento.innerHTML += `<b> ${nomeUsuario}</b>`
})()