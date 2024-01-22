function Verificar(){
    var fano = document.getElementById('txtano')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')



    if(fano == 0 || fano>ano){
        window.alert("Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName('Radsex')
        var idade = ano - Number(fano.value)

        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
        //Se for Homem
            genero = 'Homem'

            if(idade>0 && idade<=10){
                //Criança
            img.setAttribute('src', './Banco de imagens/Homem/Foto.Criança.M.png')
            }else if(idade<=21){
                //Adolescente
            img.setAttribute('src', './Banco de imagens/Homem/Foto.Adolescente.M.png')
            }else if(idade<=60){
                //Adulto
            img.setAttribute('src', './Banco de imagens/Homem/Foto.Adulto.M.png')
            }else{
                //Idoso
            img.setAttribute('src','./Banco de imagens/Homem/Foto.Idoso.M.png')
            }
        
        }else if(fsex[1].checked){
        //Se for mulher
            genero = 'Mulher'

            if(idade>0 && idade<=10){
                //Criança
            img.setAttribute('src', './Banco de imagens/Mulher/Foto.Criança.F.png')
            }else if(idade<=21){
                //Adolescente
            img.setAttribute('src', './Banco de imagens/Mulher/Foto.Adolescente.F.png')
            }else if(idade<=60){
                //Adulto
            img.setAttribute('src', './Banco de imagens/Mulher/Foto.Adulta.F.png')
            }else{
                //Idoso
            img.setAttribute('src', './Banco de imagens/Mulher/Foto.Idosa.F.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos<p>`
        res.appendChild(img)//Adiciona um elemento
    }
}