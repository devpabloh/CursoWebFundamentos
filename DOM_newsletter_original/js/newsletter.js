
const txtEmail = document.getElementById("txtEmail")
const msg = document.getElementById("newsletterFeedback")

    function cadastrarEmail(){
        let email = txtEmail.value
        msg.innerHTML = `O email ${email} foi cadastrado com sucesso!`
    }