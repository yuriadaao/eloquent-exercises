// Entendo Closure
/*   V1~~~
function criarAjuste(valor) {
  return function(preco){
    return(preco*valor)/100 // aqui ficaria  -- > preco+valor 80*0.15 = 12(valor do acréscimo)
  }
}

const comissao = criarAjuste(15); // caso --> 0.15
const valorComissionado = Number(comissao(80) + 80);
console.log(`total a receber : ${valorComicionado}`);
*/

function criarAjuste(valor) {
  return function(preco){
    return preco*(1 + valor);
    

  }
}
const comissao = criarAjuste(0.15);
const taxa = Number(comissao(150) - 150);
console.log(`Valor da Comissão ${taxa}`);
const valorComissionado = Number(comissao(150));
console.log(`Valor total a Receber  ${valorComissionado}`);