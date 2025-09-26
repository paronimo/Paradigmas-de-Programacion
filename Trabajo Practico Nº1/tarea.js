// Para usar en consola: primero instala prompt-sync
// npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });

const MAX_TAREAS = 100;
let listaTareas = [];
let cantidadTareas = 0;

// Funciones
function crearTarea() {
  let tarea = {};

  console.clear();
  console.log("\nEstas creando una tarea:\n_______________________________________________\n");

  pedirTitulo(tarea);
  pedirDescripcion(tarea);
  pedirDificultad(tarea);
  pedirEstado(tarea);
  pedirFechaVencimiento(tarea);

  console.clear();
  mostrarResumen(tarea);

  let confirm = parseInt(prompt("¿Confirmar tarea? SI (1) / NO (2): "));

  if (confirm === 1) {
    listaTareas.push(tarea);
    cantidadTareas++;
    console.log("¡Se guardó la tarea exitosamente!\n\n\n");
    console.clear();
  } else {
    console.log("Tarea cancelada. Puedes volver a crearla.");
    console.clear();}}

function pedirTitulo(t) {
  t.titulo = prompt("De un titulo a esta tarea: ");}

function pedirDescripcion(t) {
  t.descripcion = prompt("De una descripcion a esta tarea: ");}

function pedirDificultad(t) {
  do {console.log("\n1 = § = Facilisimo\n2 = §§ = Facil\n3 = §§§ = Medio\n4 = §§§§ = Complicado\n5 = §§§§§ = Dificilisimo");
    t.dificultad = parseInt(prompt("Seleccione su dificultad: "));
    if (t.dificultad < 1 || t.dificultad > 5) {
      console.log("?? ¡Seleccione un número entre 1 y 5!\n");
    }
  } while (t.dificultad < 1 || t.dificultad > 5);}

function pedirEstado(t) {
  let estadoSeleccionado;
  console.log("\n ¿En que estado desea dejar la tarea?");
  console.log("1 = Pendiente\n2 = En curso\n3 = Terminada");
  estadoSeleccionado = parseInt(prompt("Seleccione: "));

  while (estadoSeleccionado < 1 || estadoSeleccionado > 3) {
    estadoSeleccionado = parseInt(prompt(" Opción inválida. Intente nuevamente: "));}

  switch (estadoSeleccionado) {
    case 1: t.estado = "Pendiente"; break;
    case 2: t.estado = "En curso"; break;
    case 3: t.estado = "Terminada"; break;}}

function pedirFechaVencimiento(t) {
  let confirm;
  t.preguntaFecha = parseInt(prompt("¿Quiere una fecha de vencimiento?\n SI(1) o NO(2): "));

  if (t.preguntaFecha === 1) {
    do {
      t.dia = parseInt(prompt("Ingrese dia: "));
      t.mes = parseInt(prompt("Ingrese el numero del mes: "));
      t.anio = parseInt(prompt("Ingrese el año: "));

      if (t.dia > 31 || t.dia <= 0 || t.mes > 12 || t.mes <= 0 || t.anio < 2025) {
        console.log("Fecha invalida. Intente de nuevo.\n");
        continue;}

      console.log(`...${t.dia}/${t.mes}/${t.anio}... ¿Es su fecha final?`);
      confirm = parseInt(prompt("SI(1) NO(2): "));
    } while (confirm !== 1);}}

function mostrarResumen(t) {
  console.log("\n¿Estos son todos los datos ingresados?");
  console.log("----------------------------------------");
  console.log(`Tarea: ${t.titulo}`);
  console.log(`Descripcion: ${t.descripcion}`);

  let dificultadStr = "§".repeat(t.dificultad);
  let dificultadTexto = "";
  switch (t.dificultad) {
    case 1: dificultadTexto = " (Facilisimo)"; break;
    case 2: dificultadTexto = " (Facil)"; break;
    case 3: dificultadTexto = " (Medio)"; break;
    case 4: dificultadTexto = " (Complicado)"; break;
    case 5: dificultadTexto = " (Dificilisimo)"; break;
  }
  console.log(`Dificultad: ${dificultadStr}${dificultadTexto}`);

  let fechaActual = new Date();
  console.log(`Fecha de creacion: ${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`);
  console.log(`Estado: ${t.estado}`);

  if (t.preguntaFecha === 1) {
    console.log(`Vencimiento: ${t.dia}/${t.mes}/${t.anio}`);
  } else {
    console.log("Vencimiento: Sin datos incorporados");
  }
  console.log("----------------------------------------");
}

