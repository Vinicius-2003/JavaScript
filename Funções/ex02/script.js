let n1 = Number(prompt("Digite um número : "))
let n2 = Number(prompt("Digite outro número : "))

function somar (n1,n2) {
    let soma = parseInt(n1 + n2)
    mostrar(soma)
}

function subtrair (n1,n2) {
    let sub = Number(n1-n2)
    mostrar(sub)
}

function multiplicar (n1,n2) {
    let multiplicacao = Number(n1*n2)
    mostrar(multiplicacao)
}

function dividir (n1,n2) {
    let divisao = Number(n1/n2)
    mostrar(divisao)
}

function mostrar (valor) {
    let res = document.querySelector('#resultado')
    res.innerHTML = (`Resultado é ${valor}`)
}