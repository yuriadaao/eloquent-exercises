function trocaTroca(array){
  const temp = array.slice(0,1);
  array[0]= array.slice(3);
  array[3]=temp;

  
  return array
}

console.log(trocaTroca(["A","B","C","D"]));


function 