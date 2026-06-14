// Os arrays também possuem um método `every` análogo ao método `some`.
//  Esse método retorna `true` quando a função fornecida retorna `true`
// para todos os elementos do array. De certa forma, `some` é uma versão
// do operador `||` que atua em arrays, e `every` é como o operador `&&`.

// Implemente `every` como uma função que recebe um array e uma função
//  predicativa como parâmetros. Escreva duas versões,
// uma usando um laço e outra usando o método `some`

// v1 -- laço de repetição.
// function every(array, test) {
//   for (let i of array) {
//     if (!test(i)) {
//       return false;
//     }
//   }
//   return true;
// }

//v2 -- Serch error with some (resoluction solve)

// function every(array, test) {
//   if (array.some(test)) {
//     array.shift();
//     every(array, test);
//   } else {
//     return false;
//   }
//   return true;
// }

function every(array, test) {
  if (array.some((n) => !test(n))) {
    return false;
  }
  return true;
}
console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// // → false
console.log(every([], (n) => n < 10));
// → true
