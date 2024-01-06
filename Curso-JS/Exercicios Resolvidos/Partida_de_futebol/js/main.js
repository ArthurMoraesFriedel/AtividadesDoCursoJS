function Calcular() {
    var res = window.document.querySelector('div#res')
    var nome_do_Time1 = window.document.getElementById('Time1')
    var nome_do_Time2 = window.document.getElementById('Time2')

    var Nome_do_Time1 = String(nome_do_Time1.value)
    var Nome_do_Time2 = String(nome_do_Time2.value)

    var quantidade_golst1 = window.document.getElementById('Time1_n')
    var quantidade_golst2 = window.document.getElementById('Time2_n')

    var Gols_dot1 = Number(quantidade_golst1.value)
    var Gols_dot2 = Number(quantidade_golst2.value)

    var vencedor
    var gols_do_vencedor
    var gols_do_perdedor
        if(Gols_dot1===0 && Gols_dot2===0){
            res.innerHTML = `<p>Nenhum dos times marcaram</p>`
        } else if (Gols_dot1-Gols_dot2 === 0){
            res.innerHTML = `<p>Jogo deu empate</p>`
        }
        if(Gols_dot1>Gols_dot2){
            vencedor = Nome_do_Time1
            gols_do_vencedor = Gols_dot1
            gols_do_perdedor = Gols_dot2
            res.innerHTML = `<p>Time ${vencedor} ganhou o jogo</p>`
        } else if (Gols_dot2>Gols_dot1){
            vencedor = Nome_do_Time2
            gols_do_vencedor = Gols_dot2
            gols_do_perdedor = Gols_dot1
            res.innerHTML = `<p>Time ${vencedor} ganhou o jogo</p>`
        }
        if (gols_do_vencedor-gols_do_perdedor > 3){
            res.innerHTML += `<h1><strong>E FOI UMA GOLEADA</strong></h1>`
        }
}