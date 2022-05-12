const bnt = document.querySelector('#btn-ajax')
bnt.addEventListener('click', () => {
    const xml = new XMLHttpRequest()
    xml.open('GET','server.json', true)
    xml.onload = function (){
        const SUCCESS_STATUS_CODE = 200
        if (this.status == SUCCESS_STATUS_CODE) {
            const resposta = JSON.parse(this.responseText);
            document.querySelector('#titulo').innerHTML = resposta.titulo
            document.querySelector('#conteudo').innerHTML = resposta.conteudo
            resposta.lista.forEach(item => {
                let li = document.createElement('li')
                li.innerHTML = item.metodo
                document.querySelector('#lista').appendChild(li)
            });
        }
    }
    xml.send()
})