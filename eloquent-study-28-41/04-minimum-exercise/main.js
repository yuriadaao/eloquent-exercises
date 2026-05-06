//Uma função que retorne seu argumento de menor valor . 

function min (a, b) {
  if (a === b){
    return "Valores Iguais"
  }else if(a > b) {
    return `${b} é menor que ${a}`
  }else if(a < b) {
    return `${a} é menor que ${b} `;
  }else {
    return null;
  }

}
console.log(min(0, 10));

console.log(min(0, -10));