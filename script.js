var canvas = document.getElementById('game-life')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cells = []

for (let c = 0; c < 10; c++) {
  for (let s = 0; s < 10; s++) {
    cells.push(
      {
        life: Math.round(Math.random()),
        string: s,
        colum: c,
        neighborhood: 0,
        id: s + c * 10,
      }
    )
  }
}

console.log(cells)
function game() {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].life == 1) {
      ctx.fillStyle = 'black'
      ctx.fillRect(cells[i].string * 20, cells[i].colum * 20, 20, 20)
    } else {
      ctx.fillStyle = 'white'
      ctx.fillRect(cells[i].string * 20, cells[i].colum * 20, 20, 20)
    }
  }
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].life == 1) {
      if (i - 11 > 0) { cells[i - 11].neighborhood++ }
      if (i - 10 > 0) { cells[i - 10].neighborhood++ }
      if (i - 9 > 0) { cells[i - 9].neighborhood++ }
      if (i - 1 > 0) { cells[i - 1].neighborhood++ }
      if (i + 1 < cells.length) { cells[i + 1].neighborhood++ }
      if (i + 9 < cells.length) { cells[i + 9].neighborhood++ }
      if (i + 10 < cells.length) { cells[i + 10].neighborhood++ }
      if (i + 11 < cells.length) { cells[i + 11].neighborhood++ }
    }
  }
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].neighborhood == 2 && cells[i].life == 1 || cells[i].neighborhood == 3 && cells[i].life == 1) {
    } else if (cells[i].neighborhood == 3 ) {
      cells[i].life = 1
    } else {
      cells[i].life = 0
    }
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].neighborhood = 0
  }
  console.log(cells)
}

setInterval(game, 1000);
