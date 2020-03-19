// Criar um programa que calcula a média
// das notas entre os alunos e envia 
// por mensagem o calculo da média dessas notas
// se a média maior que 5 parabenizar a turma


const aluno1 = "Abdhala", aluno2 = "Matheus", aluno3 = "Wendell"
const notaAluno1 = 10, notaAluno2 = 2, notaAluno3 = 2

const media = (notaAluno1+notaAluno2+notaAluno3)/3

const parabenizacao = "Parabéns a média é maior que 5. :)"
const repreencao = "Que pena a média está a baixo de 5. :("

console.log("A média da turma é:",media)

// Se a média for > que 5 

if (media > 5){
    console.log(parabenizacao)

}else{
    console.log(repreencao)

}




