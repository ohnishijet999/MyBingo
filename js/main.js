'use strict';

{
  function creatColumn(col) {
    const sourse = [];
    for (let i = 0; i < 15; i++) {
      sourse[i] = i + 1 + 15 * col;
    }
  
    const column = [];
  
    for (let i = 0; i < 5; i++) {
      column[i] = sourse.splice(Math.floor(Math.random() * sourse.length), 1)[0];
    }

    return column;
  }

  function creatColumns() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = creatColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }

  function renderBingo(columns) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }
  
  const columns = creatColumns();
  renderBingo(columns);
}