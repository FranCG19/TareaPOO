class Electrodomestico{
    constructor(precio, color, capacidad) {
        this.precio = precio;
        this.color = color;
        this.consumo = 100;
        this.capacidad = capacidad;
    }
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad,carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }
    precioFinal(){
       let pFinal = this.consumo * this.carga;
       return pFinal;
    }
}
let objeto = new Electrodomestico(150,"azul",900);
console.log(objeto);
let objeto2 = new Lavadora(150, "Azul",900, 5);
console.log("Precio final",objeto2.precioFinal());    


