// Função deve conter um único argumento
// E deve identificar todos "B" (obs "B" !== "b")


/*
function contandoFeijao(deposito) {
  let caracterEspecial =""; 

  for (let i = 0; i < deposito.length ; i++ ) {
      deposito.charAt(i);
      if(deposito.charAt(i) ==="B"){
        caracterEspecial += ` B, `; 
      }   
    }

  return caracterEspecial;

}
console.log(contandoFeijao("bibiBibiBiBibiBi"));
*/

// Segunda Etapa
//Função de contagem como a anterior porém que recebe dois argumentos
// primeiro argumento contagem de caracteres
//segundo argumento indica Qual devera ser o caracter especial. 

function contaChar(contagem , charEspecial) {
  let deposito = "";
  let quantidade = 0 ;
  for (let i = 0; i < contagem.length ; i++) {
        
    if (contagem.charAt(i) === charEspecial) {
      deposito += `${charEspecial}, `;
      quantidade += 1;
    }
  }
  return `Temos ${quantidade} caracteres ${deposito}`;
}

console.log(contaChar("Inconstitucionalicimamente", "n"));









