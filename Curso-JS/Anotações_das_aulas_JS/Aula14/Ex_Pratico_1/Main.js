function Contar(){
  let n1 = Number(window.document.getElementById('n1').value)
  let n2 = Number(window.document.getElementById('n2').value)
  let Passo = Number(window.document.getElementById('Passo').value)
  let res = window.document.querySelector('div#res')

  if(n1 == ' ' || n2 == ' '){
    window.alert("Preencha os dados adequadamente")
    res.innerHTML = `Impossível contar`
    return
  }else if(Passo == '' || Passo == 0){
    window.alert("Valor do Passo não foi preenchido ou é inválido, será considerado valor de 1")
    Passo = 1
    Contando(n1, n2, Passo, res)
  }else{
    Contando(n1, n2, Passo, res)
  }
}

function Contando(n1, n2, Passo, res){
  res.innerHTML = `<p>Contando:</p>`

//Crescente
  if(n1<n2){
      res.innerHTML += `${n1}`
      var cont = n1

      while(cont<=n2){
          n1 = n1 + Passo
          if(n1>n2){
              res.innerHTML += `👉 🏁`
              break
          }

          res.innerHTML += `👉 ${n1}`
          cont = cont + Passo
      }
//Decrescente
  }else if(n1>n2){
      res.innerHTML += `${n1}`
      var cont = n2

      while(cont<=n1){
          n1 = n1 - Passo
          if(n2>n1){
              res.innerHTML += `👉 🏁`
              break
          }

          res.innerHTML += `👉 ${n1}`
      }
  }else{
      res.innerHTML += `🏁`
  }
}
