const container = document.querySelector('#container');

function createGrid(number) {
  for(i = 0; i < number; i++) {
    let row = document.createElement('div');
    row.classList.add("row");
    container.appendChild(row);
  }

  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (i = 0; i < number; i++) {
      let boxDiv = document.createElement('div');
      boxDiv.style.height = `${1200/number}px`;
      boxDiv.style.width = `${1200/number}px`;
      boxDiv.classList.add('box');
      row.appendChild(boxDiv);
    }
  });
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
      box.style.backgroundColor = "red";
    });
  })
}

function restart() {
  console.log("you hit restart");
  container.innerText = " ";
  number = prompt(`How many cells do you want in your grid width?`);
  createGrid(number);

}

createGrid(16);
const restartButton = document.querySelector('#restart')
