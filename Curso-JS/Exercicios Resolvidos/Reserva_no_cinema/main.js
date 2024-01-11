// main.js

document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um evento de clique para cada botão de assento
    var acentos = document.querySelectorAll('.Acentos');
    acentos.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Obtém o ID do assento, sintaxe replace(Remove a palavra Acento, deixando apenas o número)
            var assentoId = btn.id.replace('Acento', '');

            //Verificar se o acento ja foi reservado
            if(VerificarReserva(assentoId)){
                document.getElementById('saida').innerHTML = `O acento B`+ assentoId + ` já foi reservado`
            }else{
                // Pode ser reservado
                document.getElementById('saida').innerHTML = 'Deseja reservar o assento ' + assentoId + '? <button onclick="confirmarReserva(\'' + assentoId + '\')">Sim</button>/<button onclick="cancelarReserva()">Não</button>';
            }

        });
    });
});

function VerificarReserva(assentoId){
    // Aqui você pode adicionar a lógica específica para verificar se o assento está reservado
    // Por exemplo, pode verificar se o botão correspondente possui a classe 'reservado'
    return document.getElementById('Acento' + assentoId).classList.contains('reservado')
}

//Esta função é chamada quando o usuário confirma a reserva.
function confirmarReserva(assentoId) {
    // Atualiza a seção de saída indicando que o assento foi reservado
    document.getElementById('saida').innerHTML = 'Assento B' + assentoId + ' reservado!';

    /* Atualiza a seção de saída para indicar que o assento foi reservado.
    Adiciona a classe 'reservado' ao botão correspondente para destacar visualmente que o assento está reservado*/
    document.getElementById('Acento' + assentoId).classList.add('reservado');
}
//Esta função é chamada quando o usuário não confirma a reserva.
function cancelarReserva() {
    // Limpa a seção de saída
    document.getElementById('saida').innerHTML = '';
}







