function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
   

    if(hora > 0 && hora  <= 12) {
        //BOM DIA!!
        img.src = 'img/manhã.jpg'
        document.body.style.background = '#8C9D6A'
    }else if(hora >= 13 && hora <= 17) {
        //BOA TARDE
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#F0C9B2'
    }else if(hora >= 18 && hora <= 23) {
        //BOA NOITE
        img.src = 'img/noite.jpg'
        document.body.style.background = '#A488BF'
    }
}