function Calcular() {

    var convertTabuada_desse = window.document.getElementById('Tabuada_desse_HTML')
    var convertQuero_ate = window.document.getElementById('Quero_ate_HTML')
    var editar_aqui = window.document.querySelector('div#editar_aqui')

    var Tabuada_desse = Number(convertTabuada_desse.value)
    var Quero_ate = Number(convertQuero_ate.value)
    var cont = 1
    var tabuada = Tabuada_desse * cont

    editar_aqui.innerHTML += `<p>${Tabuada_desse} x ${cont} = ${tabuada}</p>`

    while(cont<Quero_ate){
        cont = cont + 1
        tabuada = Tabuada_desse * cont
        editar_aqui.innerHTML += `<p>${Tabuada_desse} x ${cont} = ${tabuada}</p>`
        
    }

}

function VerificarFT(){
    var convertFatorial_desse = window.document.getElementById('Fatorial_desse_HTML')
    var editar_fatorial = window.document.querySelector('div#editar_fatorial')

    var Fatorial_desse = Number(convertFatorial_desse.value)
    
    var contador = Fatorial_desse
    var fatorial = 1

    fatorial = fatorial * contador

    editar_fatorial.innerHTML += `<p>O fatorial de <strong>${Fatorial_desse}</strong> é igual á</p>`

    while(contador>1){
        editar_fatorial.innerHTML += `${contador} x `
        contador = contador -1
        fatorial = fatorial * contador
    }
        editar_fatorial.innerHTML += `1 = `
    editar_fatorial.innerHTML += `<p><strong>${fatorial}</strong></p> `


}

function VerificarPrimo(){
    var convertN_desse = window.document.getElementById('N_desse_HTML')
    var editar_primo = window.document.querySelector('div#editar_primo')

    var numero = Number(convertN_desse.value)

    //Verifica se o número é par
    if (numero % 2 == 0){
        editar_primo.innerHTML = `${numero} é par então não pode ser primo`
    //Verifica se o número é impar
    } else if (numero % 2 != 0){
        var limite = Math.sqrt(numero)
        var divisores = 0

        //Contador até a raiz quadrada do numero para contar seus divisores e sabermos se o número é primo
            for (var i = 2; i <= limite; i++){
                if(numero % i === 0){
                divisores++
                }
            }
        if(divisores>0){
            editar_primo.innerHTML = `${numero} é ímpar mas não é primo`
        } else{
            editar_primo.innerHTML = `${numero} é primo`
        }
    }
}