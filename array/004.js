let alunos = [
    {'nome':'quimbuadi', 'idade': 5},
    {'nome': 'samuel', 'idade': 18},
    {'nome': 'correia', 'idade': 35}
];

let maiorIdade = [];

alunos.forEach(function(value, index){
    if(alunos[index].idade >= 18){
        maiorIdade.push(alunos[index]);
    }
})
console.log(alunos);
console.log('alunos com maior idade')
console.log(maiorIdade);