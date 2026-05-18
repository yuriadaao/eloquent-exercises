// Função que compare valores e retorne true caso sejam iguais.
//V - 1
// function deepEqual(firstKey, secondKey) {
//   if (typeof(firstKey) == "object" &&
//       typeof(secondKey) == "object" &&
//       firstKey !== null &&
//       secondKey !== null
//   ) {
//     for (let i in firstKey) {
        
//         if(deepEqual(firstKey[i] , secondKey[i])){
//           firstKey[i];
          
//         }
        

//         if (firstKey[i] !== secondKey[i]){
//           return false
//         }  {
          
//         }
      
       
//     }

//     }else if (firstKey === secondKey){
//       return true;
//     }else {
//       return false;
//     }
//     return true;
// }

//V - Clean - validação de propriedades do {obj}
 /* Revisao do exercicio

    Esse script nao da certo. JS eh cavernoso LELEEESK.
    por debaixo dos panos, tudo em JS eh objeto, entao
      typeof {} vai ser true
      typef [] TBM vai ser true, tlgd?
      E O PIOR...
      typeof null TB EH OBJETO LEK HAUAUAUHH
    
    Incluse se tu criar um array assim oh
      const array = [1,2,3];
    e tu fizer um
      Object.keys(array);
    vai retornar o seguinte:
       -> ['0', '1', '2'];
    ou seja, os indices do array sao considerados como keys
    e se rodar um
      Object.values(array)
    vai retornar:
      -> [1,2,3]

    Entao pela logica que tu implementou, se tu tiver um objeto
    {'0': 1, '1': 2, '2':3}
    e o array
    [1,2,3]
    Vai passar liso nesse teu script.
      console.log(deepEqual({'0': 1, '1': 2, '2':3}, [1,2,3]));
      -> true

    MAAAAS nao quer dizer que ta TUDO errado nao!
    Inclusive, o deep serve pra quando vc tem objeto dentro de objeto.
    Seguindo a ideia do deep, se liga nesse exemplo, e como seu script
    resolve o problema, apesar da validacao que pode melhorar:
    
      deepEqual({a:1, b:{d:3}, c:2}, {a:1, b:{d:3}, c:2})
      -> true

      deepEqual({a:1, b:{d:3}, c:2}, {a:1, b:{d:3}, c:4})
      -> false

    Parabens lelek, recursao eh uma parada que explode a cabeca msm.
    
    Mas vamo la, como que da pra melhorar essa validacao ai...
    Da uma olhada no final do arquivo, na function deepEqualRevisado.

    EH NOOOIX.
  */
function deepEqual(firstKey, secondKey) {
 
  if (typeof(firstKey) == "object" &&
      typeof(secondKey) == "object" &&
      firstKey !== null &&
      secondKey !== null
  ) {
      if(
        Object.keys(firstKey).length !== Object.keys(secondKey).length
      ) {
          return false;
      }
      for (let i in firstKey) {
        if(!deepEqual(firstKey[i] , secondKey[i])){
          return false          
        }       
      } 
    return true;
  }
  if (firstKey === secondKey){
      return true;
  }else {
      return false;
  }
}




console.log(deepEqual({value : 10, value2: 10},{value : 10, value2: 10}));



function deepEqualRevisado(firstKey, secondKey) {
  // Verificar se ambos são objetos e não nulos
  if (
    typeof firstKey === "object" && // Usar === para comparação de tipo
    typeof secondKey === "object" &&
    firstKey !== null &&
    secondKey !== null
  ) {
    // Verificar se são arrays
    if (Array.isArray(firstKey) !== Array.isArray(secondKey)) {
      // Se um é array e o outro não, não são iguais
      return false;
    }

    // Verificar se têm o mesmo número de chaves
    if (Object.keys(firstKey).length !== Object.keys(secondKey).length) {
      return false;
    }

    // Verificar se as chaves são iguais
    for (let i in firstKey) {
      // Verificar se a chave existe no segundo objeto
      if (!(i in secondKey)) {
        return false;
      }

      // Chamada recursiva para verificar se os valores são iguais
      if (!deepEqual(firstKey[i], secondKey[i])) {
        return false;
      }
    }

    // Se todas as verificações passaram, os objetos são iguais
    return true;
  }

  // Se não são objetos, verificar se são iguais
  if (firstKey === secondKey) {
    return true;
  } else {
    return false;
  }
}


console.log(deepEqualRevisado({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(deepEqualRevisado({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(deepEqualRevisado({ a: 1, b: 2 }, { a: 1 })); // false
console.log(deepEqualRevisado([1, 2, 3], [1, 2, 3])); // true
console.log(deepEqualRevisado([1, 2, 3], { 0: 1, 1: 2, 2: 3 })); // false

console.log(deepEqualRevisado({ a: 1, b: { c: 2, d: 3 } }, { a: 1, b: { c: 2, d: 3 } })); // true
console.log(deepEqualRevisado({ a: 1, b: { c: 2, d: 3 } }, { a: 1, b: { c: 2, d: 4 } })); // false
console.log(deepEqualRevisado({ a: 1, b: { c: 2, d: 3 } }, { a: 1, b: { c: 2 } })); // false
console.log(deepEqualRevisado({ a: 1, b: { c: 2, d: 3 } }, { a: 1, b: { d: 3, c: 2 } })); // true

console.log(deepEqualRevisado([1, { a: 2, b: 3 }, 4], [1, { a: 2, b: 3 }, 4])); // true
console.log(deepEqualRevisado([1, { a: 2, b: 3 }, 4], [1, { a: 2, b: 4 }, 4])); // false

console.log(deepEqualRevisado({ a: 1, b: undefined }, { a: 1, b: undefined })); // true
console.log(deepEqualRevisado({ a: 1, b: null }, { a: 1, b: null })); // true
console.log(deepEqualRevisado({ a: 1, b: NaN }, { a: 1, b: NaN })); // true

console.log(deepEqualRevisado({}, {})); // true
console.log(deepEqualRevisado({ a: 1 }, {})); // false
console.log(deepEqualRevisado({}, { a: 1 })); // false

console.log(deepEqualRevisado(null, null)); // true
console.log(deepEqualRevisado(null, undefined)); // false
console.log(deepEqualRevisado(undefined, undefined)); // true

console.log(deepEqualRevisado("string", "string")); // true
console.log(deepEqualRevisado(123, 123)); // true
console.log(deepEqualRevisado(true, true)); // true