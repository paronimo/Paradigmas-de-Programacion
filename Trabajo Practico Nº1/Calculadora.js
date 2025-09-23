const prompt = require("prompt-sync")({ sigint: true });

function main() {
    let opcion;
    do {
        console.log("Estas en la calculadora: \n__________________________________\n1) Suma\n2) Resta\n3) Multiplicacion\n4) Division\n0) Salir");
        opcion = parseInt(prompt("Seleccione una opción: "));

        switch (opcion) {
            case 0:
                console.log("\n¡Gracias por usar la calculadora!");
                break;
            case 1:
                suma();
                break;
            case 2:
                resta();
                break;
            case 3:
                multiplicacion();
                break;
            case 4:
                division();
                break;
            default:
                console.log("Opción inválida. Intente nuevamente.");
        }
    } while (opcion !== 0);

    console.log("Chao!");
}

function suma() {
    const a = parseFloat(prompt("Ingrese su primer número: "));
    const b = parseFloat(prompt("Ingrese su segundo número: "));
    console.log("El resultado es: " + (a + b));
}

function resta() {
    const a = parseFloat(prompt("Ingrese su primer número: "));
    const b = parseFloat(prompt("Ingrese su segundo número: "));
    console.log("El resultado es: " + (a - b));
}

function multiplicacion() {
    const a = parseFloat(prompt("Ingrese su primer número: "));
    const b = parseFloat(prompt("Ingrese su segundo número: "));
    console.log("El resultado es: " + (a * b));
}

function division() {
    const a = parseFloat(prompt("Ingrese su primer número: "));
    const b = parseFloat(prompt("Ingrese su segundo número: "));
    if (b === 0) {
        console.log("No se puede dividir por cero.");
    } else {
        console.log("El resultado es: " + (a / b));
    }
}

main();
