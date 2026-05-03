
const board =document.querySelector(".container");
const size = 8;


for (let i = 0; i < size ; i++ ) {
  const rows = document.createElement("article");
  rows.classList.add("rows")

  for (let n = 0; n < size ; n++ ) {
    const cell = document.createElement("div");

    if ((i + n )% 2 === 0) {
      cell.classList.add('light-gray','tiles');
    } else {
      cell.classList.add('black', 'tiles')
    }
    rows.appendChild(cell);
  }

  board.appendChild(rows);

}

