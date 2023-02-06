alert("Bienvenido");
// const nComisión = 48655;

// let ingreso = parseInt(prompt("Ingrese el numero de comisión"));

// * INTENTE RAELIZAR EL INGRESO CON WHILE,
// PARA QUE SI SE INGRESA UN Nº DE COMISION ERRONEO VUELVA A CARGARSE HASTA DAR CON EL CORRECTO, PERO NO SALE DEL BUCLE
//
//    while (ingreso === nComisión) {
//      alert("El numero de comisión es correcto");
//      ingreso = parseInt(prompt("Ingrese nuevamente el nº de Comisión, por favor"));
//      }

/*

console.log("El numero de comisión ingresado fue: " + ingreso);
if (ingreso == nComisión) {
  console.log("Acceso permitido");
  alert("Acceso permitido");
} else {
  console.log("Accceso no permitido");
  alert("Accceso no permitido");
}

let nombre = prompt("Ingrese su nombre, por favor");
let cargo = prompt("Ingrese si su cargo es: Adjunto ó Regular");

alert(
  "Hola " +
    nombre +
    ", mi nombre es Andrés y es mi primer contaco con JS. Con respecto a mi proyecto quiero direccionarlo a un carrito en principio tambien solapearlo a funciones en funcion de pesos de envio, mas las provicias de entrega, lo que hace que varie su precio. A medida que fui adquiriendo los conocimientos adapta a lo que podria llegar a necesitar a hora de agregar JS a mi pagina"
);

console.log("nombreDeUsuario: " + nombre + " cargoDelUsuario: " + cargo);

console.log(
  "Salto de programa a Consulta sobre medios de entrega/retiro de mercadería"
);

alert("--- Seccion Envio/Retiro de Mercadería ---");

let programaEntrega = prompt(
  "No disponemos de un local, pero contamos con varias opciones a la hora de entregar tu pedido. Ingrese si es: 'Retiro' por dirección, 'Cadeteria', 'Despacho'"
);
let diasDeEnvio = 0;

while (programaEntrega !== "SALIR") {
  switch (programaEntrega) {
    case "Retiro":
      diasDeEnvio = alert(
        "Los retiros se pueden realizar luego de la confirmación del pedido, generalmente a los 30' luego de confirmar el pedido esta listo para retirar"
      );
      console.log("Se selecciono, opcion retiro por direccion");
      break;

    case "Cadeteria":
      diasDeEnvio = alert(
        "Los envios por cadetería son 24 Hs luego de la confirmación del pedido"
      );
      console.log("Se selecciono, opcion cadeteria");
      break;

    case "Despacho":
      diasDeEnvio = alert(
        "Se despachan los días 'Martes' y 'Jueves' por correo Argentino/Andreani/ViaCargo"
      );
      console.log("Se selecciono, opcion Despacho");
      break;

    default:
      diasDeEnvio = alert(
        "Recuerde que las opciones son: 'Retiro', 'Cadeteria' ó 'Despacho'"
      );
      break;
  }
  programaEntrega = prompt(
    "Consulto por otra forma de entrega (Ingrese SALIR si no quiere evaluar el costo"
  );
}

console.log("Salto de programa a Consulta sobre costo de envio por 'Despacho'");

alert("--- Seccion consulta por despacho de Mercadería ---");

let lugarDeEntrega = prompt(
  "Este cotizador de entrega por Provincias, Escriba la privincia de destino | (Ingrese SALIR si no quiere evaluar el costo)"
);
let costoDelEnvio = 0;

while (lugarDeEntrega !== "SALIR") {
  switch (lugarDeEntrega) {
    case "Buenos Aires":
    case "Santa Fe":
    case "La Pampa":
    case "Cordoba":
      costoDelEnvio = 1500;
      break;

    case "San Luis":
    case "San Juan":
    case "Mendoza":
    case "Rio Negro":
    case "Santiago del Estero":
    case "Neuquen":
    case "La Rioja":
    case "Jujuy":
      costoDelEnvio = 2350;
      break;

    case "Salta":
    case "Chaco":
    case "Tierra del Fuego":
    case "Chubut":
    case "Tucuman":
    case "Misiones":
    case "Santa Cruz":
    case "Catamarca":
      costoDelEnvio = 3980;
      break;

    default:
      costoDelEnvio = 0;
      break;
  }

  alert("El costo del envio, desde Rosario, es: $" + costoDelEnvio);
  console.log("Han consultado por entregas a: " + lugarDeEntrega);

  lugarDeEntrega = prompt(
    "Consulte nuevamente por los destinos que desee (Ingrese SALIR cuando termine de consultar)"
  );
}

alert(
  "Me gustaria desarrollar una función, en funcion de Kilos y provincias, ya que independientemente tienen diferentes costos según el kilaje del bulto, por ejemplo, hasta 5 Kg, $1100, hasta 10 Kg, $1800, y tambien varia por privincia, lo que para una provincia los 5 Kg, es un valor, para otra es más, si bien voy entendiendo los conceptos de las funciones me gustaria desarrolar algo como eso en un futuro"
);

function suma(provincia, kilo) {
  const resultado = provincia * kilo;
  alert("El resultado es: $" + resultado);
  console.log("Se calculo, 'Dato del destino' " + resultado);
}

const provinciaPrompt = parseInt(
  prompt("Ingrese el valor del envio de provincia")
);
const kiloPrompt = parseInt(
  prompt(
    "Ingrese el valor en Kg que le arroja el carrito (Esto deberia tirarlo el mismo carrito con todos los items)"
  )
);

suma(provinciaPrompt, kiloPrompt);

****************************************************

*/

