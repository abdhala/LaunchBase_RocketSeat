// 1 - Construção e impressão de objetos


const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco:"Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}


console.log('1 - Construção e impressão de objetos');

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}.`);

console.log(empresa);




// 2 - Vetores e objetos


const programador = {
    nome: "Abdhala",
    idade: 22,
    tecnologia: [
        {
            nome:'C++', 
            especialidade: 'Desktop'
        },
        {
            nome:'Python',
            especialidade:'Data Science'
        },
        {
            nome:'JavaScript',
            especialidade:'WEB/Mobile'
        }

    ]

};

console.log('2 - Vetores e objetos');

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia[0].nome} com especialidade em ${programador.tecnologia[0].especialidade}.`);

console.log(programador);