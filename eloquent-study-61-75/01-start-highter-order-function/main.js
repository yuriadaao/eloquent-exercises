// //--------------------Understand the filter() method;

// const ancestry = [
//   {
//     name: "Yuri Adão de Aquino",
//     sex: "Masc",
//     mother: "Irani Nascimento",
//     father: "Christiano Aquino",
//     born: 1991,
//   },
//   {
//     name: "Rayane Adão",
//     sex: "Fem",
//     mother: "Claudia Adão",
//     father: "Claudio de Souza",
//     born: 1999,
//   },
//   {
//     name: "Rafael Adão",
//     sex: "Masc",
//     mother: "Claudia Adão",
//     father: "Claudio de Souza",
//     born: 2004,
//   },
// ];

// //abaixo teste de idade com .map
// // console.log(
// //   ancestry.map((person) => {
// //     let age = 2026 - person.born;
// //     return age;
// //   }),
// // );

// // abaixo teste de reduce para encontrar o mais velho.
// // console.log(
// //   ancestry.reduce(function (min, cur) {
// //     if (cur.born < min.born) return cur;
// //     else return min;
// //   }),
// // );

// // function filter(array, test) {
// //   let passed = [];
// //   for (var i = 0; i < array.length; i++) {
// //     if (test(array[i])) passed.push(array[i]);
// //   }
// //   return passed;
// // }

// // console.log(
// //   filter(ancestry, function (person) {
// //     return person.born > 1900 && person.born < 2000;
// //   }),
// // );

// //---------- Now it's the map() method turn.
// // esse foi bem parecido sem mistério.

// //reduce parece ser bem diferente e útil.

// // function reduce(array, combine, start) {
// //   var current = start;
// //   for (var i = 0; i < array.length; i++) current = combine(current, array[i]);
// //   return current;
// // }

// // console.log(
// //   [1, 2, 3, 4].reduce((a, b) => {
// //     return a + b;
// //   }),
// // );

// //obs > o valor adiciona logo após nossa callback, é um valor para iniciar a operação,caso o Array possua apenas um elemento ele não é necessário

// // const resultado = [1, 2, 3, 4].reduce((a, b) => {
// //   return a + b;
// // }, 0); // <<-- valor inicial.

// // console.log(resultado);

// teste

// const developers = [
//   { name: "Yuri", age: 35, active: true },
//   { name: "Rayane", age: 27, active: false },
//   { name: "Rafael", age: 22, active: true },
//   { name: "Fernanda", age: 30, active: true },
// ];

// //simplificando  >
// console.log(developers.filter((dev) => dev.active).map((dev) => dev.name));

// console.log(
//   developers
//     .filter((dev) => {
//       if (dev.active) {
//         return true;
//       }
//     })
//     .map((dev) => {
//       return dev.name;
//     }),
// );

// function isActive(dev) {
//   if (dev.active) {
//     return true;
//   }
// }
// function identify(dev) {
//   return dev.name;
// }

// console.log(developers.filter(isActive).map(identify));

// Use o método `reduce` juntamente com o método `concat` para juntar um
// `array` de `arrays` em um único `array` que tem todos os elementos
// de entrada do `array`.

// ```js
// var arrays = [[1, 2, 3], [4, 5], [6]];
// // Your code here.
// // → [1, 2, 3, 4, 5, 6]
// ```

// let arrays = [[1, 2, 3], [4, 5], [6]];

// // function concact(acc, current) {
// //   return acc.concat(current);
// // }

// // // console.log(concact(arrays[0], arrays[1], arrays[2]));
// // console.log(arrays.reduce(concact));

// console.log(arrays.reduce((acc, current) => acc.concat(current)));

// Write a higher-order function loop that provides something like a
// for loop statement. It should take a value, a test function, an
// update function, and a body function. Each iteration,
// it should first run the test function on the current loop value
// and stop if that returns false. It should then call the body function,
// giving it the current value, and finally call the update function
// to create a new value and start over from the beginning.

// When defining the function, you can use a regular loop to do
// the actual looping.

// // Your code here.

// loop(3, n => n > 0, n => n - 1, console.log);
// // → 3
// // → 2
// // → 1

//  function test(n) {
//   return n > 0;
// }
// function update(n){
//   return n = n - 1;
// }

function loop(n, test, update, body) {
  if (!test(n)) {
    return n;
  } else {
    body(n);
    loop(update(n), test, update, body);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log,
);
