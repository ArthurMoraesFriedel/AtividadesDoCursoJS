//Criar Tabela
 var Tabela = []
//Obtendo a referência
var resultado = window.document.getElementById('resultado')
//RefeRência à lista
var Tab = document.getElementById('Tab')
//Obter número digitado
var inputN = window.document.getElementById('N')

//Validar se o número é valido
function ValidarDados(){

    N = Number(inputN.value)

    if(N === '' || isNaN(N)){
        window.alert("Verifique o valor e tente novamente")

    }else if(N >100 || N < 1){
        window.alert("Apenas valores entre 1 e 100 são válidos")

    }else if(!Tabela.includes(N)){
        AdicionarTabela(N, Tab, resultado)

    }else{
       window.alert("Este número já consta na lista")
    }

    //Limpar valor e definir foco
    inputN.value = ''
    inputN.focus()
}

function AdicionarTabela(N, Tab, resultado){

    //Criar um elemento para a tabela
    var item = document.createElement('option')
    item.text = `Valor ${N} foi adicionado`
    item.value = `Tab${N}`

    //Adcionar elemento filho
    Tab.appendChild(item)

    //Adicionar elemento a tabela
    Tabela.push(N)

    console.log(Tabela)

    //Apaga resultado anterior ao adicionar novos valores
    resultado.innerHTML = ''
    return
}

function Finalizar(){

    //Validar se a tabela esta preenchida
    if(Tabela.length == ''){
        window.alert("Adicione Valores antes de finalizar")

    }else{
        Calcular(resultado)
    }
}

function Calcular(resultado){

    //Organiza em ordem crescente
    Tabela.sort()

    //Quantidade de números cadastrados
    resultado.innerHTML = `<p>Ao todo, temos ${Tabela.length} números cadastrados.`

    //Maior valor informado
    var an = Tabela.length
    resultado.innerHTML += `<p>O maior valor informado foi ${Tabela[an-1]}.`

    //Menor Valor informado
    resultado.innerHTML += `<p>O menor valor informado foi ${Tabela[0]}.`

    //Soma de todos os valores
    let s = 0
    for(let i = 0; i<Tabela.length; i++){
        s += Tabela[i]
    }
    resultado.innerHTML += `<p>A soma de todos os valores, temos ${s}.`    

    //A média dos valores
    var m = s/Tabela.length
    resultado.innerHTML += `<p>A média de todos os valores digitados é ${m}.`    
}