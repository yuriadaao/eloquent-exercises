//Escrever função que estruture uma lista a partir de um array


function arrayToList(array){
  let list = null;
  for (let i in array){
    list = { value : array[i],
      rest : list
    };
  }
  return list
}


console.log(arrayToList([1,2,3]));


//Ecrever função que faça o oposto lista para Array

function listToArray(list){
  let array = [];
  while(list) {
    array.push(list.value);
    list = list.rest; 
  }
  return array;

}
console.log(listToArray(arrayToList([1,2,3])));