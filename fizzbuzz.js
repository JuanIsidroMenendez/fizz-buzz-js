// EXPLICACIÓN: Usamos 'export' al principio para que Vitest pueda importar esta función en el test.
export function fizzBuzz(num) {
    
    // ESCENARIO: El dato proporcionado no es un número.
    // Corrección: Envolvemos toda la condición dentro de los paréntesis del if.
    if (typeof num !== 'number' || Number.isNaN(num)) {
        throw new Error('El dato proporcionado no es un número');
    }

    // ESCENARIO: El número es divisible por 3 y por 5.
    // Tu lógica es impecable: si evaluáramos los individuales primero, un 15 entraría en el del 3 y nunca llegaría aquí.
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    }

    // ESCENARIO: El número es divisible por 3.
    if (num % 3 === 0) {
        return 'Fizz';
    }

    // ESCENARIO: El número es divisible por 5.
    if (num % 5 === 0) {
        return 'Buzz';
    }

    // ESCENARIO: El número no es divisible ni por 3 ni por 5.
    // Corrección: Quitamos las llaves que rompían el código. Convertimos el número a texto.
    return num.toString();
}

// Requisito del enunciado: "Escribe un programa que imprima los números del 1 al 100"
// Separamos esta función fuera de fizzBuzz para mantener las responsabilidades limpias.
export function printFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log(fizzBuzz(i));
    }
}