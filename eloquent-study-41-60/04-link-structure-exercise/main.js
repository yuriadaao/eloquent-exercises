
//array para lista

function arrayToList(array) {
  let list = null;  // esse let me matooooooooooooooooooooooou
  
  for (let i = (array.length - 1);i >= 0 ; i--) { // aqui utilizamos a iteração reversa para que ao final tenhamos a lista na ordem correta
    list = { value : array[i],
      rest : list
    };

  }      
  return list;
}


//lista para array
function listToArray(list) {
  
  let array = [];
  
  while(list !== null) {   // ou while(list) < enquanto for true
    array.push(list.value);
    list = list.rest ;
  }
  return array;
  
}

function nth(list,requisicao) {

  for(let i = 0; i <= requisicao ; i++){
    if (i == requisicao) {
      return list.value ;
    }else if(list.rest == null){
      return undefined;
    }else {
      list = list.rest;
    }
    
  }
    
}



//Adicionando nós 
function prepend(valor, ligacao) {
    let listPrepend = { 
      value: valor,
      rest : ligacao
     };
  
  return listPrepend;
}

console.log(prepend(20, null));
console.log(prepend(10,prepend(20, null)));
console.log(arrayToList([1,2,3]));
console.log(listToArray(arrayToList([1,2,3])));
console.log(nth(arrayToList([1,2,3]),2));