window.onload = function() {
  var startBtn = document.getElementById('start-button');
  var logo = document.getElementById('logo');
  var game;

  startBtn.onclick = function() {
    startGame();

    startBtn.style.display = 'none';
    logo.className = 'small';
  };

  function startGame() {
    game = new Game('canvas');
    
    updateCanvas(-1);
  }

  function updateCanvas(time) {
    var timeSec = Math.floor(time / 1000);
    game.update(timeSec);

    if (!game.gameOver) {
      window.requestAnimationFrame(updateCanvas);
    } else {
      startBtn.style.display = '';
      logo.className = '';
    }
  }

};
