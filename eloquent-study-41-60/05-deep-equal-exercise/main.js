// Função que compare valores e retorne true caso sejam iguais.
//V - 1
// function deepEqual(firstKey, secondKey) {
//   if (typeof(firstKey) == "object" &&
//       typeof(secondKey) == "object" &&
//       firstKey !== null &&
//       secondKey !== null
//   ) {
//     for (let i in firstKey) {

//         if(deepEqual(firstKey[i] , secondKey[i])){
//           firstKey[i];

//         }

//         if (firstKey[i] !== secondKey[i]){
//           return false
//         }  {

//         }

//     }

//     }else if (firstKey === secondKey){
//       return true;
//     }else {
//       return false;
//     }
//     return true;
// }

//V - Clean - validação de propriedades do {obj}

// function deepEqual(firstKey, secondKey) {

//   if (typeof(firstKey) == "object" &&
//       typeof(secondKey) == "object" &&
//       firstKey !== null &&
//       secondKey !== null
//     )
//   {
//     if(
//      Object.keys(firstKey).length !==
//      Object.keys(secondKey).length
//      )
//     {
//        return false;
//     }
//     for (let i in firstKey) {

//         if(!deepEqual(firstKey[i] , secondKey[i])){
//           return false
//         }
//     }
//     return true;
//   }
//   if (firstKey === secondKey){
//       return true;
//   }else {
//       return false;
//   }

// }

// console.log(deepEqual({value : 10, value2: 10},{value : 10, value2: 10}));

//V3 - Orientação do meu Mentor para prevenção de edge cases

function deepEqual(firstKey, secondKey) {
  if (Array.isArray(firstKey) !== Array.isArray(secondKey)) {
    return false;
  }
  if (Object.keys(firstKey).length !== Object.keys(secondKey).length) {
    return false;
  }
  if (typeof firstKey === "object" && typeof secondKey === "object") {
    for (let i in firstKey) {
      if (!deepEqual(firstKey[i], secondKey[i])) {
        return false;
      }
    }

    return true;
  }
  if (firstKey == null || secondKey == null) {
    return false;
  }
  if (firstKey === secondKey) {
    return true;
  }
}

console.log(deepEqual({ N: 20, M: 30 }, { N: 20, M: 30 }));
console.log(deepEqual({ N: 20 }, { N: 20, M: 30 }));
console.log(deepEqual({ Y: 20, u: { r: 20 } }, { Y: 20, u: { r: 20 } }));
console.log(deepEqual([1, 2, 3], { N: 20, M: 30 }));
console.log(deepEqual([1, 2, 3], [1, 2, 3]));
console.log(deepEqual([{ y: 1, u: 2 }], [{ y: 1, u: 2 }]));
