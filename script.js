const colors = ['red', 'blue', 'green', 'yellow'];
let positiveScore = 0;
let negativeScore = 0;
let colorNameIndex = 1;

const changeColorName = function(a) {
  updateScore(a.id, colors[colorNameIndex]);
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
  } else {
    negativeScore = negativeScore + 10;
    document.getElementById('n_score').innerText = negativeScore;
  }
};
