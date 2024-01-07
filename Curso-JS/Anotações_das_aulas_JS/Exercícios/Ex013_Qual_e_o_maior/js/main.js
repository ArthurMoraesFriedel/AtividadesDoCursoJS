function Maior_ou_Menor() {
    //Primeiro número
    var n1 = Number.parseFloat(window.prompt('Digite o Primeiro número'))
    
    //Segundo número
    var n2 = Number.parseFloat(window.prompt('Digite o segundo número'))
    
    //Maior ou menor
    if(n1>n2){
        saida.innerHTML += `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}!</strong>`
    } else{
        saida.innerHTML += `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}!</strong>`
    }
}