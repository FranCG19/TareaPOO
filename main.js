class Maestro {
  constructor(materia) {
    this.materia = materia;
  }
  calcularPromedio(cal1, cal2, cal3) {
    let totalCalificaciones = 0;
    let prom = 0;
    let calificaciones = [cal1, cal2, cal3];
    for (let index = 0; index < calificaciones.length; index++) {
      totalCalificaciones = totalCalificaciones + calificaciones[index];
    }
    prom = totalCalificaciones / calificaciones.length;
    return prom;
  }
}

class Fisica extends Maestro {
  constructor(materia, antiguedad) {
    super(materia);
    this.antiguedad = antiguedad;
  }
}

class Musica extends Maestro {
  constructor(materia, edad) {
    super(materia);
    this.edad = edad;
  }
}

let profesorMusica = new Musica("Piano", 60);
console.log(profesorMusica);

let profesorFisica = new Fisica("Nucleo", 5);
console.log(profesorFisica);
console.log(profesorFisica.calcularPromedio(80, 90, 90));
console.log(profesorMusica.calcularPromedio(90, 50, 100));
