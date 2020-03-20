// Cálculo de IMC

const nome = "Carlos", peso = 280, altura = 1.88


const imc = (peso / (altura*altura))

console.log(`Sei IMC é: ${imc}`)

if(imc >= 30){console.log(`${nome} você está acima do peso.`)}
else{console.log(`${nome} você não está acima do peso.`)}


// Cálculo de aposentadoria


const nomeAposentado = 'Silvana', sexoAposentado = 'F', idadeAposentado =55, contribuicaoAposentado = 30

if(((sexoAposentado === 'M' &&  contribuicaoAposentado >=35) || (sexoAposentado === 'M' && (idadeAposentado + contribuicaoAposentado) >= 95)) || ((sexoAposentado === 'F' &&  contribuicaoAposentado >=30) || (sexoAposentado === 'F' && (idadeAposentado + contribuicaoAposentado) >= 85))){
    console.log(`${nomeAposentado}, você pode se aposentar!`)

} else{
    console.log(`${nomeAposentado}, você ainda não pode se aposentar!`)
}