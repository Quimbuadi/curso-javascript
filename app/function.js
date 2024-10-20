//função normal
function calc(x1, x2, operator){

    return eval(` ${x1} ${operator} ${x2}`);

}

//funções anônimas
(function(x1, x2){

    let saida =  x1 + x2;
    console.log(saida);

})(2,5);

let resultado = calc(1, 2, "*");


//Arroy function

let calculadora = (x1, x2) => {
    return x1 + x2;
}
console.log(calculadora(3, 3));

console.log(resultado);