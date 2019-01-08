const container = document.querySelector('#container');


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

}

)

// for (i = 0; i < 16; i++) {
//   let boxDiv = document.createElement('div');
//   boxDiv.classList.add('box');
//   container.appendChild(boxDiv);
// }
