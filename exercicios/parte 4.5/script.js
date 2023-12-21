 function contar() {
    var ini = document.getElementById('txin')
    var fim = document.getElementById('txfim') 
    var passo = document.getElementById('txpss')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar! \u{26A0}`
    }   
    else{
        res.innerHTML = 'Contando... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p  = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }
        // Contagem crescente
        if (i < f) {
            for(var c = i; c <=f; c += p){
                res.innerHTML += ` ${c} ,`
            }           
        } 
        // Contagem regressiva
        else {
            for (var c = i;c >= f; c -=p){
                res.innerHTML += ` ${c} ,`
            }
        }
       res.innerHTML += `\u{1F3C1}`
    }
}
//-------------------------------------------------------------

function tabuada(){
    let num = document.getElementById('txn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Digite um número!')
    }
    else {
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    } 
}