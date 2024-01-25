// 1. Suma y Resta:

// Escribe una función que tome dos números como parámetros y devuelva su suma.

// Escribe otra función que tome dos números como parámetros y devuelva su resta.

function add(num1, num2) {
    let result = num1 + num2;
    return result
}

console.log(add(2,2));


function sub(num1, num2) {
    let result = num1 - num2;
    return result
}

console.log(sub(4, 2));

// 2. Multiplicación y División:

// Crea una función para multiplicar dos números.

// Crea otra función para dividir dos números.

function multiply(num1, num2) {
    let result = num1 * num2;
    return result
}

console.log(multiply(4, 5));


function divide(num1, num2) {
    let result = num1 / num2;
    return result
}

console.log(divide(10, 5));

// 3. Número Mayor:

// Escribe una función que tome dos números como parámetros y devuelva el mayor de ellos.

//  function compare(num1, num2) {
//    if (num1 > num2) {
//          console.log(`${num1} es mayor que ${num2}`)
     
//     } else {
//          console.log(`${num1} no es mayor que ${num2}`)
        
//      }
    
//  }

// (compare(8, 4));


function compare(num1, num2) {
    if (num1 > num2) {
        return `${num1} es mayor que ${num2}`;
    } else {
        return `${num1} no es mayor que ${num2}`;
    }
}

console.log(compare(8, 4));

// 4. Saludo Personalizado:

// Crea una función que tome el nombre de una persona como parámetro y devuelva un saludo personalizado.

function greeting(person) {
    if (person.name) {
        return `Hola, ${person.name}. ¿Como estas?`;
    } else {
        return `Error: este nombre no esta definido`;
    }
}

console.log(greeting({ name: 'Ruben' }));
console.log(greeting({ name: 'Miguel' }));


// 5. Par o Impar:

// Escribe una función que determine si un número dado es par o impar.

function evenOrOdd(n) {
    if (n % 2 == 0){
        return `${n} es un numero par`
    } else {
        return `${n} es un numero impar`
    }
}

console.log(evenOrOdd(8));
console.log(evenOrOdd(101));

// 6. Longitud de una Cadena:

// Crea una función que tome una cadena como parámetro y devuelva la longitud de esa cadena.


function argument(n) {
    let text = `La cadena '${n}' tiene una longitud de ${n.length}`;
    return text;
}

console.log(argument('hola'));

// 7. Área de un Rectángulo:

// Crea una función que tome la longitud y el ancho de un rectángulo como parámetros y devuelva su área.

function rectangle(l, w) {
    let result = l * w;
    return result
}

console.log(rectangle(18, 8));

// 8. Promedio de una Lista:

// Escribe una función que tome una lista de números como parámetro y devuelva su promedio.

function list(nums) {
    let add = nums.reduce((num1, num2) => num1 + num2);
    let average = add / nums.length;
    return average;
}

let total = [ 2, 30, 29, 140, 200 ];

console.log(list(total));


// 9. Concatenar Listas:

// Crea una función que tome dos listas como parámetros y devuelva una nueva lista que sea la concatenación de ambas.

function concatenatedList(num1, num2) {
    let add = num1.concat(num2);
    return add;
}

let arrayList1 = [ 1, 2, 3, 4 ];
let arrayList2 = [ 5, 6, 7, 8 ];

console.log(concatenatedList(arrayList1, arrayList2));