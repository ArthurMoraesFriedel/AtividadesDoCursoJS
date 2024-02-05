function Tabuada(){
    // Obter o número digitado pelo usuário
    var N1 = Number(window.document.getElementById("N1").value)

    if(N1==NaN){
      window.alert("Insira um valor válido")
      break
    }

    // Referência à lista no HTML
    var tabuadaLista = document.getElementById("tabuadaLista")

    // Limpar a lista antes de adicionar novos itens
    tabuadaLista.innerHTML = ' '

  // Loop para calcular a tabuada e adicionar à lista
    for(var i=1; i<=10;i++){
        var resultado = N1 * i

        // Criar um item de lista e adicionar ao HTML
        var li = document.createElement("li")
        li.appendChild(document.createTextNode(N1 + "x" + i + "=" + resultado))
        tabuadaLista.appendChild(li)
    }
}