let num = [5, 2, 1]

//Criando elementos na posição desejada e adicionando-os ao array
/*
num[3] = 4
*/

//Forçando entrada de elementos sem saber que posição entrarão
/*
num.push(3)
*/

// ultilizado para saber quantos elementos há no array
/*
num.lenght
*/
//Organiza o array em ordem crescente
/*
num.sort()
*/

//Utilizando método for 
/*
for(let i = 0; i < num.length;i++){
    console.log(`O vetor na posição ${i} tem como valor ${num[i]}`);
}
*/

//Ultilizando método For in
/*
for(var i in num){
    console.log(`O vetor na posição ${i} tem como valor ${num[i]}`);
}
*/
//Buscando um elemento no array
N = 3
var pos = num.indexOf(N)
//Caso o elemento não for encontrado
if(pos == -1){
    console.log(`O número ${N} não foi encontrado`)
}else{
    console.log(`O número ${N} esta na posição ${pos}`)
}
