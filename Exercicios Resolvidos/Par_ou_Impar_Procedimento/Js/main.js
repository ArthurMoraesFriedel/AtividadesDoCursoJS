function Par_ou_impar(){
    // Obtém o valor do input
    let N1 = document.getElementById("N1").value

    // Converte a entrada para um número
    N1 = parseFloat(N1);

    //Verifica se é par ou ímpar
    if(N1%2 == 0){
        Res.innerHTML = `Par`
    } else{
        Res.innerHTML = `Ímpar`
    }
}