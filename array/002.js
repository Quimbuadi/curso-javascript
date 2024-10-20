//dobro de numeros naturais
let numbers = [1, 2, 3];
let dobro = [];

numbers.forEach(function(value, index){
    dobro.push(value*2);
});
dobro.forEach(function(value){
    console.log(value);
})