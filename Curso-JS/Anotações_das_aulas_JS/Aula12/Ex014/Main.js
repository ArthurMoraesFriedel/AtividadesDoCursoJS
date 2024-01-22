function carregar(){
    var msg = document.getElementById('msg')
var imagem = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora>0 && hora<12){
    //Bom dia
    imagem.src = '../Ex014/Banco de imagens/FotoDaManha.png'
    document.body.style.background = '#3395f7'
} else if(hora>12 && hora<18){
    //Boa tarde
    imagem.src = '../Ex014/Banco de imagens/FotoDaTarde.png'
    document.body.style.background = '#f9aa4f'
}else{
    //Boa noite
    imagem.src = '../Ex014/Banco de imagens/FotoDaNoite.png'
    document.body.style.background = '##3b2953'
}
}
