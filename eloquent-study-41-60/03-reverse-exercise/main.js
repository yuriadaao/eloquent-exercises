//Resolução como pede o exercício :

//Primeira function modifica arraya de trá para frente.

function reverseArray(array) {
  const arrayReverse = [];
  for (let i = 0; i <= (array.length - 1); i++){
    arrayReverse.unshift(array[i]);
  }
  return arrayReverse;
}


console.log(reverseArray(["A", "B", "C", "D", "E"]));
// coração da trosoba array.length - 1- i 
//Exerciciozinho FDP

// Segunda function 

function reverseArrayInPLace(array) {

  const iteracao = array.length;

  let tempBunk = [];
  const finishBunk = [];
  for (let i = 0 ; i <= (iteracao/2)-1; i++){
    tempBunk = array[i];
    array[i] = array[array.length - 1 - i]
    array[array.length - 1- i] = tempBunk;

  }
  return array;

}

console.log(reverseArrayInPLace(["A","B","C","D","E","F"]));











// DAQUI PARA BAIXO É SÓ TESTE E EXPERIÊNCIA ---------------------------------



// //Concat a moda kkkkkkkkkkkkkkk

// function reverseArrayInPLace(array) {
//   const iteracao = array.length;
//   const tempBunkStart = [];
//   const tempBunkFinish = [];
 
   
//   for(let i = 0 ; i <= (iteracao - 1) ;i++) {
    
//     if (i < Math.floor(iteracao/2)){
//      tempBunkStart.push(array[i])        
//     } else {
//      tempBunkFinish.push(array[i]);         
//     }

//   }
  
  
  
//   return tempBunkFinish.concat(tempBunkStart) ;
// }

// console.log(reverseArrayInPLace(["A","B","C","D","E","F"]));
//1 função reverseArray
//recebe um array e produz um novo ao contrario . 
// não usei for in devido a necessidade de numeração correta


// function reverseOne(array) {
//   let reverseArray = [];
//   for (let i = 1; i <= array.length; i++) {
//    reverseArray.unshift(i);
//   }
//   return (reverseArray);
// }
// console.log(reverseOne([1, 2, 3, 4, 5, 6]));

//modifica com recursos parcialmente ja explorados, ja que antes iteravamos valores ficticios
//agora funciona com os valores de entrada pois o for of trabalha com os valores.

// function reverseOne(array) {
//   let reverseArray = [];
// //  for (const i in array) {
// //    reverseArray.unshift(i);   
// //   }
//   for( const v of array){
//     reverseArray.unshift(v);
//   }
//   return reverseArray;
// }

// Invenção de moda 

// const arrayOne = [1, 2, 3, 4, 5, 6];
// const arrayTwo = 
// console.log(reverseOne([1, 2, 3, 4, 5, 6]));

// function reverse(array) {
//   let arrayEnter= [];
//   for (const r of array) {
//     arrayEnter.unshift(r);
//   }
//   console.log(arrayEnter)

//  function unReverse(arrayReverse){
    
//     let arrayUnreverse = [] ;
//     for (const u of arrayReverse) {
//       arrayUnreverse.unshift(u);
//    }
//    return arrayUnreverse;
//  }
//    return unReverse(arrayEnter); 

// }

// console.log(reverse(["a","b","c","d","e"]));




// Agora vamos tentar uma outra estrutura

// const arrayStart = ["a","b","C","d","E","F"];

// function reverse(array){
//   const arrayReverse = [];
//   for (const i of array){
//     arrayReverse.unshift(i);
//   }
//   return arrayReverse;
// }
// console.log(reverse(arrayStart));

// function unReverse(array){
//     const arrayStart = [];
//   for(const i of array) {
//     arrayStart.unshift(i);
//   }
//   return arrayStart;
// }


// console.log(unReverse(reverse(arrayStart)));


// Aí adicionando uma variável ao escopo global
// eu percebi que não precisava de duas funções para desfazer a inversão . 


// const arrayStart = ["a","b","C","d","E","F"];

// function reverse(array){
//   const arrayReverse = [];
//   for (const i of array){
//     arrayReverse.unshift(i);
//   }
//   return arrayReverse;
// }
// console.log(reverse(arrayStart), reverse(reverse(arrayStart)));
