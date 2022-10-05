class Construccion{
    constructor(numPuertas, numVentanas, numPisos,direccion, altura, largoTerreno, anchoTerreno){
        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.numPisos = numPisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largoTerreno = largoTerreno;
        this.anchoTerreno = anchoTerreno;
    }
    metrosCuadrados(){
        let metros = this.largoTerreno * this.anchoTerreno;
        return metros + " metros cuadrados, de "+this.tipo;
    }

    direccionMetodo(){
        return this.direccion;
    }
    modificarDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
        return this.direccion;
    }
}
class Casa extends Construccion{
    constructor(numPuertas, numVentanas, numPisos,direccion, altura, largoTerreno, anchoTerreno, tipo){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largoTerreno, anchoTerreno);
        this.tipo = tipo;
    }
  
}
class Edificio extends Construccion{
    constructor(numPuertas, numVentanas, numPisos,direccion, altura, largoTerreno, anchoTerreno, tipo){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largoTerreno, anchoTerreno);
        this.tipo = tipo;
    }
}

let tipoCasa = new Casa(4,3,2,"Calle 4, No.23", 5, 15,10,"Casa");
let tipoEdificio = new Edificio(4,3,4,"Manzana 23", 15, 10,10,"Edificio");

console.log(tipoCasa);
console.log(tipoCasa.metrosCuadrados());
console.log(tipoCasa.direccionMetodo());
tipoCasa.modificarDireccion("Nueva Direccion de casa");
console.log(tipoCasa.direccionMetodo());
console.log("---------------------------------------");
console.log(tipoEdificio);
console.log(tipoEdificio.metrosCuadrados());
console.log(tipoEdificio.direccionMetodo());
tipoEdificio.modificarDireccion("Nueva Direccion de Edificio");
console.log(tipoEdificio.direccionMetodo());


