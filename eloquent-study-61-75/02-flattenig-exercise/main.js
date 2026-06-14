// Use o método `reduce` juntamente com o método `concat` para juntar um `array` de `arrays`
// em um único `array` que tem todos os elementos de entrada do `array`.

// ```js

// let arrays = [[1, 2, 3], [4, 5], [6]];

// ---------------------FIRST SOLUCTION V1----------------------------
// function newArray(array) {
//   function arrayCall(acc, current) {
//     return acc.concat(current);
//   }
//   return array.reduce(arrayCall);
// }

// console.log(newArray(arrays));

//------------------------SECOND SOLUCTION V2 ---------------------------

// console.log(
//   arrays.reduce((acc, current) => {
//     return acc.concat(current);
//   }),
// );

//------------------------ V2 simplify -------------------------------------

// console.log(arrays.reduce((acc, current) => acc.concat(current)));

//****************************ONLY TEST******************************************************/

// const users = [
//   {
//     id: 1,
//     name: "Yuri",
//     role: null,
//     donation: [20, 10, 30],
//   },
//   {
//     id: 2,
//     name: "Victor",
//     role: null,
//     donation: [50, 50, 10],
//   },
//   {
//     id: 3,
//     name: "Italo",
//     role: null,
//     donation: [100, 100, 100, 10],
//   },
// ];
// function donationValue(array, n) {
//   function identifyById() {
//     return array.filter((array) => array.id === n);
//   }
//   let value = identifyById(array, n);
//   value = value.map((user) => (user = user.donation)).flat();

//   return value.reduce((acc, current) => acc + current);
// }

// console.log(donationValue(users, 1));
// // console.log(identifyById(users, 2));
