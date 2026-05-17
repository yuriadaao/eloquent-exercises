// 1 função recebendo dois argumentos
//2 Retornar um array contendo todos os numeros do start até o end (incluindo-os);

function intervalo(inicio, fim, controlador){

  let recebeIntervalo = [];
  //validação de entrada de controlador

  if (controlador === undefined) {
    controlador = 1;
  } else if (controlador < 0) {
    for (let i = inicio; i >= fim; i += controlador) {
      recebeIntervalo.push(i)
    }
  } else {

    for (let i = inicio; i <= fim; i += controlador) {
    recebeIntervalo.push(i)
    }
  }
  return recebeIntervalo;
}

console.log(intervalo(-1, -10, 3));


// Função que recebe um array 
// E retorna o somatótio de todos seus índices.

/*function soma(array){
  let total = 0;
  for (let count in array) {    
   total += array[count]; 
   
  }
  return total ;
}

console.log(soma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));*/