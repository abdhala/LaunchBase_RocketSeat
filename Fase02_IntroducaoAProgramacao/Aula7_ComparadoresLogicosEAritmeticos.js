/* =============================================================================

    OPERADORES LÓGICOS


    && 'E' VV
    || 'OU' VF OU FV
    !  'NÃO NEGA UMA CONDIÇÃO
    
   ============================================================================= */
   

    const pessoa1 = 'Abdhala', pessoa2 = 'Mariene', pessoa3 = "João"
    const pessoa1Idade = 18, pessoa2Idade = 17, pessoa3Idade = 10

    const pessoa = pessoa3
    const idade = pessoa3Idade

    if(!(idade >= 18) || idade === 17){
        console.log(`Desculpe ${pessoa}, você não pode entrar.`)

    } else{
        console.log(`Seja Bem Vindo ${pessoa}, pode entrar.`)        
    }
    
//AMÉM