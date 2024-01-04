function Calcular() {

    var convertNumero_1_comb_html = window.document.getElementById('Numero_1_comb_html')
    var convertNumero_2_comb_html = window.document.getElementById('Numero_2_comb_html')
    var editar_aqui = window.document.querySelector('div#editar_aqui')
    var Resposta_aqui = window.document.querySelector('div#Resposta_aqui')

    var Numero_1 = Number(convertNumero_1_comb_html.value)
    var Numero_2 = Number(convertNumero_2_comb_html.value)

    var c = 0


    for (var i = 1; i <= Numero_1; i++){
        for(var i2 = 1; i2 <= Numero_2; i2++, c++){
            editar_aqui.innerHTML += `${i} , ${i2}<p>`
        }
    }
    Resposta_aqui.innerHTML += `<strong>Quantidade de repetições ${c}</strong>`
}