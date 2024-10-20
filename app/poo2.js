class Persona{
    constructor(){
        this.name = "Jacinto";
        this.age = 28;
        this.country = "Angola";
        this.city = "Luanda";
    }
    ligar(){
        console.log("está ligando...");
        return "acabou de ligar.";
    }
}
let p = new Persona();
console.log(p.ligar());

