/*2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
*/


class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  set modifyDni(p_dni) {
    this.DNI = p_dni;
  }

  get esMayorDeEdad() {
    if (Number(this.edad) >= 18)
      return `la Persona con nombre ${this.nombre} es mayor de edad`;
    else return `la Persona con nombre ${this.nombre} es menor de edad`;
  }
  AgregarNuevoElemento(nombre, valor) {
    this[nombre] = valor;
  }
}

class Generacion {
  constructor(nombre, marcoTemporal, poblacion, circunanciasHistorica, Rasgo) {
    this.nombre = nombre;
    this.marcoTemporal = marcoTemporal;
    this.poblacion = poblacion;
    this.circunanciasHistorica = circunanciasHistorica;
    this.Rasgo = Rasgo;
  }
}

const listaGeneracion = [];

let generacion1 = new Generacion(
  "Generación Z",
  "1994-2010",
  7800000,
  "Expancion Masiva de Internet",
  "Irreverencia 😜"
);
let generacion2 = new Generacion(
  "Generación Y",
  "1981-1993",
  7200000,
  "Inicio de la digitacion",
  "Frustacion 😖"
);
let generacion3 = new Generacion(
  "Generación X",
  "1969-1980",
  9300000,
  "Crisis del 73 y transicion española",
  "Obsecion por el Exito 😎"
);
let generacion4 = new Generacion(
  "Baby Boom",
  "1949-1968",
  12200000,
  "Paz y explosion demografica",
  "ambicion 🤑"
);
let generacion5 = new Generacion(
  "Silent Generation,",
  "1930-1948",
  12200000,
  "Conflictos biblicos",
  "ambicion 😐"
);
listaGeneracion.push(
  generacion1,
  generacion2,
  generacion3,
  generacion4,
  generacion5
);

const persona1 = new Persona("Juan", 17, "123456789", "H", 70, 1.8, 1980);

// punto 1

const mostrarGeneracion = (persona) => {
  let respuesta = null;
  listaGeneracion.forEach((generacion) => {
    let periodo = generacion.marcoTemporal;
    let desde = Number(periodo.split("-")[0]);
    let hasta = Number(periodo.split("-")[1]);
    if (
      Number(persona.añoNacimiento) <= hasta &&
      Number(persona.añoNacimiento) >= desde
    ) {
      respuesta = `La persona ${persona.nombre} pertenece a la generación ${generacion.nombre}. Rasgo característico: ${generacion.Rasgo}`;
    }
  });

  return respuesta;
};

// punto 2

const mayorEdad = persona1.esMayorDeEdad;

console.log(mayorEdad);

// agrego nueva propiedad

persona1.AgregarNuevoElemento("direccion", "las truchas 150 pilar");

// punto 3
console.log(persona1);

// modifico dni

const ranDni = Math.floor(Math.random() * (99999999 - 11111111) + 11111111);
persona1.modifyDni = ranDni;

console.log(persona1);

let resultGeneracion = mostrarGeneracion(persona1);

console.log(resultGeneracion);
