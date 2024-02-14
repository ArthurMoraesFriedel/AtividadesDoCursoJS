function Tabuada(){

  // Obter o número digitado pelo usuário
    var N1 = Number(window.document.getElementById("N1").value)

  // Referência à lista no HTML
    var Tab = document.getElementById('Tab')

  //Verificar se o valor digitado é valido
    if(N1=='null'){
      window.alert("Por favor insira um número")
      return
    }else{
      Calculo(N1, Tab)
    }
}

function Calculo(N1, Tab){
  
  //Limpar conteúdo
  Tab.innerHTML = ``

  for(var i = 1; i <=10; i++){

    //Criar um elemento para a tabela
    var item = document.createElement('option')
    item.text = `${N1} x ${i} = ${N1 * i}`
    item.value = `Tab${i}`
    //Adcionar elemento filho
    Tab.appendChild(item)
  }
}