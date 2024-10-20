let frutas = ['Abacaxi', 'Laranja', 'Limão', 'Banana'];


frutas.forEach(function(value, index){
    console.log(index, value);
});
console.log('==============');
function showLanguages(value, index){
    console.log(index, value);
}
let languages = [
    'python',
    'javascript',
    'php',
    'java',
    'c#',
    'go'
];

languages.forEach(showLanguages);
