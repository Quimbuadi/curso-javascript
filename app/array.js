let cars = ['ferrary', 'lamborghini-aventador', 'doodge', 'camaro', 'porche', new Date(), 404];

console.log(cars[5].toLocaleDateString('pt-br'));

cars.forEach(function(value, index){

    console.log(index, value);

})