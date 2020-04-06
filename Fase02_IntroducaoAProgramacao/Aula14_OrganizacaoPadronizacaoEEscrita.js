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



function calculaMedia(alunos, turma){

    let soma = 0;
    for( let i = 0; i < alunos.length; i++){
        
        console.log(i);
        soma = soma + alunos[i].nota;
        console.log(soma);

    };

    const media = soma / alunos.length;

    return media, turma;
}

function imprimeMedia(){
console.log(`A Média da Turma A é:  ${calculaMedia(alunosTurmaA)}.`)
console.log(`A Média da Turma B é:  ${calculaMedia(alunosTurmaB)}.`)

}


imprimeMedia();