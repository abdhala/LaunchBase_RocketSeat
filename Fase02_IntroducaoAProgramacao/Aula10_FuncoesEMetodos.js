// Criar um p

const alunosTurmaA = [
         {
            nome: "Abdhala",
            nota: 10
         },
         {
            nome: "Diego",
            nota: 9
         },
         {
            nome: "Matheus",
            nota: 8
        }]

const alunosTurmaB = [
         {
            nome: "João",
            nota: 5
         },
         {
            nome: "Pedro",
            nota: 4
        },
        {
            nome: "Gisele",
            nota: 5
        }]



function calculaMedia(alunos){

    return (alunos[0].nota + alunos[1].nota + alunos[1].nota) / 3;

}

function imprimeMedia(){
    console.log(`A Média da Turma A é: ${calculaMedia(alunosTurmaA)}.`)
    console.log(`A Média da Turma B é: ${calculaMedia(alunosTurmaB)}.`)

}


imprimeMedia();