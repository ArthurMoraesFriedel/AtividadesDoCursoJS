function Contar(){
    let n1 = window.document.getElementById('n1')
    let n2 = window.document.getElementById('n2')
    let Passo = window.document.getElementById('Passo')
    let res = window.document.querySelector('div#res')
    n1 = Number(n1.value)
    n2 = Number(n2.value)
    Passo = Number(Passo.value)

    res.innerHTML = `<p>Contando:</p>`

    if(n1<n2){
        res.innerHTML += `${n1}`
        var cont = n1
        while(cont<=n2){
            n1 = n1 + Passo
            if(n1>n2){
                res.innerHTML += `👉 🏁`
                break
            }
            res.innerHTML += `👉 ${n1}`
            cont = cont + Passo
        }
    }else if(n2<n1){
        res.innerHTML += `${n2}`
        var cont = n2
        while(cont<=n1){
            n2 = n2 + Passo
            if(n2>n1){
                res.innerHTML += `👉 🏁`
                break
            }
            res.innerHTML += `👉 ${n2}`
            cont = cont + Passo
        }
    }else{
        res.innerHTML += `🏁`
    }
}