function Comecar_partida(){
    var TimesIDs = ["Time1", "Time2", "Time3"]
    var saida = document.getElementById("saida"); // Certifique-se de ter um elemento com o ID "saida" no seu HTML.

    saida.innerHTML = "";


    for(let i = 0; i < 3; i++){
        let j = i
        for(j = 0; j < 3; j++){
            if(document.getElementById(TimesIDs[i]).value !== document.getElementById(TimesIDs[j]).value){
                saida.innerHTML += `${document.getElementById(TimesIDs[i]).value} [   ] x [   ] ${document.getElementById(TimesIDs[j]).value}<br>`
            }
        }
    }
}