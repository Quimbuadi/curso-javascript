let celular = function(){
    this.color = "preto";
    this.marc = "iphone";
    this.ram = 8;
    this.storage = 128;

    this.ligar = function(){
        console.log("está ligando...");
        return "uma ligação";
    }
};

let objecto = new celular();
console.log(objecto.marc);
console.log(objecto.ligar());