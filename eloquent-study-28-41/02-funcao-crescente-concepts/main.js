// function printFarmInventory(cows,chickens) {
//   let cowString = String(cows);
//   while (cowString.length < 3)
//     cowString = "0" + cowString;
//   console.log(cowString + " "+"Cows");
//   let chickensString = String(chickens);
//   while (chickensString.length < 3 )
//     chickensString = "0" + chickensString;
//   console.log(chickensString + " "+"Chickens");
// }
// printFarmInventory(7,11);


function animalsInventory(quantidade, animal){
  let stringQuantidade = String(quantidade);
  while(stringQuantidade.length < 3)
    stringQuantidade = "0" + stringQuantidade;
  console.log(`${stringQuantidade} ->  ${animal} ` );

}

function printAnimalInventory(cows, piggs, chickens) {
   animalsInventory(cows, "Cows");
   animalsInventory(chickens, "Chickens");
   animalsInventory(piggs, "Piggs");
}

printAnimalInventory(21, 57, 103);