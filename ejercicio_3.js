class Bebida{
    constructor(cantidad){
        this.cantidad =  cantidad;
    }
 
}

class Cerveza extends Bebida{
    constructor(cantidad, porcentajeAlcohol){
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }
}

class Refresco extends Bebida{
    constructor(cantidad, azucar){
        super(cantidad);
        this.azucar = azucar;
    }
}




