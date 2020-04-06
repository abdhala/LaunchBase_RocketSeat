// Desafio 1-3: Funções e estruturas de repetição


// Usuários e tecnologias


const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];


function imprimirUsuarios(usuarios) {
    console.log('// Usuários e tecnologias.');
    for(let i = 0; i < usuarios.length; i++){
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}.`);
    }

    
};

imprimirUsuarios(usuarios);

// ------------------------------------------------
// Busca por tecnologia


function verficaCSS(usuarios){
    console.log('// Busca por tecnologia.');
    for(let i = 0 ; i < usuarios.length ; i++ ){
        for(let j = 0 ; j < usuarios[i].tecnologias.length ; j++){
            
            if(usuarios[i].tecnologias[j] == "CSS"){
                console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[j]}.`);
            }

        }

        }


    }


 
   verficaCSS(usuarios);

// ------------------------------------------------
// Soma de despesas e receitas

const usuario = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

  function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"

    for (let numero of numeros){
      soma = soma + numero;

    }
    return soma;
  }

  function CalculaSaldo(receitas, despesas){
    let restante = 0;

    const somaDasDespesas = somaNumeros(despesas)
    const somaDasReceitas = somaNumeros(receitas)

    restante = somaDasReceitas - somaDasDespesas

    return restante;

  }

  function imprimeSaldos(){
    
    for(let user of usuario){
      const saldo = CalculaSaldo(usuario.receitas, usuario.despesas);

      if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
      } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }

    }

  }

  imprimeSaldos();