function Ordenar() {
    var numerosIDs = ["Numero1", "Numero2", "Numero3", "Numero4"];

    // Loop para verificar números
    for (let i = 0; i < 3; i++) {
        for(let j = i + 1; j < 4; j++){
            if (parseFloat(document.getElementById(numerosIDs[i]).value) > parseFloat(document.getElementById(numerosIDs[j]).value)) {
                var aux = numerosIDs[i];
                numerosIDs[i] = numerosIDs[j];
                numerosIDs[j] = aux;
            }
        }
    }

    // Exibir os resultados ordenados
    var saida = document.getElementById("saida");
    saida.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        saida.innerHTML += `${parseFloat(document.getElementById(numerosIDs[i]).value)} `;
    }
}
