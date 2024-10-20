let alunos = [
    {'nome':'quimbuadi', 'idade': 5},
    {'nome': 'samuel', 'idade': 18},
    {'nome': 'correia', 'idade': 35}
];

let maiorIdade = alunos.filter(function(value){
    return value.idade >= 18;
});
console.log(maiorIdade);