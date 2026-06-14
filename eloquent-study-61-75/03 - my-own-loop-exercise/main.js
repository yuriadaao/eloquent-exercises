/*Escreva uma função de laço de ordem superior que funcione como um laço `for`.
Ela deve receber um valor, uma função de teste, uma função de atualização e uma função de corpo.
A cada iteração, a função de teste deve ser executada com o valor atual do laço e parar se o resultado for falso.
Em seguida, a função de corpo deve ser chamada, recebendo o valor atual como argumento, 
e finalmente a função de atualização deve ser chamada para criar um novo valor e recomeçar do início.
Ao definir a função, você pode usar um laço comum para realizar o laço.*/

function loop(n, test, update, body) {
  if (!test(n)) {
    return 0;
  } else {
    body(n);
    n = update(n);
    loop(n, test, update, body);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log,
);
