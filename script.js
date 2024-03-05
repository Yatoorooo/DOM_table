'use strict';
let table = document.getElementById('myTable');


  for (let i = 0; i < 10; i++) {
    let row = table.insertRow(i); 

   
    for (let j = 0; j < 10; j++) {
      let cell = row.insertCell(j); 
      let number = i * 10 + j + 1; 
      cell.textContent = number; 
    }
  }