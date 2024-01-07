function Par_ou_Impar() {
    //Primeiro número
    var n1 = Number.parseFloat(window.prompt('Digite um número'))
    
    //Par ou impar
    if(n1%2===0){
        var Res = "PAR"
    } else{
        var Res = "ÍMPAR"
    }

   saida.innerHTML += `<p>O número ${n1} que foi digitado é <strong>${Res}!</strong>`
}