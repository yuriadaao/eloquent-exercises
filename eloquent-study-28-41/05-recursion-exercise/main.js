// 0 é par
// 1 é impar
// qualquer outro numero é identificado a partir de N - 2 


 
function indentificadorPariedade(n){
    let entrada = n;
  function pariedade(par, impar) {
     if (par < n && impar < n ) {
       n -=2 ;
       return pariedade(par,impar);
    } else if(par === n) {
      return `${entrada} é um número Par`;
    } else if (impar === n) {
      return `${entrada} é um número Impar`;
    } else {
      return `ENTRADA INVALIDA`;
    }
  }
  return pariedade(0, 1);
}


console.log(indentificadorPariedade(-1));



/*//Resolvi desse Jeito mas o Gpt falou que não serve. Vamo outro então..
// function identify(n){  
//   while ( n > 0)
//     n = n - 2;
  
//   function pariedade(par , impar) {
//     if (n === par) {
//      return(`É um número par.`);
//      } else if (n === impar ) {
//      return(`É um número impar`);
//      } else {
//      return `Pariedade inválida`; 
//     }
//   }
//   return pariedade(0, 1);
  

// }

// console.log(identify(12));*/