// var peso = document.getElementById('peso')
// var altura = document.getElementById('altura')
// var mensagem = document.getElementById('msg')

elementos = ['peso', 'altura', 'msg']
for (e in elementos) {
    document.getElementById(elementos[e])
}

function calc() {

    var p = Number(peso.value)
    var a = Number(altura.value)
    var imc = p / (a ** 2)


    if (altura.value.length == 0 || peso.value.length == 0) {
        window.alert('Campo(s) vazio(s)! Tente novamente...')

    } else if (imc < 18.5) {
        msg.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você está abaixo do peso!`

    } else if (imc >= 18.5 && imc < 24.9) {
        msg.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você está no peso ideal, parabéns!`

    } else if (imc >= 25 && imc < 29.9) {
        msg.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você está levemente acima do peso!`

    } else if (imc >= 30 && imc < 34.9) {
        msg.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você está em obesidade grau I!`

    } else if (imc >= 35 && imc < 39.9) {
        msg.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você está em obesidade severa!`

    } else if (imc > 40) {
        msg.innerHTML = `Seu imc é de ${imc.toFixed(2)} e você está em obesidade mórbida!`
        
    }

}

function reset() {
    
    campos = ['peso', 'altura', 'msg']
    for (c in campos) {
        document.getElementById(campos[c]).value=''
    }

    msg.innerHTML = ''

}
    
