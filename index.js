const container = document.querySelector('#container');

// sets up grid
for(i = 0; i < 4; i++) {
  let row = document.createElement('div');
  row.classList.add("row");
  container.appendChild(row);
}

const rows = document.querySelectorAll(".row");
rows.forEach((row) => {
  for (i = 0; i < 4; i++) {
    let boxDiv = document.createElement('div');
    boxDiv.classList.add('box');
    row.appendChild(boxDiv);
  }
});

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener('mouseover', (e) => {
    box.style.backgroundColor = "red";
  });
});
