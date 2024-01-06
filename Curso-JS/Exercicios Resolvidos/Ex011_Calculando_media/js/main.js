//Adição da tecla enter em eventos
document.getElementById("Termo_final").addEventListener("keyup", function(Event) {
    if (Event.key === "Enter") {
        Fibonacci();
    }
})
function Media() {
    //Vai perguntar o nome
    var nome = window.prompt('Qual seu nome?')//Vai perguntar o nome
    //Primeiro número
    var n1 = window.prompt('Qual foi sua primeira nota?')
    //Segundo número
    var n2 = window.prompt('Além dessa, qual foi sua segunda nota')

    // Converte a entrada para um número
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)

    //Calcula média
    var media = (n1 + n2)/2

    //Aprovado ou reprovado
    if(7>=media){
        var Res = "Meus Parabéns"
    } else{
        var Res = "Estude um pouco mais!"
    }

    saida.innerHTML += `<p>Calculando média final de <mark>${nome}</mark>`
    saida.innerHTML += `<p>As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>`
    saida.innerHTML += `<p>A média final foi <mark>${media}</mark>`
    saida.innerHTML += `<p>A mensagem que temos é: <mark>${Res}</mark>`
}