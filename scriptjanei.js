function registrar() {
    // Caminhos dos values 
    var net = window.document.getElementById('txtnet')
    var cad = window.document.getElementById('txtcad')
    var cel = window.document.getElementById('txtcel')
    var dive = window.document.getElementById('txtdive')
    var facul = window.document.getElementById('txtfacul')
    var fat = window.document.getElementById('txtfat')
    var dep = window.document.getElementById('txtdep')
    var res = window.document.getElementById('res')
    // values
    var t = Number(net.value)
    var d = Number(cad.value)
    var l = Number(cel.value)
    var v = Number(dive.value)
    var facu = Number(facul.value)
    var fa = Number(fat.value)
    var p = Number(dep.value)
    let txtvar = window.document.createElement('option')  

    if (t == 0 || d == 0 || l == 0 || v == 0 || facu == 0 || fa == 0 || p == 0) {
        window.alert('[ERRO] Campo Vazio!')
    }else {
        res.innerHTML = `Internet : R$${t},00 <br> 
        Academia: R$ ${d},00 <br>
        Celular: R$ ${l},00 <br>
        Diversão: R$${v},00 <br>
        Faculdade: R$ ${facu},00 <br>
        Fatura NU: R$ ${fa},00 <br>
        Depositar: R$${p},00 <br>`
        var soma = t + d + l + v + facu + fa + p
        res.innerHTML += `<br>  R$${soma},00`
    }
    
}