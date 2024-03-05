'use strict';
let table = document.getElementById('myTable');


  for (var i = 0; i < 10; i++) {
    var row = table.insertRow(i); 

   
    for (var j = 0; j < 10; j++) {
      var cell = row.insertCell(j); 
      var number = i * 10 + j + 1; 
      cell.textContent = number; 
    }
  }