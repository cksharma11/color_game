const colors = ['red', 'blue', 'green', 'yellow'];
let positiveScore = 0;
let negativeScore = 0;
let colorNameIndex = 1;
let gameTime = window.prompt('Enter Game Time (Seconds) ');

const changeColorName = function(box) {
  updateScore(box.id, colors[colorNameIndex]);
  colorNameIndex = Math.floor(Math.random() * 4);
  const colorIndex = Math.floor(Math.random() * 4);

  document.getElementById('Heading').innerText = colors[
    colorNameIndex
  ].toUpperCase();
  document.getElementById('Heading').style.color = colors[colorIndex];
};

const updateScore = function(id, color) {
  if (id == color) {
    positiveScore = positiveScore + 10;
    document.getElementById('score').innerText = positiveScore;
    return;
  }
  negativeScore = negativeScore + 10;
  document.getElementById('n_score').innerText = negativeScore;
};

let timeCount = 0;
let playingTime = setInterval(() => {
  if (timeCount == gameTime) {
    clearInterval(playingTime);
    window.confirm(
      `Game Over\nFinal Score : ${positiveScore -
        negativeScore}\nWant to play again?`
    );
    location.reload();
  }
  timeCount++;
}, 1000);
