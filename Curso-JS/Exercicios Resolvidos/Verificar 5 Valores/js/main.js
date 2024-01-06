    /*Objetivo obter:
- Soma dos valores
- Média dos valores
- Quantos divisivéis por 5
- Quantos são nulos
- Qual a soma dos pares
*/
function Calcular() {
    //Variaveis
    var Nulos = 0
    var acumulador = 0
    var Soma = 0
    var Soma_pares = 0
    var Div5 = 0

    // Array para armazenar os IDs dos inputs
    const numerosIDs = ['Numero_1', 'Numero_2', 'Numero_3', 'Numero_4', 'Numero_5'];

    // Loop para verificar números
    for (let i = 0; i < numerosIDs.length; i++) {

        // Obtém o valor do input
        let numero = document.getElementById(numerosIDs[i]).value

        // Converte a entrada para um número
        numero = parseFloat(numero);

        // Verifica a Soma dos valores
        Soma += (numero)

        // Verifica se o número é nulo
        if ((numero)==0 || (numero) == null) {
            Nulos++
        }
        // Verifica se o número é divisível por 5
        if((numero) % 5 == 0 && (numero) != 0){
            Div5++
        }
        //Soma dos pares
        if ((numero) % 2 == 0 && (numero) != 0){
            Soma_pares += (numero)
        }
    }

    //Verifica a média dos valores
    var Media = Soma / 5

    editar_aqui.innerHTML += `<p>A soma dos valores é igual à: ${Soma}`
    editar_aqui.innerHTML += `<p>A media dos valores é igual à: ${Media}`
    editar_aqui.innerHTML += `<p>A quantidade de números nulos é: ${Nulos}`
    editar_aqui.innerHTML += `<p>Quantos são divisíveis por 5: ${Div5}`
    editar_aqui.innerHTML += `<p>A soma dos números pares é: ${Soma_pares}`
}