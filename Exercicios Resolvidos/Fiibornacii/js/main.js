function Calcular() {

    var convertUltimo_Numero_html = window.document.getElementById('Ultimo_Numero_html')
    var editar_aqui = window.document.querySelector('div#editar_aqui')

    var Ultimo_Numero = Number(convertUltimo_Numero_html.value)

    // fibonacci = Antecessor + atual valor

    var Valor_antigo = 0
    editar_aqui.innerHTML += `${Valor_antigo} `

    var Valor_atual = 1
    editar_aqui.innerHTML += `${Valor_atual} `

    for (var i = 2; i < Ultimo_Numero; i++){
        var fibonacci = Valor_antigo + Valor_atual
        editar_aqui.innerHTML += `${fibonacci} `

        Valor_antigo = Valor_atual
        Valor_atual = fibonacci
    }
}