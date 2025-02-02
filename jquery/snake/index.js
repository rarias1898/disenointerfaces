$(document).ready(function () {
  const canvas = $('#gameCanvas')[0];
  const ctx = canvas.getContext('2d');
  const startButton = $('#startButton');
  const restartButton = $('#restartButton');
  const timerDisplay = $('#timer');

  let serpiente = [{ x: 10, y: 10 }];
  let direccion = { x: 0, y: 0 };
  let food = { x: 5, y: 5 };
  let gameInterval;
  let tiempo = 60;
  let puntuacion = 0;

  function drawserpiente() {
      ctx.fillStyle = 'lime';
      serpiente.forEach(segment => ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20));
  }

  function drawFood() {
      ctx.fillStyle = 'red';
      ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
  }

  function moveserpiente() {
      const head = { x: serpiente[0].x + direccion.x, y: serpiente[0].y + direccion.y };

      if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
          endGame();
          return;
      }

      if (head.x === food.x && head.y === food.y) {
          food = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
          puntuacion++;
      } else {
          serpiente.pop();
      }

      serpiente.unshift(head);
  }

  function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawserpiente();
      drawFood();
      moveserpiente();

      if (serpiente.slice(1).some(segment => segment.x === serpiente[0].x && segment.y === serpiente[0].y)) {
          endGame();
      }
  }

  function startGame() {
      serpiente = [{ x: 10, y: 10 }];
      direccion = { x: 0, y: 0 };
      food = { x: 5, y: 5 };
      puntuacion = 0;
      tiempo = 60;
      startButton.prop('disabled', true);
      restartButton.prop('disabled', false);
      gameInterval = setInterval(update, 100);
      timerInterval = setInterval(updateTimer, 1000);
  }

  function endGame() {
      clearInterval(gameInterval);
      clearInterval(timerInterval);
      alert(`Juego terminado! Puntuación: ${puntuacion}`);
      startButton.prop('disabled', false);
      restartButton.prop('disabled', true);
  }

  function updateTimer() {
      tiempo--;
      const minutes = String(Math.floor(tiempo / 60)).padStart(2, '0');
      const seconds = String(tiempo % 60).padStart(2, '0');
      timerDisplay.text(`Tiempo: ${minutes}:${seconds}`);
      if (tiempo <= 0) {
          endGame();
      }
  }

  startButton.on('click', startGame);
  restartButton.on('click', startGame);

  $(document).on('keydown', (e) => {
      switch (e.key) {
          case 'ArrowUp':
              if (direccion.y === 0) direccion = { x: 0, y: -1 };
              break;
          case 'ArrowDown':
              if (direccion.y === 0) direccion = { x: 0, y: 1 };
              break;
          case 'ArrowLeft':
              if (direccion.x === 0) direccion = { x: -1, y: 0 };
              break;
          case 'ArrowRight':
              if (direccion.x === 0) direccion = { x: 1, y: 0 };
              break;
      }
  });
});