// O que essa Função precisa para Funcionar ?

// function findSolution(target) {

//   function find (start, history) {
//     if (start == target) {
//       return history;

//     } else if (start > target) {
//       return null;

//     } else {
//       return find(start + 5,`(${history} +5 )`) ||
//              find(start * 3,`(${history} *3 )`) ;
//     }
//   }
//   return find(1,"1");
// }

// console.log(findSolution(24));

function solucao(alvo) {
  function buscar(inicio, registro) {
    
    if (inicio == alvo){
      return registro
    }else if (inicio > alvo) {
      return null

    }else {
      return buscar((inicio +5) , `(${registro} + 5 )`) ||
             buscar((inicio   *3), "("+ registro + "*3" + ")");
    }
  }
  return buscar(1,"1");
}

console.log(solucao(32));



// // Condições para execução : 
// //Toda potenciaº = 1

// function power(base, expoente) {
 
//   if (expoente == 0 ){
//       return 1;
//   } else {
//       return base * power(base , expoente - 1);
//     }

// }


// console.log(power(4 , 4));


// let base = 4;
// let expoente = 4;
// /*let resultado = base;

// for (i = 1; i <= expoente - 1; i++ ) {
//   resultado = resultado * base;
//     console.log(resultado);
  
// }*/
// let resultado = base**expoente;
// console.log(resultado);

// PIMENTA ESSA :$$$$


