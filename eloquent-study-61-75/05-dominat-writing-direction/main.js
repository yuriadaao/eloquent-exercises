import SCRIPTS from "../scripts.js";

// console.log(SCRIPTS[0]);

// function countBy(items, groupName) {
//   let counts = []; // primeira iteração retorna undefined
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.find((c) => c.name == name);
//     if (!known) {
//       counts.push({ name, count: 1 });
//     } else {
//       known.count++;
//     }
//   }
//   return counts;
// }

// // console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));
// // → [{name: false, count: 2}, {name: true, count: 3}]

// // no caso do Exercício, ao invés de comparar verdadeiro ou falso
// //posso usar as direções de escrita.
// // function countBy(items, groupName) {
// //   let count = [];
// //   for (let item of items) {
// //     let name = groupName(item);
// //     let known = count.find((c) => c.name === name);
// //     if (!known) {
// //       count.push({ name, count: 1 });
// //     } else {
// //       known.count++;
// //     }
// //   }
// //   return count;
// // }
// // console.log(
// //   countBy([1, 2, 3, 4, 5], (n) =>
// //     n % 2 !== 0 ? "Número Impar" : "Número Par",
// //   ),
// // );

// // let SCRIPTS = [
// //   {
// //     name: "Latin",
// //     ranges: [[97, 123]],
// //   },
// // ];

// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (
//       script.ranges.some(([from, to]) => {
//         return code >= from && code < to;
//       })
//     ) {
//       return script;
//     }
//   }
//   return null;
// }

// console.log(characterScript(121));
// → {name: "Latin", …}

// // Run code here in the context of Chapter 5

// function textScripts(text) {
//   let scripts = countBy(text, (char) => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.name : "none";
//   }).filter(({ name }) => name != "none");

//   let total = scripts.reduce((n, { count }) => n + count, 0);
//   if (total == 0) return "No scripts found";

//   return scripts
//     .map(({ name, count }) => {
//       return `${Math.round((count * 100) / total)}% ${name}`;
//     })
//     .join(", ");
// }

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

let characterScript = (code) => {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script.direction;
    }
  }
  return null;
};

function countDirection(text, identify) {
  let direction = [];
  for (let type of text) {
    let typeTransform = type.codePointAt(0);
    if (identify(typeTransform) !== null) {
      direction.push(identify(typeTransform));
    }
  }
  return direction;
}

// console.log(countDirection("Hello", characterScript));

function countBy(items, groupName) {
  let count = [];
  for (let item of items) {
    let name = groupName(item);
    let known = count.find((c) => c.name === name);
    if (!known) {
      count.push({ name, count: 1 });
    } else {
      known.count++;
    }
  }
  return count;
}

let result = countBy(
  countDirection("Hey, مساء الخير", characterScript),
  (dir) => dir,
);

console.log(
  result.reduce((acc, current) =>
    acc.count > current.count ? acc.name : current.name,
  ),
);
