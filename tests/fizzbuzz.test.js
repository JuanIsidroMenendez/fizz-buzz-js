// EXPLICACIÓN: Importamos las herramientas de Vitest y nuestra función usando la sintaxis moderna (ESM).
import { describe, test, expect } from 'vitest';
import { fizzBuzz } from '../fizzbuzz.js'; // Es vital incluir la extensión .js al final

describe('pruebas para la función fizzBuzz', () => {

    // ESCENARIO 1
    test('Debe retornar "Fizz" si el número es divisible por 3', () => {
        // Given: número 3
        const num = 3;
        // When: ejecuto la función
        const result = fizzBuzz(num);
        // Then: el resultado debe ser "Fizz"
        expect(result).toBe('Fizz');
    });

    // ESCENARIO 2
    test('Debe retornar "Buzz" si el número es divisible por 5', () => {
        // Given: número 5
        const num = 5;
        // When: ejecuto la función
        const result = fizzBuzz(num);
        // Then: el resultado debe ser "Buzz"
        expect(result).toBe('Buzz');
    });

    // ESCENARIO 3
    test('Debe retornar "FizzBuzz" si el número es divisible por 3 y por 5', () => {
        // Given: número 15
        const num = 15;
        // When: ejecuto la función
        const result = fizzBuzz(num);
        // Then: el resultado debe ser "FizzBuzz"
        expect(result).toBe('FizzBuzz');
    });

    // ESCENARIO 4
    test('Debe retornar el número como string si el número no es divisible por 3 ni por 5', () => {
        // Given: número 7
        const num = 7;
        // When: ejecuto la función
        const result = fizzBuzz(num);
        // Then: el resultado debe ser "7"
        expect(result).toBe('7');
    });

    // ESCENARIO 5
    test('Debe lanzar un error si el dato proporcionado no es un número', () => {
        // Given: un dato que no es un número, por ejemplo, un texto como "hola".
        const input = "hola";
        // When & Then: Envolviendo la ejecución en una función flecha, evaluamos que lance el error esperado.
        expect(() => fizzBuzz(input)).toThrow('El dato proporcionado no es un número');
    });

}); // Corrección: Cerramos correctamente el bloque describe