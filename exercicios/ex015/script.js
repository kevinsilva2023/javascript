function verificar() {
    var data = new Date()
    var ano =  data.getFullYear()
    var fano  = document.getElementById('txano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique e preencha os dados corretamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =  ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //res.innerHTML = `Idade calculada ${idade} anos` isso foi um teste

            if(fsex[0].checked) {
                genero = 'Homem'
                if(idade >=0 && idade<10) /* Criança */{
                    img.setAttribute('src', 'img/m_bebe.jpg')
                }
                else if(idade<=21) /* Jovem */{
                    img.setAttribute('src', 'img/m_jovem.jpg')
                }
                else if(idade<50) /* Adulto */{
                    img.setAttribute('src', 'img/m_adulto.jpg')
                }
                else /* Idoso */{
                    img.setAttribute('src', 'img/m_idoso.jpg')
                }
                
                
            }else if(fsex[1].checked)  {
                genero = 'Mulher'
                if(idade >=0 && idade<10) /* Criança */{
                    img.setAttribute('src', 'img/f_bebe.jpg')
                }
                else if(idade<=21) /* Jovem */{
                    img.setAttribute('src', 'img/f_jovem.jpg')
                }
                else if(idade<50) /* Adulto */{
                    img.setAttribute('src', 'img/f_adulto.jpg')
                }
                else /* Idoso */{
                    img.setAttribute('src', 'img/f_idosa.jpg')
                }
            }

            res.style.textAlign = 'center' //para deixar no centro
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
    }
} 