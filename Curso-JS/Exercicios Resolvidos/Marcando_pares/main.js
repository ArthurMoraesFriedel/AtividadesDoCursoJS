function Cont_and_mark(){
    var vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Loop para verificar números
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] % 2 ===0){
            saida.innerHTML += `👉 <mark>${vetor[i]}</mark> 👉`
        }else{
            saida.innerHTML += `${vetor[i]}`
        }
    }
    saida.innerHTML += `🏁`
}