//Obs IMPORTANTES

//Estrutura de Array

const arrayList = [2, 3, 5, 7, 11];

//sua indexação :  0  1  2  3   4

//console.log(arrayList[1]); //logo : 3 caso : [1-1] => 2

//Método

const nome = "yuri";

//console.log(typeof nome.toUpperCase); // retorna a Function
//console.log(nome.toUpperCase()); // YURI

/*.push     -- > adiciona ao final do Array
  .join("") --> Transforma em string
  .pop()    --> remove o ultimo
  dentre outras*/

  //Object :*

 /* const day1 = {
    squirrel : false,
    events : [ "work" , "touch tree", "pizza",   // {[array structure]} obj estructure
      "running"
    ]
  };

  console.log(day1.squirrel); // > false

  console.log(day1.wolf);// > undefined

var anObject = {left: 1, right: 2};
console.log(anObject.left);  // → 1

delete anObject.left;
console.log(anObject.left); // → undefined
console.log("left" in anObject); // → false
console.log("right" in anObject); // → true*/

//conectando métodos && funções && parametros


//adicionando itens ao final. 
/*let todoList = [];

function addItemFinish(item) {
   return todoList.push(item);
}
addItemFinish("martelo");
addItemFinish("chave de fenda");

console.log(todoList);*/

//removendo itens.
/*let todoList = ["martelo", "chave de fenda"];

function removeItemFinish() {
   return todoList.pop();
}
removeItemFinish();

console.log(todoList);
*/

//mesma estrutura funciona para unshift/shift

// obs importantes do Slice
// 1 seleção de intervalo não de indices
//2 ele seta O INTERVALO ex : (0,3)

let todoList = ["chave de fenda", "chave de grifo",
   "alicate de bico", "martelo", "trena"];
let ferramentaSelect =[];
   function intervaloDeFerramentas(inicio, fim) {
    ferramentaSelect = todoList.slice(inicio,fim);
     return ferramentaSelect;
    
   }

   console.log(intervaloDeFerramentas(0, 3));
   
   // return somente dos seguintes indices [0, 1, 2]; <-- o ultimo fica pra avisar que os outros sairam.
// a partir daqui tudo é metodo, bora para os exercicios ! 