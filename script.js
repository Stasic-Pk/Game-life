var canvas = document.getElementById('game-life')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cells = []
const w = 100
const s = 5

for (let c = 0; c < w; c++) {
  for (let s = 0; s < w; s++) {
    cells.push(
      {
        life: Math.round(Math.random() - 0.355),
        string: s,
        colum: c,
        neighborhood: 0,
        id: s + c * 10,
      }
    )
  }
}

function game() {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].life == 1) {
      ctx.fillStyle = 'black'
      ctx.fillRect(cells[i].string * s, cells[i].colum * s, s, s)
    } else {
      ctx.fillStyle = 'white'
      ctx.fillRect(cells[i].string * s, cells[i].colum * s, s, s)
    }
  }
  for (let i = 0; i < cells.length; i++) {
    let ia = i - 1
    let is = i + 1
    if (cells[i].life == 1) {
      if (i - w + 1 > 0) { cells[i - w + 1].neighborhood++ }
      if (i - w > 0) { cells[i - w].neighborhood++ }
      if (i - w - 1 > 0) { cells[i - w - 1].neighborhood++ }
      if (i - 1 > 0) { cells[i - 1].neighborhood++ }
      if (i + 1 < cells.length) { cells[i + 1].neighborhood++ }
      if (i + w - 1 < cells.length) { cells[i + w - 1].neighborhood++ }
      if (i + w < cells.length) { cells[i + w].neighborhood++ }
      if (i + w + 1 < cells.length) { cells[i + w + 1].neighborhood++ }
    }
  }
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].neighborhood == 2 && cells[i].life == 1 || cells[i].neighborhood == 3 && cells[i].life == 1) {
      cells[i].life = 1
    } else if (cells[i].neighborhood == 3 && cells[i].life == 0) {
      cells[i].life = 1
    } else {
      cells[i].life = 0
    }
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].neighborhood = 0
  }
}

setInterval(game, 1);
