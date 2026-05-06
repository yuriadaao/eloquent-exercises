// Xadrez 


let coluna ="";
let br = "\n"

for (let x = 0 ; x < 8 ; x++ ) {
  let linha = "";
  
    for (let i = 0 ;
      i < 8 ; i++ ) {
      if ((x + i) % 2 === 0) {
      linha += "#" ;
      }else {
      linha += " ";
    }
  
  }
    coluna += linha + br;
}

console.log(coluna);



  //  for (let i = 0 ; i < 8 ; i++ ) {
  //   if ( i % 2 === 0 && i <=3 ) {
  //     linha += "#";
  //   }if ( i % 2 !== 0 && i <= 3) {
  //     linha += " ";
  //   }if (i % 2 === 0 && i >= 4) {
  //     linha +=" ";
  //   } else {
  //     linha +="#";
  //   }
   

  // }

  //  console.log(linha)
//   for (let x = 0 ; x < 8 ; x++ ) {  
//     coluna += linha + br;
//   }


// console.log(coluna);






/* // Fizz & Buzz 

for (let i = 0; i < 100; i++) {
   i % 3 === 0 
    ? console.log("Fizz")
    :console.log(i) 
  || i % 5 === 0
    ?console.log("Buzz")
    :console.log(i); 
     
}
 

*/

/*versão 1
for (i =0; i < 100; i++ ){
  if ( i % 3 === 0 ){
    console.log("Fizz");
  }else if (i % 5 === 0) {
    console.log("Buzz");
  }else {
    console.log(i);
  }

}
*/  

// TRIANGULU DE LUUPPE

/*versão 3 

let jogoDaVelha = "#";
  
while (jogoDaVelha !== "########"){
  console.log(jogoDaVelha);
  jogoDaVelha = jogoDaVelha + "#";

}

*/


/*Versão 2  

  for (let i = 0 ; i < 14 ; i =+2 )
  switch ( i > 0 ) {
    case (i = 2 ):
      console.log("#");
      break;
    case (i = 4 ) :
      console.log("#")
      break;
    case (i = 6 ) :
      console.log("#")
      break;
    case (i = 8 ) :
      console.log("#")
      break;
    case (i = 10 ) :
      console.log("#")
      break;
    case (i = 12 ) :
      console.log("#")
      break;
    case (i = 14 ) :
      console.log("#")
      break;
    
  }
*/

 /*versão 1 

let jogoDaVelha = "#";

for (let i = 0 ;  i < 7 ; i ++ ) {
    console.log(jogoDaVelha);
    jogoDaVelha = jogoDaVelha + "#";
    
  };

*/

/*const valorMin = 2;
const valorMax = 8;

console.log(`Este é o Máximo ${Math.max(valorMin, valorMax)}`); 

// Pontecilização com for 

let pontenciaDe10 = 1 ;
for (let i = 0; i < 10 ; i++) {
    pontenciaDe10 = pontenciaDe10 *2;
    console.log(pontenciaDe10);
 
   if (i % 2 === 1 ) {
    break;
  }

}

// 10 x 2*2 = 1024 */
