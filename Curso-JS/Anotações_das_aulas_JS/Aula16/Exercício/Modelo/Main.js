/*
//Limpar conteúdo
    Tab.innerHTML = ''



*/


//Criar Tabela
 var Tabela = []


function ValidarDados(){
    //Obter número digitado
    var N = parseInt(window.document.getElementById('N').value)

    //RefeRência à lista
    var Tab = document.getElementById('Tab')

    //Validar se o número é valido
    if(N === '' || isNaN(N)){
        window.alert("Verifique o valor e tente novamente")

    }else if(N >100 || N < 1){
        window.alert("Apenas valores entre 1 e 100 são válidos")

    }else if(!Tabela.includes(N)){
        AdicionarTabela(N, Tab)

    }else{
       window.alert("Este número já consta na tabela")
    }
}

function AdicionarTabela(N, Tab){

    //Criar um elemento para a tabela
    var item = document.createElement('option')
    item.text = `Valor ${N} foi adicionado`
    item.value = `Tab${N}`

    //Adcionar elemento filho
    Tab.appendChild(item)

    //Adicionar elemento a tabela
    Tabela.push(N)

    console.log(Tabela)
    return
}

function Finalizar(){
    //Obtendo a referência
    var resultado = window.document.getElementById('resultado')

    //Validar se a tabela esta preenchida
    if(Tabela.length == ''){
        window.alert("Verifique o valor e tente novamente")

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