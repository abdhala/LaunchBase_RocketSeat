/* =============================================================================

    OPERADORES DE COMPARAÇÃO


    > Maior
    < Menor
    >= Maior ou igual a
    <= Mneor ou igual a
    == Igual a
    === Igual e do mesmo tipo a
    != Diferente de
    !== Diferente, inclusive do tipo
   
    console.log(5 > 4) //TRUE whos boolean
    console.log(5 < 4) 
    console.log(5 >= 4) 
    console.log(5 <= 4) 
    console.log(5 == 4) 
    console.log(5 === 5)
    console.log(5 === "a")

    
   ============================================================================= */
   
    // DESAFIO 1

    //Verificar se a pessoa é maior de idade
    // se sim, deixar entrar, se não, bloquear a entrada
    //se a pessoa tiver 17 anos
    // avisar para voltar quando tiver 18 anos


    const pessoa1 = 'Abdhala', pessoa2 = 'Mariene', pessoa3 = "João"
    const pessoa1Idade = 18, pessoa2Idade = 17, pessoa3Idade = 10

    const pessoa = pessoa2
    const idade = pessoa2Idade

    if (idade >= 18) {
        console.log(`Seja Bem Vindo ${pessoa}, pode entrar.`)
    }
    else {
        console.log(`Desculpe ${pessoa}, você não pode entrar.`)
        if (idade == 17){
            console.log(`Mas como tem ${idade}, já pode voltar quando tiver 18.`)
        }
    }