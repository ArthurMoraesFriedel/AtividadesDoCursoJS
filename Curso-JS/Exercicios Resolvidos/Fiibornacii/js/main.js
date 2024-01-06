//Adição da tecla enter em eventos
document.getElementById("Termo_final").addEventListener("keyup", function(Event) {
    if (Event.key === "Enter") {
        Fibonacci();
    }
})
function Fibonacci() {

    // Obtém o valor do input
    let Termo_final = document.getElementById("Termo_final").value

    // Converte a entrada para um número
    Termo_final = parseFloat(Termo_final);

    // fibonacci = Antecessor + atual valor

    let T0 = 0
    Res.innerHTML = `${T0} `

    let T1 = 1
    Res.innerHTML += `${T1} `

    for (var i = 2; i < Termo_final; i++){
        let T3 = T0 + T1
        Res.innerHTML += `${T3} `

        T0 = T1
        T1 = T3
    }
}