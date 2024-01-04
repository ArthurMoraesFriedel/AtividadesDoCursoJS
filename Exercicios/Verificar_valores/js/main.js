function Calcular() {

    var convertNumero_1_html = window.document.getElementById('Numero_1_html')
    var convertNumero_2_html = window.document.getElementById('Numero_2_html')
    var editar_aqui = window.document.querySelector('div#editar_aqui')


    var Numero_1 = Number(convertNumero_1_html.value)
    var Numero_2 = Number(convertNumero_2_html.value)

    var c = 0


    for (var i = 1; i <= Numero_1; i++){
        for(var i2 = 1; i2 <= Numero_2; i2++, c++){
            editar_aqui.innerHTML += `${i} , ${i2}<p>`
        }
    }
    Resposta_aqui.innerHTML += `<strong>Quantidade de repetições ${c}</strong>`
}