// OBJETOS LITERALES
/*
const persona1 = {
  nombre: "Annnde",
  edad: 31,
  calle: "Entre Rios 858",
};
const persona2 = {
  nombre: "Amanda",
  edad: 30,
  calle: "Entre Rios 842",
};

const persona3 = {
  nombre: "Ainnne",
  edad: 27,
  calle: "Entre Rios 458",
};

console.log(persona1.edad);
console.log(persona2.nombre);
console.log(persona3.calle);
*/

// "OBJETOS" CONSTRUCTORES

/* function Persona(nombre, edad, telefono) {
  this.nombre = nombre;
  this.edad = edad;
  this.telefono = telefono;
}

const nombre = prompt("Ingrese su nombre:");
const edad = parseInt(prompt("Ingrese su edad de manera numerica:"));
const telefono = parseInt(prompt("Ingrese su numero de telefono personal:"));

console.log(new Persona());


const artCera = {
  titulo: "Cera de Soja",
  precio: "1335",
  kilos: "1,004",
};

function Producto(titulo, precio, kilos) {
  this.titulo = titulo;
  this.precio = precio;
  this.kilos = kilos;
}

cons artCera = new artCera()

*/

const productos = [
  { nombre: "Cera", precio: 1385 },
  { nombre: "Endurecedor", precio: 500 },
  { nombre: "Pabilo", precio: 140 },
  { nombre: "Ojalillos", precio: 180 },
];
let carrito = [];

let seleccion = prompt(
  "Bienvenidos a Anwar Insumos, si desea comprar, escriba 'Si', de lo contrario, 'No'"
);

while (seleccion != "Si" && seleccion != "No") {
  alert("Por favor, ingrese Si o No");
  seleccion = prompt("Desea comprar? Si o No");
}

if (seleccion == "Si") {
  alert("Nuestros productos: ");
  let todosMisProductos = productos.map(
    (Productos) => Productos.nombre + " " + Productos.precio + "$"
  );
  alert(todosMisProductos.join(" - "));
} else if (seleccion == "No") {
  alert("Gracias por llegar a nuestra Web, esperamos que vuelvas pronto!!");
}

while (seleccion != "No") {
  let productos = prompt(
    "Comenza agregando los productos que desees a tu carrito"
  );
  let precio = 0;

  if (
    productos == "Cera" ||
    productos == "Endurecedor" ||
    productos == "Pabilo" ||
    productos == "Ojalillos"
  ) {
    switch (productos) {
      case "Cera":
        precio = 1385;
        break;
      case "Endurecedor":
        precio = 500;
        break;
      case "Pabilo":
        precio = 140;
        break;
      case "Ojalillos":
        precio = 180;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("Indique las cantidades a llevar"));

    carrito.push({ productos, unidades, precio });
    console.log(carrito);
  } else {
    alert("No disponemos del articulo que desea");
  }

  seleccion = prompt("Desea seguir agregando articulos?");
  while (seleccion === "No") {
    alert("Gracias por la compra");
    carrito.forEach((carritoFinal) => {
      console.log(`producto: ${carritoFinal.productos}, unidades: ${
        carritoFinal.unidades
      }, 
      total a pagar ${carritoFinal.unidades * carritoFinal.precio} `);
    });
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`El total a pagar por la compra es: ${total}`);
