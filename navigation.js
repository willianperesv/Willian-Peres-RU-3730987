//faz envio dos html's dos links para o index.html na div content

document.querySelectorAll('[text-i]').forEach(link => {
    const content= document.getElementById('content')
    
    link.onclick = function(e) {
        document.getElementById("default-content").style.display = "none";
        e.preventDefault()
        fetch(link.getAttribute('text-i'))
            .then(resp => resp.text())
            .then(html => content.innerHTML = html)
    }
})

// armazenamento de email, mensagem, telefone e mensagem do usuario
function Armazenar(){
       alert("Seus dados e mensagem foram armazenados, entrarei em contato")
   }

