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

function deepEqual(firstKey, secondKey) {

  if (typeof(firstKey) == "object" &&
      typeof(secondKey) == "object" &&
      firstKey !== null &&
      secondKey !== null
    ) 
  {
    if(
     Object.keys(firstKey).length !==
     Object.keys(secondKey).length
     ) 
    {
       return false;
    }
    for (let i in firstKey) {
        
        if(!deepEqual(firstKey[i] , secondKey[i])){
          return false          
        }       
    } 
    return true;
  }
  if (firstKey === secondKey){
      return true;
  }else {
      return false;
  }


}




console.log(deepEqual({value : 10, value2: 10},{value : 10, value2: 10}));