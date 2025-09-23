// Importar readline para entrada por consola
const readline = require("readline");

// Crear interfaz para leer y escribir en consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generamos la pregunta
rl.question('🤖 ¿Cuál es tu nombre? \n👤 ', (nombre) => {
  console.log(`🤖 ¡Hola ${nombre}!`);
  rl.question(`¿Cuál es tu edad, ${nombre}? \n`, (edad) => {
    console.log(`🤖 Tienes ${edad} años.`);
    rl.close();
  });
});