function verTareas() {
  console.clear();
  let opciones;
  do {
  console.log("\n--- LISTA DE TAREAS ---\n");
   console.log("\n¿Que tareas deseas ver?");
    console.log("\n(0)Volver\n(1)Todas\n(2)Pendientes\n(3)En Curso\n(4)Terminada");
    opciones = parseInt(prompt("Seleccione una opción: "));

    switch (opciones) {
      case 0:
        console.clear();
        return; 
      case 1:
        nht();
        for (let i = 0; i < cantidadTareas; i++) {
        console.log(`\n--- Todas las tareas ---\n${i + 1}:`);
        mostrarResumen(listaTareas[i]); } 
        break;
      case 2: nht(); VerTP(); break;
      case 3:
        nht(); VerTEC(); break;
      case 4:
        nht(); VerTT(); break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
    }
    prompt("Presiona ENTER para continuar...");
    console.clear();
  }while(opciones !==0);
 console.clear();
}
function VerTP() {
  for (let i = 0; i < cantidadTareas; i++) {
          if (listaTareas[i].estado === "Pendiente") {
            console.log("\n--- Tareas Pendientes ---\n");
            mostrarResumen(listaTareas[i]);}}}
function VerTEC() {
  for (let i = 0; i < cantidadTareas; i++) {
          if (listaTareas[i].estado === "En curso") {
            console.log("\n--- Tareas En Curso ---\n");
            mostrarResumen(listaTareas[i]);}}}
function VerTT() {
   for (let i = 0; i < cantidadTareas; i++) {
          if (listaTareas[i].estado === "Terminada") {
            console.log("\n--- Tareas Terminadas ---\n");
            mostrarResumen(listaTareas[i]);}}}
 function nht() {
  if (cantidadTareas === 0) {
    console.log("No hay tareas para mostrar.\n");
    return;}}
   function buscarTarea() {
  console.clear();
  if (cantidadTareas === 0) {
    console.log("No hay tareas registradas.\n");
    return;
  }
  console.log("\n--- BUSCAR TAREA ---\n");
  for (let i = 0; i < cantidadTareas; i++) {
    console.log(`${i + 1}. ${listaTareas[i].titulo}`);}
  console.log("0. Volver");
  let seleccion = parseInt(prompt("Ingrese el número de la tarea que desea ver: "));

  if (seleccion === 0) {
    console.clear();
    return;}
  if (seleccion > 0 && seleccion <= cantidadTareas) {
    console.clear();
    mostrarResumen(listaTareas[seleccion - 1]);
  } else {
    console.log("Número inválido.");}
  prompt("Presiona ENTER para continuar...");
}                                                     
function editarTarea() {
  console.clear();
  if (cantidadTareas === 0) {
    console.log("No hay tareas para editar.\n");
    return;
    }
console.log("\n--- EDITAR TAREA ---\n");
  for (let j = 0; j < cantidadTareas; j++) {
    console.log(`${j + 1}. ${listaTareas[j].titulo}`);
  }
  console.log("0. Volver");

  let i = parseInt(prompt("Seleccione el número de tarea a editar: ")) - 1;

  if (i >= 0 && i < cantidadTareas) {
    console.log(`\nEditando la tarea: ${listaTareas[i].titulo}\n`);
    pedirTitulo(listaTareas[i]);
    pedirDescripcion(listaTareas[i]);
    pedirDificultad(listaTareas[i]);
    pedirEstado(listaTareas[i]);
    pedirFechaVencimiento(listaTareas[i]);
    console.log("¡Tarea editada con éxito!");
  } else if (i !== -1) {
    console.log("Número inválido.");}
  prompt("Presiona ENTER para continuar...");
}
function main() {
  let opc;
  do {
    console.log("\n--- MENU PRINCIPAL ---");
    console.log("0. Salir\n1. Crear tarea\n2. Ver mis tareas\n3. Buscar tarea\n4. Editar tarea\n____________________________________________");
    opc = parseInt(prompt("Seleccione una opción: "));

    switch (opc) {
      case 0: console.log("\n Nos vemos!"); break;
      case 1: crearTarea(); break;
      case 2: verTareas(); break;
      case 3: buscarTarea(); break;
      case 4: editarTarea(); break; 
      default: console.log("Opción inválida. Intente nuevamente.");
    }} while (opc !== 0);
  console.log("Adios!");
}
main();
